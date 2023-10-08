import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { SunTexture } from "../assets";

export function Sun({ isLooked }) {
  const planetRef = React.useRef();
  const lightRef = React.useRef();

  useFrame(({ camera }) => {
    planetRef.current.rotation.y += 0.007;
    if (isLooked) camera.lookAt(planetRef.current.position);
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshStandardMaterial
          emissive={"#ff0000"}
          map={useLoader(THREE.TextureLoader, SunTexture)}
        />
      </mesh>
      <pointLight
        ref={lightRef}
        position={[0, 0, 0]}
        color="#ff0000"
        intensity={1}
        distance={50}
        decay={2}
      />
    </>
  );
}
