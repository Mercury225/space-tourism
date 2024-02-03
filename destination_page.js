fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    document.getElementById("planet").src = json.destinations[0].images.png;
  });
