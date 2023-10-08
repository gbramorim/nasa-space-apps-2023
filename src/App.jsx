import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  Sun,
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "./SolarSystem";

import "./App.css";
import { playAudioLoop } from "./helpers/AudioLoop";
import { useState } from "react";

export default function App() {
  const [observePlanet, setObservePlanet] = useState({
    Sun: false,
    Mercury: false,
    Venus: false,
    Earth: false,
    Mars: false,
    Jupiter: false,
    Saturn: false,
    Uranus: false,
    Neptune: false,
  });

  const handlePlanetClick = (planetName) => {
    // Configura o planeta correspondente para ser observado
    setObservePlanet((prevObservePlanet) => ({
      ...Object.keys(prevObservePlanet).reduce((acc, name) => {
        acc[name] = name === planetName; // Define como true apenas o planeta clicado
        return acc;
      }, {}),
    }));
  };

  useEffect(() => {
    const startAudioOnUserInteraction = () => {
      document.removeEventListener("click", startAudioOnUserInteraction);
      document.removeEventListener("touchstart", startAudioOnUserInteraction);

      playAudioLoop();
    };

    document.addEventListener("click", startAudioOnUserInteraction);
    document.addEventListener("touchstart", startAudioOnUserInteraction);
  }, []);

  return (
    <div className="container">
      <h1>Solar System Advisor</h1>
      <button onClick={() => handlePlanetClick("Sun")}>Sun</button>
      <button onClick={() => handlePlanetClick("Mercury")}>Mercury</button>
      <button onClick={() => handlePlanetClick("Venus")}>Venus</button>
      <button onClick={() => handlePlanetClick("Earth")}>Earth</button>
      <button onClick={() => handlePlanetClick("Mars")}>Mars</button>
      <button onClick={() => handlePlanetClick("Jupiter")}>Jupiter</button>
      <button onClick={() => handlePlanetClick("Saturn")}>Saturn</button>
      <button onClick={() => handlePlanetClick("Uranus")}>Uranus</button>
      <button onClick={() => handlePlanetClick("Neptune")}>Neptune</button>

      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Sun isLooked={observePlanet.Sun} />
        <Mercury isLooked={observePlanet.Mercury} />
        <Venus isLooked={observePlanet.Venus} />
        <Earth isLooked={observePlanet.Earth} />
        <Mars isLooked={observePlanet.Mars} />
        <Jupiter isLooked={observePlanet.Jupiter} />
        <Saturn isLooked={observePlanet.Saturn} />
        <Uranus isLooked={observePlanet.Uranus} />
        <Neptune isLooked={observePlanet.Neptune} />
        <Lights />
        <OrbitControls />
      </Canvas>
    </div>
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
