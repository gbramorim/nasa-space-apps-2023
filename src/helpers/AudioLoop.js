import UniverseSong from "../assets/audio/universesong.mp3";

export function playAudioLoop() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const audioElement = new Audio(UniverseSong);

  const audioSource = audioContext.createMediaElementSource(audioElement);
  const gainNode = audioContext.createGain();

  audioSource.connect(gainNode);
  gainNode.connect(audioContext.destination);

  audioElement.loop = true;

  gainNode.gain.value = 0.4;

  audioElement.play().catch((error) => {
    console.error("Erro ao reproduzir o áudio:", error);
  });
}
