// Preset values
const FROGS = 3;
const track = document.getElementById("track");

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
// 2. Create li

for (let numLanes = 1; numLanes <= FROGS; numLanes++) {
  let zone = document.createElement("li");
  track.appendChild(zone);

  // 3. Create span and add it to the li

  let trackNumber = document.createElement("span");
  trackNumber.innerText = numLanes;
  zone.appendChild(trackNumber);

  // 4. Assign an id to each lane
  //   Assign each lane an id following the this pattern: lane-<LANE_NUMBER>. e.g. lane-1, lane-2, lane-3, etc.
  zone.id = `lane-${numLanes}`;
}

let flippy = [];
for (let j = 0; j < FROGS; j++) {
  const frogRacer = frogStable[j];
  flippy.push(frogRacer);
}

console.log(flippy);

// we now have an array returning 3 indexes with objects, containing the propertiies of the frogs in frogStable

console.log(flippy.length); // returning 3

// Use the racers array to assign each frog to a lane.

flippy.forEach(function readyRacers(flippyRacer, y) {
  const newFlippy = document.createElement("span");
  document.getElementById(`lane-${y + 1}`).appendChild(newFlippy);

  newFlippy.classList.add("frog");

  newFlippy.style.background = flippyRacer.color;

  newFlippy.innerText = flippyRacer.number;

  // make progress bar for the array flippy

  flippy[y].progress = 0;
});
