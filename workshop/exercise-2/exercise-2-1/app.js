// Preset values
const FROGS = 3;
const BIGBOI = document.querySelector(`main`);

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (let i=1; i<= FROGS; i++){

    const zone = document.createElement("span");
    zone.innerText = "Lane" + i;

// 2. Create li

    const lane = document.createElement("li");

// 3. Create span and add it to the li

    const zone = document.createElement("span");
    zone.innerText = "Lane" + i;
    BIGBOI.appendChild(lane);
    lane.appendChild(zone);

// 4. Assign an id to each lane

    lane.id = "Lane" + i;

}

//not uploading to github?!