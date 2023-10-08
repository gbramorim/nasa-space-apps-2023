import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./App.css";
import {
  EarthTexture,
  JupiterTexture,
  MarsTexture,
  MercuryTexture,
  NeptuneTexture,
  SaturnTexture,
  SunTexture,
  UranusTexture,
  VenusTexture,
} from "./assets";

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }
  points.push(points[0]);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}

export default function App() {
  return (
    <div className="container">
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
        <Lights />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function Sun() {
  const planetRef = React.useRef();

  useFrame(() => {
    planetRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={useLoader(THREE.TextureLoader, SunTexture)} />
    </mesh>
  );
}

function Mercury() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 2;
    const x = 4 * Math.sin(t);
    const z = 4 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.01;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.5, 20, 20]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, MercuryTexture)}
        />
      </mesh>
      <Ecliptic xRadius={4} zRadius={4} />
    </>
  );
}

function Venus() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 1.6;
    const x = 6 * Math.sin(t);
    const z = 6 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.005;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.7, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, VenusTexture)}
        />
      </mesh>
      <Ecliptic xRadius={6} zRadius={6} />
    </>
  );
}

function Earth() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 1;
    const x = 9 * Math.sin(t);
    const z = 9 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.017;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.8, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, EarthTexture)}
        />
      </mesh>
      <Ecliptic xRadius={9} zRadius={9} />
    </>
  );
}

function Mars() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 1.3;
    const x = 12 * Math.sin(t);
    const z = 12 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.008;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.8, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, MarsTexture)}
        />
      </mesh>
      <Ecliptic xRadius={12} zRadius={12} />
    </>
  );
}

function Jupiter() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 1;
    const x = 18 * Math.sin(t);
    const z = 18 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.003;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[2, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, JupiterTexture)}
        />
      </mesh>
      <Ecliptic xRadius={18} zRadius={18} />
    </>
  );
}

function Saturn() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.7;
    const x = 25 * Math.sin(t);
    const z = 25 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.004;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, SaturnTexture)}
        />
      </mesh>
      <Ecliptic xRadius={25} zRadius={25} />
    </>
  );
}

function Uranus() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5;
    const x = 30 * Math.sin(t);
    const z = 30 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.003;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, UranusTexture)}
        />
      </mesh>
      <Ecliptic xRadius={30} zRadius={30} />
    </>
  );
}

function Neptune() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2;
    const x = 35 * Math.sin(t);
    const z = 35 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    const rotationSpeed = 0.003;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial
          map={useLoader(THREE.TextureLoader, NeptuneTexture)}
        />
      </mesh>
      <Ecliptic xRadius={35} zRadius={35} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}
