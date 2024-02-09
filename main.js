import { renderSongList,playerDiv } from "./ui.js";


let data ;
  const getInfo = async () => {
    try {
      const response = await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0', {
        headers: {
          'X-RapidAPI-Key': 'f19ecd530fmshf845add703d5d2cp10caf3jsnf62093c84e4e',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      });
      data = await response.json();
    //  console.log(data.tracks);
      //render(data.recipes);
    } catch (err) {
      console.log('Hata :', err);
    }
  };
  
  getInfo();

document.addEventListener('DOMContentLoaded',()=>{
    getInfo().then(()=>renderSongList(data.tracks)); 

    
});


const playButtons = document.querySelectorAll('.play-btn');
    console.log(playButtons);
    playButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        console.log("Play button clicked for item at index:", index);
        
      });
    });






  