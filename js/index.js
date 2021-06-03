import { DOMSelectors } from "./DOM";

let location = "lat";
const query = async function () {
  try {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=90&lng=50`
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

/* data.results.forEach((location) => {
  console.log(location);
}) */ // const displayData = function (data) {
//   DOMSelectors.contentArea.innerHTML = "";
//   const latitude= data.data[0].lat_location;
//   const longitude= data.data[0].lng_location;
//   console.log(lat,lng);

/* data.results.forEach((location) => {
  DOMSelectors.grid.insertAdjacentHTML(
    "beforeend",
    `<div class="location">
      <h3 class="sunrise">${sunrise}</h3>
      <h4 class="sunset">Written By: ${sunset}</h4>
      `
  );
}); */
query();
