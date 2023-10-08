import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useGesture } from "react-use-gesture";
import { JupiterTexture } from "../assets";

export function Jupiter({ isLooked }) {
  const planetRef = React.useRef();
  const [isHovered, setIsHovered] = React.useState(false);

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime() * 0.05;
    const x = 38 * Math.sin(t);
    const z = 38 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.003;
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
        <sphereGeometry args={[2, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, JupiterTexture)}
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
