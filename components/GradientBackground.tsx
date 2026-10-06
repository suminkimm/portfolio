"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

class TouchTexture {
  size: number;
  width: number;
  height: number;
  maxAge: number;
  radius: number;
  speed: number;
  trail: Array<{
    x: number;
    y: number;
    age: number;
    force: number;
    vx: number;
    vy: number;
  }>;
  last: { x: number; y: number } | null;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  texture: THREE.Texture;

  constructor() {
    this.size = 64;
    this.width = this.height = this.size;
    this.maxAge = 64;
    this.radius = 0.25 * this.size;
    this.speed = 1 / this.maxAge;
    this.trail = [];
    this.last = null;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.texture = new THREE.Texture(this.canvas);
    this.texture.needsUpdate = true;
  }

  update() {
    this.clear();
    const speed = this.speed;

    for (let i = this.trail.length - 1; i >= 0; i -= 1) {
      const point = this.trail[i];
      const force = point.force * speed * (1 - point.age / this.maxAge);
      point.x += point.vx * force;
      point.y += point.vy * force;
      point.age += 1;

      if (point.age > this.maxAge) {
        this.trail.splice(i, 1);
      } else {
        this.drawPoint(point);
      }
    }

    this.texture.needsUpdate = true;
  }

  clear() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  addTouch(point: { x: number; y: number }) {
    let force = 0;
    let vx = 0;
    let vy = 0;
    const last = this.last;

    if (last) {
      const dx = point.x - last.x;
      const dy = point.y - last.y;
      if (dx === 0 && dy === 0) return;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance === 0) return;
      vx = dx / distance;
      vy = dy / distance;
      force = Math.min(distance * distance * 20000, 2.0);
    }

    this.last = { x: point.x, y: point.y };
    this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  }

  drawPoint(point: { x: number; y: number; age: number; force: number; vx: number; vy: number }) {
    const pos = {
      x: point.x * this.width,
      y: (1 - point.y) * this.height,
    };

    let intensity = 1;
    if (point.age < this.maxAge * 0.3) {
      intensity = Math.sin((point.age / (this.maxAge * 0.3)) * (Math.PI / 2));
    } else {
      const t = 1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7);
      intensity = -t * (t - 2);
    }
    intensity *= point.force;

    const radius = this.radius;
    const offset = this.size * 5;
    this.ctx.shadowOffsetX = offset;
    this.ctx.shadowOffsetY = offset;
    this.ctx.shadowBlur = radius * 1;
    this.ctx.shadowColor = `rgba(${((point.vx + 1) / 2) * 255}, ${((point.vy + 1) / 2) * 255}, ${intensity * 255}, ${0.2 * intensity})`;

    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

function GradientSurface() {
  const { size } = useThree();
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const touchTextureRef = useRef<TouchTexture | null>(null);
  const previousPointer = useRef({ x: 0.5, y: 0.5 });
  const pointerRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: event.clientX / window.innerWidth,
        y: 1 - event.clientY / window.innerHeight,
      };
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      pointerRef.current = {
        x: touch.clientX / window.innerWidth,
        y: 1 - touch.clientY / window.innerHeight,
      };
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uColor1: { value: new THREE.Vector3(0.945, 0.353, 0.133) },
      uColor2: { value: new THREE.Vector3(0.0, 0.2588, 0.2196) },
      uColor3: { value: new THREE.Vector3(0.945, 0.353, 0.133) },
      uColor4: { value: new THREE.Vector3(0.0, 0.0, 0.0) },
      uColor5: { value: new THREE.Vector3(0.945, 0.353, 0.133) },
      uColor6: { value: new THREE.Vector3(0.0, 0.0, 0.0) },
      uSpeed: { value: 0.8 },
      uIntensity: { value: 1.8 },
      uTouchTexture: { value: null as THREE.Texture | null },
      uGrainIntensity: { value: 0.02 },
      uZoom: { value: 1.0 },
      uDarkNavy: { value: new THREE.Vector3(0.0, 0.0, 0.0) },
      uGradientSize: { value: 0.45 },
      uGradientCount: { value: 12.0 },
      uColor1Weight: { value: 0.5 },
      uColor2Weight: { value: 1.8 }
    }),
    []
  );

  useEffect(() => {
    touchTextureRef.current = new TouchTexture();
    uniforms.uTouchTexture.value = touchTextureRef.current.texture;
  }, [uniforms]);

  useFrame((state, delta) => {
    const material = materialRef.current;
    if (!material) return;

    const pointer = {
      x: pointerRef.current.x,
      y: pointerRef.current.y,
    };

    const touchPoint = {
      x: pointer.x,
      y: pointer.y,
    };

    const distance = Math.hypot(
      touchPoint.x - previousPointer.current.x,
      touchPoint.y - previousPointer.current.y,
    );

    if (distance > 0.005 || state.clock.elapsedTime < 0.5) {
      touchTextureRef.current?.addTouch(touchPoint);
      previousPointer.current = touchPoint;
    }

    touchTextureRef.current?.update();

    material.uniforms.uTime.value += delta;
    material.uniforms.uResolution.value.set(size.width, size.height);
    material.uniforms.uTouchTexture.value = touchTextureRef.current?.texture ?? null;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform vec3 uColor3;
          uniform vec3 uColor4;
          uniform vec3 uColor5;
          uniform vec3 uColor6;
          uniform float uSpeed;
          uniform float uIntensity;
          uniform sampler2D uTouchTexture;
          uniform float uGrainIntensity;
          uniform float uZoom;
          uniform vec3 uDarkNavy;
          uniform float uGradientSize;
          uniform float uGradientCount;
          uniform float uColor1Weight;
          uniform float uColor2Weight;

          varying vec2 vUv;

          #define PI 3.14159265359

          float grain(vec2 uv, float time) {
            vec2 grainUv = uv * uResolution * 0.5;
            float grainValue = fract(sin(dot(grainUv + time, vec2(12.9898, 78.233))) * 43758.5453);
            return grainValue * 2.0 - 1.0;
          }

          vec3 getGradientColor(vec2 uv, float time) {
            float gradientRadius = uGradientSize;

            vec2 center1 = vec2(
              0.5 + sin(time * uSpeed * 0.4) * 0.4,
              0.5 + cos(time * uSpeed * 0.5) * 0.4
            );
            vec2 center2 = vec2(
              0.5 + cos(time * uSpeed * 0.6) * 0.5,
              0.5 + sin(time * uSpeed * 0.45) * 0.5
            );
            vec2 center3 = vec2(
              0.5 + sin(time * uSpeed * 0.35) * 0.45,
              0.5 + cos(time * uSpeed * 0.55) * 0.45
            );
            vec2 center4 = vec2(
              0.5 + cos(time * uSpeed * 0.5) * 0.4,
              0.5 + sin(time * uSpeed * 0.4) * 0.4
            );
            vec2 center5 = vec2(
              0.5 + sin(time * uSpeed * 0.7) * 0.35,
              0.5 + cos(time * uSpeed * 0.6) * 0.35
            );
            vec2 center6 = vec2(
              0.5 + cos(time * uSpeed * 0.45) * 0.5,
              0.5 + sin(time * uSpeed * 0.65) * 0.5
            );
            vec2 center7 = vec2(
              0.5 + sin(time * uSpeed * 0.55) * 0.38,
              0.5 + cos(time * uSpeed * 0.48) * 0.42
            );
            vec2 center8 = vec2(
              0.5 + cos(time * uSpeed * 0.65) * 0.36,
              0.5 + sin(time * uSpeed * 0.52) * 0.44
            );
            vec2 center9 = vec2(
              0.5 + sin(time * uSpeed * 0.42) * 0.41,
              0.5 + cos(time * uSpeed * 0.58) * 0.39
            );
            vec2 center10 = vec2(
              0.5 + cos(time * uSpeed * 0.48) * 0.37,
              0.5 + sin(time * uSpeed * 0.62) * 0.43
            );
            vec2 center11 = vec2(
              0.5 + sin(time * uSpeed * 0.68) * 0.33,
              0.5 + cos(time * uSpeed * 0.44) * 0.46
            );
            vec2 center12 = vec2(
              0.5 + cos(time * uSpeed * 0.38) * 0.39,
              0.5 + sin(time * uSpeed * 0.56) * 0.41
            );

            float dist1 = length(uv - center1);
            float dist2 = length(uv - center2);
            float dist3 = length(uv - center3);
            float dist4 = length(uv - center4);
            float dist5 = length(uv - center5);
            float dist6 = length(uv - center6);
            float dist7 = length(uv - center7);
            float dist8 = length(uv - center8);
            float dist9 = length(uv - center9);
            float dist10 = length(uv - center10);
            float dist11 = length(uv - center11);
            float dist12 = length(uv - center12);

            float influence1 = 1.0 - smoothstep(0.0, gradientRadius, dist1);
            float influence2 = 1.0 - smoothstep(0.0, gradientRadius, dist2);
            float influence3 = 1.0 - smoothstep(0.0, gradientRadius, dist3);
            float influence4 = 1.0 - smoothstep(0.0, gradientRadius, dist4);
            float influence5 = 1.0 - smoothstep(0.0, gradientRadius, dist5);
            float influence6 = 1.0 - smoothstep(0.0, gradientRadius, dist6);
            float influence7 = 1.0 - smoothstep(0.0, gradientRadius, dist7);
            float influence8 = 1.0 - smoothstep(0.0, gradientRadius, dist8);
            float influence9 = 1.0 - smoothstep(0.0, gradientRadius, dist9);
            float influence10 = 1.0 - smoothstep(0.0, gradientRadius, dist10);
            float influence11 = 1.0 - smoothstep(0.0, gradientRadius, dist11);
            float influence12 = 1.0 - smoothstep(0.0, gradientRadius, dist12);

            vec2 rotatedUv1 = uv - 0.5;
            float angle1 = time * uSpeed * 0.15;
            rotatedUv1 = vec2(
              rotatedUv1.x * cos(angle1) - rotatedUv1.y * sin(angle1),
              rotatedUv1.x * sin(angle1) + rotatedUv1.y * cos(angle1)
            );
            rotatedUv1 += 0.5;

            vec2 rotatedUv2 = uv - 0.5;
            float angle2 = -time * uSpeed * 0.12;
            rotatedUv2 = vec2(
              rotatedUv2.x * cos(angle2) - rotatedUv2.y * sin(angle2),
              rotatedUv2.x * sin(angle2) + rotatedUv2.y * cos(angle2)
            );
            rotatedUv2 += 0.5;

            float radialGradient1 = length(rotatedUv1 - 0.5);
            float radialGradient2 = length(rotatedUv2 - 0.5);
            float radialInfluence1 = 1.0 - smoothstep(0.0, 0.8, radialGradient1);
            float radialInfluence2 = 1.0 - smoothstep(0.0, 0.8, radialGradient2);

            vec3 color = vec3(0.0);
            color += uColor1 * influence1 * (0.55 + 0.45 * sin(time * uSpeed)) * uColor1Weight;
            color += uColor2 * influence2 * (0.55 + 0.45 * cos(time * uSpeed * 1.2)) * uColor2Weight;
            color += uColor3 * influence3 * (0.55 + 0.45 * sin(time * uSpeed * 0.8)) * uColor1Weight;
            color += uColor4 * influence4 * (0.55 + 0.45 * cos(time * uSpeed * 1.3)) * uColor2Weight;
            color += uColor5 * influence5 * (0.55 + 0.45 * sin(time * uSpeed * 1.1)) * uColor1Weight;
            color += uColor6 * influence6 * (0.55 + 0.45 * cos(time * uSpeed * 0.9)) * uColor2Weight;

            if (uGradientCount > 6.0) {
              color += uColor1 * influence7 * (0.55 + 0.45 * sin(time * uSpeed * 1.4)) * uColor1Weight;
              color += uColor2 * influence8 * (0.55 + 0.45 * cos(time * uSpeed * 1.5)) * uColor2Weight;
              color += uColor3 * influence9 * (0.55 + 0.45 * sin(time * uSpeed * 1.6)) * uColor1Weight;
              color += uColor4 * influence10 * (0.55 + 0.45 * cos(time * uSpeed * 1.7)) * uColor2Weight;
            }
            if (uGradientCount > 10.0) {
              color += uColor5 * influence11 * (0.55 + 0.45 * sin(time * uSpeed * 1.8)) * uColor1Weight;
              color += uColor6 * influence12 * (0.55 + 0.45 * cos(time * uSpeed * 1.9)) * uColor2Weight;
            }

            color += mix(uColor1, uColor3, radialInfluence1) * 0.45 * uColor1Weight;
            color += mix(uColor2, uColor4, radialInfluence2) * 0.4 * uColor2Weight;

            color = clamp(color, vec3(0.0), vec3(1.0)) * uIntensity;

            float luminance = dot(color, vec3(0.299, 0.587, 0.114));
            color = mix(vec3(luminance), color, 1.35);
            color = pow(color, vec3(0.92));

            float brightness1 = length(color);
            float mixFactor1 = max(brightness1 * 1.0, 0.08);
            color = mix(uDarkNavy, color, mixFactor1);

            float maxBrightness = 1.0;
            float brightness = length(color);
            if (brightness > maxBrightness) {
              color = color * (maxBrightness / brightness);
            }

            return color;
          }

          void main() {
            vec2 uv = vUv;

            vec4 touchTex = texture2D(uTouchTexture, uv);
            float vx = -(touchTex.r * 2.0 - 1.0);
            float vy = -(touchTex.g * 2.0 - 1.0);
            float intensity = touchTex.b;
            uv.x += vx * 0.8 * intensity;
            uv.y += vy * 0.8 * intensity;

            vec2 center = vec2(0.5);
            float dist = length(uv - center);
            float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * intensity;
            float wave = sin(dist * 15.0 - uTime * 2.0) * 0.03 * intensity;
            uv += vec2(ripple + wave);

            vec3 color = getGradientColor(uv, uTime);

            float grainValue = grain(uv, uTime);
            color += grainValue * uGrainIntensity;

            float timeShift = uTime * 0.5;
            color.r += sin(timeShift) * 0.02;
            color.g += cos(timeShift * 1.4) * 0.02;
            color.b += sin(timeShift * 1.2) * 0.02;

            float brightness2 = length(color);
            float mixFactor2 = max(brightness2 * 1.0, 0.08);
            color = mix(uDarkNavy, color, mixFactor2);

            color = clamp(color, vec3(0.0), vec3(1.0));

            float maxBrightness = 1.0;
            float brightness = length(color);
            if (brightness > maxBrightness) {
              color = color * (maxBrightness / brightness);
            }

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function GradientBackground() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`webgl-background ${isReady ? "ready" : ""}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 45 }}
        dpr={1}
        gl={{ antialias: false, alpha: true, premultipliedAlpha: false, powerPreference: "high-performance" }}
      >
        <GradientSurface />
      </Canvas>
    </div>
  );
}
