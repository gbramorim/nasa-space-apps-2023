import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { NeptuneTexture } from "../assets";

export function Neptune({ isLooked }) {
  const planetRef = React.useRef();

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime() * 0.02;
    const x = 52 * Math.sin(t);
    const z = 52 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.003;
    planetRef.current.rotation.y += rotationSpeed;
    if (isLooked) camera.lookAt(planetRef.current.position);
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, NeptuneTexture)}
        />
      </mesh>
    </>
  );
}
