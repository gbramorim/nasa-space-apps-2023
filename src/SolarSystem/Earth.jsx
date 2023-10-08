import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useGesture } from "react-use-gesture";
import { EarthTexture } from "../assets";

export function Earth({ isLooked }) {
  const planetRef = React.useRef();
  const [isHovered, setIsHovered] = React.useState(false);

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

  const bind = useGesture({
    onPointerOver: () => setIsHovered(true),
    onPointerOut: () => setIsHovered(false),
  });

  return (
    <>
      <mesh ref={planetRef} {...bind()}>
        <sphereGeometry args={[0.8, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, EarthTexture)}
        />
        {isHovered && (
          <Html distanceFactor={15}>
            <div className="annotation">KKK</div>
          </Html>
        )}
      </mesh>
    </>
  );
}
