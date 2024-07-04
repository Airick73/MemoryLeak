// (Include the WaveTank and Spring classes here, similar to the React component)

const WAVE_LENGTH = 100;
const SVG_WIDTH = 100;

const waveTank = new WaveTank();
let width = window.innerWidth;
let dropY = 60;
let counter = 0;

function easeInCirc(x) {
  return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

function updateDrop(timestamp) {
  const amp = 40;
  const x = timestamp / 2000;
  const saw = x - Math.floor(x);
  if (saw < 0.6) {
    counter = easeInCirc(saw) * amp;
    dropY = -100;
  } else {
    counter = easeInCirc(1 - saw) * amp * 0.1;
    dropY = 70 + Math.pow(saw - 0.6, 2) * 10000;
  }
  document.getElementById('droplet').setAttribute('cy', dropY);
}

function update(timestamp) {
  updateDrop(timestamp);
  waveTank.update();

  const grid = SVG_WIDTH / WAVE_LENGTH;
  const points = [
    [0, 100],
    [0, 0],
    ...waveTank.springs.map((spring, i) => [i * grid, spring.p]),
    [width, 0],
    [width, 100],
  ];
  const springsPath = points.map(x => x.join(",")).join(" ");
  document.getElementById('wave-polygon').setAttribute('points', springsPath);

  const offset = 500;
  const saw = (timestamp + offset) / 2000 - Math.floor((timestamp + offset) / 2000);
  if (saw < 0.01) {
    const dropPosition = Math.round((width / 2 - 30) / width * WAVE_LENGTH);
    waveTank.springs[dropPosition].p = -40;
  }
  requestAnimationFrame(update);
}

function handleResize() {
  width = window.innerWidth;
  document.getElementById('wave').setAttribute('viewBox', `0 0 ${width} 100`);
}

window.addEventListener('load', () => {
  handleResize();
  window.addEventListener('resize', handleResize);
  requestAnimationFrame(update);
});