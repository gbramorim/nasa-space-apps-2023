import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useGesture } from "react-use-gesture";
import { VenusTexture } from "../assets";

export function Venus({ isLooked }) {
  const planetRef = React.useRef();
  const [isHovered, setIsHovered] = React.useState(false);

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

  const bind = useGesture({
    onPointerOver: () => setIsHovered(true),
    onPointerOut: () => setIsHovered(false),
  });

  return (
    <>
      <mesh ref={planetRef} {...bind()}>
        <sphereGeometry args={[0.7, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, VenusTexture)}
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
