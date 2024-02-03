/* 
      <div class="destination--main">
        <div class="main__information">
<h3 id="crew--role"></h3>
<h2 id="crew--name"></h2>
<p id="crew--description"></p>

        </div>
        <picture>
          <img id="crew" src="" alt="" />
        </picture>*/

const navigationBalls = ["circle-1", "circle-2", "circle-3", "circle-4"];
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    document.getElementById("crew").src = json.crew[0].images.png;
    document.getElementById("crew").alt = "The Moon";
    document.getElementById("crew--role").innerHTML = json.crew[0].role;
    document.getElementById("crew--name").innerHTML = json.crew[0].name;
    document.getElementById("crew--description").innerHTML = json.crew[0].bio;

    //navigation ball
    navigationBalls.forEach(
      (ball) =>
        (document.getElementById(ball).style.backgroundColor =
          "rgb(74, 72, 72)")
    );
    document.getElementById("circle-1").style.backgroundColor = "white";
  });
//Douglas Hurley
document.getElementById("circle-1").addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("crew").src = json.crew[0].images.png;
      document.getElementById("crew").alt = "The Moon";
      document.getElementById("crew--role").innerHTML = json.crew[0].role;
      document.getElementById("crew--name").innerHTML = json.crew[0].name;
      document.getElementById("crew--description").innerHTML = json.crew[0].bio;

      //navigation ball
      navigationBalls.forEach(
        (ball) =>
          (document.getElementById(ball).style.backgroundColor =
            "rgb(74, 72, 72)")
      );
      document.getElementById("circle-1").style.backgroundColor = "white";
    });
});
//Mark Shuttleworth
document.getElementById("circle-2").addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("crew").src = json.crew[1].images.png;
      document.getElementById("crew").alt = "The Moon";
      document.getElementById("crew--role").innerHTML = json.crew[1].role;
      document.getElementById("crew--name").innerHTML = json.crew[1].name;
      document.getElementById("crew--description").innerHTML = json.crew[1].bio;

      //navigation ball
      navigationBalls.forEach(
        (ball) =>
          (document.getElementById(ball).style.backgroundColor =
            "rgb(74, 72, 72)")
      );
      document.getElementById("circle-2").style.backgroundColor = "white";
    });
});
//Victor Glover
document.getElementById("circle-3").addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("crew").src = json.crew[2].images.png;
      document.getElementById("crew").alt = "The Moon";
      document.getElementById("crew--role").innerHTML = json.crew[2].role;
      document.getElementById("crew--name").innerHTML = json.crew[2].name;
      document.getElementById("crew--description").innerHTML = json.crew[2].bio;

      //navigation ball
      navigationBalls.forEach(
        (ball) =>
          (document.getElementById(ball).style.backgroundColor =
            "rgb(74, 72, 72)")
      );
      document.getElementById("circle-3").style.backgroundColor = "white";
    });
});
//Anousheh Ansari
document.getElementById("circle-4").addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("crew").src = json.crew[3].images.png;
      document.getElementById("crew").alt = "The Moon";
      document.getElementById("crew--role").innerHTML = json.crew[3].role;
      document.getElementById("crew--name").innerHTML = json.crew[3].name;
      document.getElementById("crew--description").innerHTML = json.crew[3].bio;

      //navigation ball
      navigationBalls.forEach(
        (ball) =>
          (document.getElementById(ball).style.backgroundColor =
            "rgb(74, 72, 72)")
      );
      document.getElementById("circle-4").style.backgroundColor = "white";
    });
});
