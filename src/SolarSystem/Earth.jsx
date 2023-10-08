import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { EarthTexture } from "../assets";

export function Earth({ isLooked }) {
  const planetRef = React.useRef();

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime() * 0.05;
    const x = 24 * Math.sin(t);
    const z = 24 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.017;
    planetRef.current.rotation.y += rotationSpeed;
    if (isLooked) camera.lookAt(planetRef.current.position);
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.8, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, EarthTexture)}
        />
      </mesh>
    </>
  );
}
