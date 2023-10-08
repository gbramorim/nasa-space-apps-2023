function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const { latitude, longitude } = position.coords;
  EarthObj.distance = `Hey, you are: ${latitude}, ${longitude}. Nice to meet you :)`;
}

const SunObj = {
  title: "Sun",
  description:
    "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light and infrared radiation.",
  temperature: "5,778 K",
  mass: "1.989 × 10^30 kg",
  gravity: "274 m/s²",
  distance: "149.6 million km",
};

const MercuryObj = {
  title: "Mercury",
  description:
    "Mercury is the smallest and closest planet to the Sun in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
  temperature: "440 K",
  mass: "3.285 × 10^23 kg",
  gravity: "3.7 m/s²",
  distance: "57.91 million km",
};

const VenusObj = {
  title: "Venus",
  description:
    "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.",
  temperature: "737 K",
  mass: "4.867 × 10^24 kg",
  gravity: "8.87 m/s²",
  distance: "108.2 million km",
};

const EarthObj = {
  title: "Earth",
  description:
    "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere.",
  temperature: "288 K",
  mass: "5.972 × 10^24 kg",
  gravity: "9.807 m/s²",
  distance: "Hey! You are here: " + getLocation(),
};

const MarsObj = {
  title: "Mars",
  description:
    "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
  temperature: "210 K",
  mass: "6.39 × 10^23 kg",
  gravity: "3.711 m/s²",
  distance: "227.9 million km",
};

const JupiterObj = {
  title: "Jupiter",
  description:
    "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
  temperature: "165 K",
  mass: "1.898 × 10^27 kg",
  gravity: "24.79 m/s²",
  distance: "778.5 million km",
};

const SaturnObj = {
  title: "Saturn",
  description:
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.",
  temperature: "134 K",
  mass: "5.683 × 10^26 kg",
  gravity: "10.44 m/s²",
  distance: "1.433 billion km",
};

const UranusObj = {
  title: "Uranus",
  description:
    "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
  temperature: "76 K",
  mass: "8.681 × 10^25 kg",
  gravity: "8.87 m/s²",
  distance: "2.877 billion km",
};

const NeptuneObj = {
  title: "Neptune",
  description:
    "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
  temperature: "72 K",
  mass: "1.024 × 10^26 kg",
  gravity: "11.15 m/s²",
  distance: "4.503 billion km",
};

export {
  SunObj,
  MercuryObj,
  VenusObj,
  EarthObj,
  MarsObj,
  JupiterObj,
  SaturnObj,
  UranusObj,
  NeptuneObj,
};
