import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { SaturnTexture, SaturnRingTexture } from "../assets";

function SaturnRing({ position, isLooked }) {
  const texture = useLoader(THREE.TextureLoader, SaturnRingTexture);

  const ringRef = React.useRef();

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime() * 0.07;
    const rotationSpeed = 0.004;
    ringRef.current.rotation.y += rotationSpeed;

    if (isLooked) camera.lookAt(ringRef.current.position);
  });

  return (
    <mesh ref={ringRef} position={position}>
      <ringGeometry args={[1, 1.5, 64]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

export function Saturn({ isLooked }) {
  const planetRef = React.useRef();
  const [ringPosition, setRingPosition] = React.useState(
    new THREE.Vector3(0, 0, 0)
  );

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime() * 0.07;
    const x = 44 * Math.sin(t);
    const z = 44 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    setRingPosition(new THREE.Vector3(x, 0, z));
    const rotationSpeed = 0.004;
    planetRef.current.rotation.y += rotationSpeed;
    if (isLooked) camera.lookAt(planetRef.current.position);
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, SaturnTexture)}
        />
      </mesh>
      <SaturnRing position={ringPosition} isLooked={isLooked} />
    </>
  );
}
