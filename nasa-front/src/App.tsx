import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { RefObject, Suspense } from "react";
import {
  SunTexture,
  MercuryTexture,
  EarthTexture,
  JupiterTexture,
  MarsTexture,
  NeptuneTexture,
  SaturnTexture,
  UranusTexture,
  VenusTexture,
} from "./assets";

import "./App.css";

export default function App() {
  const planetData = [
    { name: "Mercury", texture: MercuryTexture, size: 0.5 },
    { name: "Venus", texture: VenusTexture, size: 1 },
    { name: "Earth", texture: EarthTexture, size: 1 },
    { name: "Mars", texture: MarsTexture, size: 0.7 },
    { name: "Jupiter", texture: JupiterTexture, size: 2 },
    { name: "Saturn", texture: SaturnTexture, size: 1.8 },
    { name: "Uranus", texture: UranusTexture, size: 1.2 },
    { name: "Neptune", texture: NeptuneTexture, size: 1.1 },
  ];

  return (
    <div className="principal-container">
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Suspense fallback={null}>
          <Sun />
          {planetData.map((planet, index) => (
            <Planet planet={planet} key={index} />
          ))}
          <Lights />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Sun() {
  const texture = useLoader(THREE.TextureLoader, SunTexture);

  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} color="#E1DC59" />
    </mesh>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }
  points.push(points[0]);

  // Create a Line object using the BufferGeometry
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xbfbbda,
    linewidth: 10,
  });
  return <primitive object={new THREE.Line(lineGeometry, lineMaterial)} />;
}

function Planet({ planet: { xRadius, zRadius, size, speed, offset } }: any) {
  const planetRef: RefObject<THREE.Mesh> = React.useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);

    if (planetRef.current) {
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    }
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);

    if (planetRef.current) {
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    }
  });

  const texture = useLoader(THREE.TextureLoader, EarthTexture);

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
    </>
  );
}
