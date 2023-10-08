import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { playAudioLoop } from "./helpers/AudioLoop";
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

import {
  SunObj,
  MercuryObj,
  VenusObj,
  EarthObj,
  MarsObj,
  JupiterObj,
  SaturnObj,
  NeptuneObj,
  UranusObj,
} from "./constants";
import Modal from "./Modal/Modal";

import Stars from "./SolarSystem/Stars/Stars";

import "./App.css";

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
  const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar a abertura do modal
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    temperature: "",
    mass: "",
    gravity: "",
    distance: "",
  });

  const handlePlanetClick = (planetName) => {
    const planetData = {
      Sun: SunObj,
      Mercury: MercuryObj,
      Venus: VenusObj,
      Earth: EarthObj,
      Mars: MarsObj,
      Jupiter: JupiterObj,
      Saturn: SaturnObj,
      Uranus: UranusObj,
      Neptune: NeptuneObj,
    };

    if (planetName in planetData) {
      setModalOpen(true);
      setModalData(planetData[planetName]);
    }

    setObservePlanet((prevObservePlanet) => ({
      ...Object.keys(prevObservePlanet).reduce((acc, name) => {
        acc[name] = name === planetName;
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
    <>
      <Stars />
      <div className="container">
        <h1 className="container-title">Solar System Advisor</h1>
        <div className="container-buttons">
          <button onClick={() => handlePlanetClick("Sun")}>Sun</button>
          <div className="divider"></div>
          <button onClick={() => handlePlanetClick("Mercury")}>Mercury</button>
          <div className="divider"></div>
          <button onClick={() => handlePlanetClick("Venus")}>Venus</button>
          <div className="divider"></div>
          <button onClick={() => handlePlanetClick("Earth")}>Earth</button>
          <div className="divider"></div>
          <button onClick={() => handlePlanetClick("Mars")}>Mars</button>
          <div className="divider"></div>
          <button onClick={() => handlePlanetClick("Jupiter")}>Jupiter</button>
          <div className="divider"></div>
          <button onClick={() => handlePlanetClick("Saturn")}>Saturn</button>
          <div className="divider"></div>
          <button onClick={() => handlePlanetClick("Uranus")}>Uranus</button>
          <div className="divider"></div>
          <button onClick={() => handlePlanetClick("Neptune")}>Neptune</button>
        </div>
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
        {isModalOpen && (
          <Modal
            title={modalData.title}
            description={modalData.description}
            temperature={modalData.temperature}
            mass={modalData.mass}
            gravity={modalData.gravity}
            distance={modalData.distance}
            touristText={modalData.touristText}
            touristImage={modalData.touristImage}
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
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
