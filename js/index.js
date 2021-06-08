import { DOMSelectors } from "./DOM";

let location = "lat";
const query = async function () {
  try {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=90&lng=50`
    );
    const data = await response.json();

    DOMSelectors.sunData.insertAdjacentHTML(
      "beforeend",
      `<div class="location">
        <h3 class="sunrise">${data.results.sunrise}</h3>
        <h4 class="sunset">Written By: ${data.results.sunset}</h4>
        `
    );
  } catch (error) {
    console.log(error);
    alert("Hey, try new coordinates");
  }
};

query();

const listen = function () {
  DOMSelectors.contentArea.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.locationInput.value;
    DOMSelectors.sunData.innerHTML = "";
    const lat = data.data[0].latitude;
    const lng = data.data[0].longitude;
    console.log(lat, lng);
    //remove old html here using innerHTML =""", simply figure out where your JS  inserts the HTML and instead of insert, just do innerHTML = ""
    const query = async function () {
      try {
        const response = await fetch(
          `https://api.sunrise-sunset.org/json?lat=90&lng=${searchParams}`
        );
        const data = await response.json();
        console.log(data);
        DOMSelectors.sunData.insertAdjacentHTML(
          "beforeend",
          `<div class="location">
            <h3 class="sunrise">${data.results.sunrise}</h3>
            <h4 class="sunset">Written By: ${data.results.sunset}</h4>
            `
        );
      } catch (error) {
        console.log(error);
        alert("Hey, try new coordinates");
      }
    };

    query();
  });
};
listen();
