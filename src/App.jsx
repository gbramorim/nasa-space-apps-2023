import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./App.css";

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
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#E1DC59" />
    </mesh>
  );
}

function Mercury() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = 4 * Math.sin(t);
    const z = 4 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.5, 20, 20]} />
        <meshStandardMaterial color="#78D481" />
      </mesh>
      <Ecliptic xRadius={4} zRadius={4} />
    </>
  );
}

function Venus() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = 6 * Math.sin(t);
    const z = 6 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.7, 40, 32]} />
        <meshStandardMaterial color="#78D481" />
      </mesh>
      <Ecliptic xRadius={6} zRadius={6} />
    </>
  );
}

function Earth() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = 9 * Math.sin(t);
    const z = 9 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.8, 40, 32]} />
        <meshStandardMaterial color="#78D481" />
      </mesh>
      <Ecliptic xRadius={9} zRadius={9} />
    </>
  );
}

function Mars() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = 12 * Math.sin(t);
    const z = 12 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.8, 40, 32]} />
        <meshStandardMaterial color="#78D481" />
      </mesh>
      <Ecliptic xRadius={12} zRadius={12} />
    </>
  );
}

function Jupiter() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = 18 * Math.sin(t);
    const z = 18 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[2, 40, 32]} />
        <meshStandardMaterial color="#78D481" />
      </mesh>
      <Ecliptic xRadius={18} zRadius={18} />
    </>
  );
}

function Saturn() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = 25 * Math.sin(t);
    const z = 25 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial color="#78D481" />
      </mesh>
      <Ecliptic xRadius={25} zRadius={25} />
    </>
  );
}

function Uranus() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = 30 * Math.sin(t);
    const z = 30 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial color="#78D481" />
      </mesh>
      <Ecliptic xRadius={30} zRadius={30} />
    </>
  );
}

function Neptune() {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = 35 * Math.sin(t);
    const z = 35 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial color="#78D481" />
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
