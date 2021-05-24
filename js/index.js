import { DOMSelectors } from "./DOM";

const query = async function () {
  try {
    const response = await fetch(
      `http:data.orghunter.com/v1/charitysearch?user_key=yourKey&${searchTerm}=treasure%20coast%20humane`
    );
    const data = await response.json();
    data.results.forEach((charity) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend,/* work on html bro */"
      ); /*method of the Element interface parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position */
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Hey, try another keyword");
  }
};

init();
