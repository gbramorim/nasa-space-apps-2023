import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { MercuryTexture } from "../assets";

export function Mercury({ isLooked }) {
  const planetRef = React.useRef();

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime() * 0.1;
    const x = 12 * Math.sin(t);
    const z = 12 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.01;
    planetRef.current.rotation.y += rotationSpeed;
    if (isLooked) camera.lookAt(planetRef.current.position);
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.5, 20, 20]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, MercuryTexture)}
        />
      </mesh>
    </>
  );
}
