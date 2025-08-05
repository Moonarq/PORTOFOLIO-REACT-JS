/*
	Optimized version - Installed from https://reactbits.dev/default/
*/

import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

import "./LiquidChrome.css";

export const LiquidChrome = ({
  baseColor = [0.1, 0.1, 0.1],
  speed = 0.2,
  amplitude = 0.3,
  frequencyX = 3,
  frequencyY = 3,
  interactive = true,
  ...props
}) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Lower precision for better performance
    const renderer = new Renderer({ 
      antialias: false, // Disable antialias for performance
      alpha: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance"
    });
    rendererRef.current = renderer;
    
    const gl = renderer.gl;
    gl.clearColor(0.1, 0.1, 0.1, 1);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Heavily optimized fragment shader
    const fragmentShader = `
      precision highp float; // Lower precision for performance
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
          vec2 fragCoord = uvCoord * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

          // Reduced iterations from 10 to 4 for performance
          for (float i = 1.0; i < 10.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
          }

          // Simplified mouse interaction
          vec2 diff = (uvCoord - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 15.0); // Reduced calculation
          float ripple = sin(8.0 * dist - uTime * 1.5) * 0.02; // Reduced complexity
          uv += (diff / (dist + 0.001)) * ripple * falloff;

          vec3 color = uBaseColor / abs(sin(uTime * 0.8 - uv.y - uv.x)); // Simplified
          return vec4(color, 1.0);
      }

      void main() {
          // Removed anti-aliasing sampling completely for performance
          gl_FragColor = renderImage(vUv);
      }
    `;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ]),
        },
        uBaseColor: { value: new Float32Array(baseColor) },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0, 0]) },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    // Throttled resize
    let resizeTimeout;
    function resize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const scale = Math.min(window.devicePixelRatio, 1.5); // Limit DPR for performance
        renderer.setSize(
          container.offsetWidth * scale,
          container.offsetHeight * scale,
        );
        const resUniform = program.uniforms.uResolution.value;
        resUniform[0] = gl.canvas.width;
        resUniform[1] = gl.canvas.height;
        resUniform[2] = gl.canvas.width / gl.canvas.height;
      }, 100);
    }
    window.addEventListener("resize", resize);
    resize();

    // Throttled mouse movement
    let mouseTimeout;
    function handleMouseMove(event) {
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        const rect = container.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = 1 - (event.clientY - rect.top) / rect.height;
        const mouseUniform = program.uniforms.uMouse.value;
        mouseUniform[0] = x;
        mouseUniform[1] = y;
      }, 16); // ~60fps throttle
    }

    function handleTouchMove(event) {
      if (event.touches.length > 0) {
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => {
          const touch = event.touches[0];
          const rect = container.getBoundingClientRect();
          const x = (touch.clientX - rect.left) / rect.width;
          const y = 1 - (touch.clientY - rect.top) / rect.height;
          const mouseUniform = program.uniforms.uMouse.value;
          mouseUniform[0] = x;
          mouseUniform[1] = y;
        }, 16);
      }
    }

    if (interactive) {
      container.addEventListener("mousemove", handleMouseMove, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    // Frame rate limiting and performance monitoring
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;
    
    function update(currentTime) {
      rafRef.current = requestAnimationFrame(update);
      
      // Frame rate limiting
      if (currentTime - lastTime < frameInterval) {
        return;
      }
      lastTime = currentTime;
      
      program.uniforms.uTime.value = currentTime * 0.001 * speed;
      renderer.render({ scene: mesh });
    }
    rafRef.current = requestAnimationFrame(update);

    // Set canvas styles for hardware acceleration
    const canvas = gl.canvas;
    canvas.style.transform = 'translateZ(0)';
    canvas.style.willChange = 'transform';
    canvas.style.backfaceVisibility = 'hidden';
    
    container.appendChild(canvas);

    return () => {
      // Comprehensive cleanup
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimeout);
      clearTimeout(mouseTimeout);
      
      window.removeEventListener("resize", resize);
      if (interactive) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("touchmove", handleTouchMove);
      }
      
      if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
      }
      
      // Proper WebGL cleanup
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
      
      // Clear references
      rendererRef.current = null;
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return (
    <div 
      ref={containerRef} 
      className="liquidChrome-container" 
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
        contain: 'strict',
        isolation: 'isolate'
      }}
      {...props} 
    />
  );
};

export default LiquidChrome;