"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points as DreiPoints, PointMaterial } from "@react-three/drei";
import { Points as ThreePoints, Float32BufferAttribute } from "three";
import { useTheme } from "next-themes";

function Stars() {
  const ref = useRef<ThreePoints>(null);
  const { theme } = useTheme();

  // パーティクルの位置を生成
  const positions = useMemo(() => {
    const positions = [];
    const n = 2000;
    const radius = 1.2;

    for (let i = 0; i < n; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random()); // より均一な分布に

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions.push(x, y, z);
    }

    return new Float32BufferAttribute(positions, 3);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  // テーマに応じて色を変更
  const particleColor = theme === "dark" ? "#3b82f6" : "#1d4ed8";
  const particleOpacity = theme === "dark" ? 0.6 : 0.8;

  return (
    <DreiPoints
      ref={ref}
      positions={positions.array as Float32Array}
      stride={3}
      frustumCulled={false}
      rotation={[0, 0, Math.PI / 4]}
    >
      <PointMaterial
        transparent
        color={particleColor}
        size={0.004}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={particleOpacity}
      />
    </DreiPoints>
  );
}

export default function Background() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <Stars />
      </Canvas>
    </div>
  );
}
