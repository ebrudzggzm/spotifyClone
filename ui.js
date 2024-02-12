const songList = document.querySelector("#list");
const player = document.querySelector("#audio");

export const renderSongList = (data) => {
    console.log("gelenveri:", data);

    const maxLength = 30;

    const cardsHTML = data.map((item, index) => {
        const truncatedTitle = item.title.length > maxLength ? item.title.substring(0, maxLength) + '...' : item.title;

        return `
            <div class="card">
                <figure class="figure">
                    <img src=${item.share.image} alt="">
                    <div class="play play-btn" >
                        <i id="play-btn" data-index="${index}" class="bi bi-play-fill"></i>
                    </div>
                </figure>
                <h4>${item.subtitle}</h4>
                <p>${truncatedTitle}</p>
            </div>
        `;
    }).join("");

    songList.innerHTML = cardsHTML;
};


// iki parametre ile olabilir
export const playerDiv = (tracksArray, trackIndex) => {
  //console.log("gelenveriPlay:", tracksArray);
  player.innerHTML = "";

  //console.log(tracksArray[trackIndex], trackIndex);
  const item = tracksArray[trackIndex];
  const playerListHtml = `<div id="text">
    <img  id="imageAudio" src=${item.share.image}>
    <div>
        <h4>Şu an oynatılıyor</h4>
        <p>${item.title}</p>
    </div>
   
</div>
<div id="player">
    <audio controls>
        <source
            src=${item.hub.actions[1].uri}  data-id = ${item.value} >
        Tarayıcınız audio etiketini desteklemiyor.
    </audio>
</div>`;

  player.innerHTML = playerListHtml;
};

// tek parametre ile olabilir,daha sadeleştirilmiş olarak,dizi indexi main.js den geldi.
export const playerDiv2 = (item) => {
  player.innerHTML = "";

  const playerListHtml = `<div id="text">
      <img  id="imageAudio" src=${item.share.image}>
      <div>
          <h4>Şu an oynatılıyor</h4>
          <p>${item.title}</p>
      </div>
     
  </div>
  <div id="player">
      <audio controls>
          <source
              src=${item.hub.actions[1].uri}  data-id = ${item.value} >
          Tarayıcınız audio etiketini desteklemiyor.
      </audio>
  </div>`;

  player.innerHTML = playerListHtml;
};
// export const playerDiv = (play,indexValue) => {
//     console.log("gelenveriPlay:", play);
//     player.innerHTML ="";

//     const playerListHtml = play.map((item)=>

//     if(indexValue === item.)
//     `<div id="text">
//     <img  id="imageAudio" src=${item.share.image}>
//     <div>
//         <h4>Şu an oynatılıyor</h4>
//         <p>${item.title}</p>
//     </div>

// </div>
// <div id="player">
//     <audio controls>
//         <source
//             src=${item.hub.actions[1].uri}  >
//         Tarayıcınız audio etiketini desteklemiyor.
//     </audio>
// </div>`

//     ).join('');

//     player.innerHTML = playerListHtml;

// };

//filtreleme fonksiyonu

export const filteredSongs = (input, data) => {
  console.log("gelenfilterVeri:", data, input);
  let filteredValue;
  if (input != null) {
    filteredValue = data.filter(
      (item) =>
        item.subtitle
          .toLowerCase()
          .trim()
          .includes(input.toLowerCase().trim()) |
        item.title.toLowerCase().trim().includes(input.toLowerCase().trim())
    );
  }
 // console.log(filteredValue);
  renderSongList(filteredValue);
  
};
