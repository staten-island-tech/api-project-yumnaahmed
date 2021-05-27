// import { DOMSelectors } from "js/DOM";

const query = async function () {
  try {
  } catch (error) {
    console.log(error);
    alert("Hey, try new coordinates");
  }
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?${lat}${lng}`
  );
};
