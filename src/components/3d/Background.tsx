"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { useRef, useState } from "react";

function Stars() {
  const ref = useRef<any>();
  const [sphere] = useState<Float32Array>(
    () => new Float32Array(inSphere(new Float32Array(5000 * 3), { radius: 2 }))
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 bg-gray-900">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <Stars />
      </Canvas>
    </div>
  );
}
