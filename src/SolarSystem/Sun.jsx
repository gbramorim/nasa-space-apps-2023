import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useGesture } from "react-use-gesture";
import { SunTexture } from "../assets";

export function Sun({ isLooked }) {
  const planetRef = React.useRef();
  const [isHovered, setIsHovered] = React.useState(false);

  useFrame(({ camera }) => {
    planetRef.current.rotation.y += 0.007;
    if (isLooked) camera.lookAt(planetRef.current.position);
  });

  const bind = useGesture({
    onPointerOver: () => setIsHovered(true),
    onPointerOut: () => setIsHovered(false),
  });

  return (
    <mesh ref={planetRef} {...bind()}>
      <sphereGeometry args={[10, 32, 32]} />
      <meshStandardMaterial map={useLoader(THREE.TextureLoader, SunTexture)} />
      {isHovered && (
        <Html distanceFactor={15}>
          <div className="annotation">KKK</div>
        </Html>
      )}
    </mesh>
  );
}
