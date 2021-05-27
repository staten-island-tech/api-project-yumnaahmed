import { DOMSelectors } from "./DOM";

const init = function () {
  let searchTerm;
  // const apiKey =(insert key);

const query = async function () {
  try {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?${lat&lng}` 
    );
    const data = await response.json();
    data.results.forEach((charity) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend,/* work on html bro */"
      ); /*method of the Element interface parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position */
    });
  } catch (error) {
    console.log(error);
    alert("Hey,the sunrise and sunset for this area isn't available");
  }
};

// DOMSelectors.contentArea.innerHTML = "";
//     const searchTerm = data.data[0].searchTerm_name;
//     const city = data.data[0].city_code;
//     const state = data.data[0].state;
//     console.log(searchTerm, city, state);

    letkeywArr = [];
    const addKeyword = function (){
      addKeyword.forEach((element) => {
        /* if(addKeyword.) */
      };)

    }

init();
