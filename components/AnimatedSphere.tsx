"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ParticleSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const temp: number[] = [];
    const count = 1800;
    for (let i = 0; i < count; i += 1) {
      const radius = 1.2 + Math.random() * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      temp.push(radius * Math.sin(phi) * Math.cos(theta));
      temp.push(radius * Math.cos(phi));
      temp.push(radius * Math.sin(phi) * Math.sin(theta));
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.018} color="#7dd3fc" sizeAttenuation transparent opacity={0.95} />
      </points>
    </group>
  );
}

export function AnimatedSphere() {
  return (
    <div className="h-full w-full rounded-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={1.4} />
        <pointLight position={[3, 2, 4]} intensity={3} color="#22d3ee" />
        <pointLight position={[-3, -2, 2]} intensity={2.2} color="#7c3aed" />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}
