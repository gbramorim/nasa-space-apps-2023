import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useGesture } from "react-use-gesture";
import { SaturnTexture, SaturnRingTexture } from "../assets";

function SaturnRing({ position }) {
  const texture = useLoader(THREE.TextureLoader, SaturnRingTexture);

  return (
    <mesh position={position}>
      <ringGeometry args={[1, 1.5, 64]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

export function Saturn({ isLooked }) {
  const planetRef = React.useRef();
  const [ringPosition, setRingPosition] = React.useState(
    new THREE.Vector3(0, 0, 0)
  );
  const [isHovered, setIsHovered] = React.useState(false);

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

  const bind = useGesture({
    onPointerOver: () => setIsHovered(true),
    onPointerOut: () => setIsHovered(false),
  });

  return (
    <>
      <mesh ref={planetRef} {...bind()}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, SaturnTexture)}
        />
        {isHovered && (
          <Html distanceFactor={15}>
            <div className="annotation">KKK</div>
          </Html>
        )}
      </mesh>
      <SaturnRing position={ringPosition} />
    </>
  );
}
