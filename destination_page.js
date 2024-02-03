//moon
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    document.getElementById("planet").src = json.destinations[0].images.png;
    document.getElementById("planet").alt = "The Moon";
    document.getElementById("planet--title").innerHTML =
      json.destinations[0].name;
    document.getElementById("planet--description").innerHTML =
      json.destinations[0].description;
    document.getElementById("planet--distance").innerHTML =
      json.destinations[0].distance;
    document.getElementById("planet--travel-time").innerHTML =
      json.destinations[0].travel;
  });

document.getElementById("moon").addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("planet").src = json.destinations[0].images.png;
      document.getElementById("planet").alt = "The Moon";
      document.getElementById("planet--title").innerHTML =
        json.destinations[0].name;
      document.getElementById("planet--description").innerHTML =
        json.destinations[0].description;
      document.getElementById("planet--distance").innerHTML =
        json.destinations[0].distance;
      document.getElementById("planet--travel-time").innerHTML =
        json.destinations[0].travel;
    });
});

// mars
document.getElementById("mars").addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("planet").src = json.destinations[1].images.png;
      document.getElementById("planet").alt = "Mars";
      document.getElementById("planet--title").innerHTML =
        json.destinations[1].name;
      document.getElementById("planet--description").innerHTML =
        json.destinations[1].description;
      document.getElementById("planet--distance").innerHTML =
        json.destinations[1].distance;
      document.getElementById("planet--travel-time").innerHTML =
        json.destinations[1].travel;
    });
});
//Europa
document.getElementById("europa").addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("planet").src = json.destinations[2].images.png;
      document.getElementById("planet").alt = "Europa";
      document.getElementById("planet--title").innerHTML =
        json.destinations[2].name;
      document.getElementById("planet--description").innerHTML =
        json.destinations[2].description;
      document.getElementById("planet--distance").innerHTML =
        json.destinations[2].distance;
      document.getElementById("planet--travel-time").innerHTML =
        json.destinations[2].travel;
    });
});
//Titan
document.getElementById("titan").addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("planet").src = json.destinations[3].images.png;
      document.getElementById("planet").alt = "Titan";
      document.getElementById("planet--title").innerHTML =
        json.destinations[3].name;
      document.getElementById("planet--description").innerHTML =
        json.destinations[3].description;
      document.getElementById("planet--distance").innerHTML =
        json.destinations[3].distance;
      document.getElementById("planet--travel-time").innerHTML =
        json.destinations[3].travel;
    });
});
