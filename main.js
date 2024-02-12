import { renderSongList, playerDiv2,filteredSongs } from "./ui.js";

let data;
const getInfo = async () => {
  try {
    const response = await fetch(
      "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0",
      {
        headers: {
          "X-RapidAPI-Key":
            "66d3fd6e24msha0efa832d406a0ap182abcjsn1b118c6979a1",
          "X-RapidAPI-Host": "shazam.p.rapidapi.com",
        },
      }
    );
    data = await response.json();
    //  console.log(data.tracks);
    //render(data.recipes);
  } catch (err) {
    console.log("Hata :", err);
  }
};

getInfo();

document.addEventListener("DOMContentLoaded", () => {
  getInfo().then(() => renderSongList(data.tracks));
});



const listCards = document.querySelector("#list");
listCards.addEventListener("click", (e) => {
  console.log("neye tıklandı", e, e.target.dataset.index);
  const indexValue = e.target.dataset.index;
  if (e.target.id == "play-btn") {
    // playerDiv(data.tracks, indexValue);
    playerDiv2(data.tracks[indexValue]);
  }
});



//filtreleme
const searchInput = document.querySelector("#filter");
let inputValue ="";
searchInput.addEventListener("input", (e) => {
    inputValue = e.target.value;
    console.log(inputValue, "inputenrbru");
  });

const searchBtnEle = document.getElementById("searchBtn");

searchBtnEle.addEventListener("click", () => {  
    console.log(inputValue,"inputun değeri");   
    filteredSongs(inputValue,data)
  });





