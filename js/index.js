const query = async function () {
  try {
    const response = await fetch(/* insert API key here */);
    const data = await response.json();
    data.results.forEach((charity) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend,/* work on html bro */"
      ); /*method of the Element interface parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position */
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
