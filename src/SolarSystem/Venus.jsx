import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { VenusTexture } from "../assets";

export function Venus({ isLooked }) {
  const planetRef = React.useRef();

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime() * 0.08;
    const x = 18 * Math.sin(t);
    const z = 18 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.005;
    planetRef.current.rotation.y += rotationSpeed;
    if (isLooked) camera.lookAt(planetRef.current.position);
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.7, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, VenusTexture)}
        />
      </mesh>
    </>
  );
}
