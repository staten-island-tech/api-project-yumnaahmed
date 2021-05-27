/* import { DOMSelectors } from "./DOM"; */

const query = async function () {
  try {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?${lat&lng}`
    );
  }
//     // const data = await response.json();
//     // data.results.array.forEach((location) => {
//     //   let locationArr= [];
//     //   const addlocation = function () {
//     //   //   location.forEach((element) => {
//     //   //     if(DeviceMotionEvent.genre_ids.includes(element.id))
//     //   //   })

//     //   // }
//     //   DOMSelectors.contentArea.innerHTML = "";
//     //   const latitude = data.data[0].latitude;
//     //   const longitude = data.data[0].longitude;
//     //   console.log(latitude, longitude);
//     // });
//   } catch (error) {
//     console.log(error);
//     alert("Hey, try new coordinates");
//   }
 };
// query();
