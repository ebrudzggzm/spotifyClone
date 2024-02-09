const songList = document.querySelector("#list");
const player = document.querySelector('#audio');

export const renderSongList = (data) => {
  console.log("gelenveri:", data);

   const cardsHTML = data
   .map(
     (item,index) =>
        ` <div class="card">
                    <figure class="figure">
                        <img src=${item.share.image}
                            alt="">
                            <div class="play play-btn" >
                                <i id="play-btn" data-index="${index}" class="bi bi-play-fill"></i>
                            </div>
                    </figure>
                   
                    <h4>${item.subtitle}</h4>
                    <p>${item.title}</p>
                </div> `).join("");

  songList.innerHTML = cardsHTML;
};




export const playerDiv = (play) => {
     console.log("gelenveri:", play);
    const playerListHtml = data.map((item)=>{`  <div id="text">
    <img  id="imageAudio" src="${item.share.image}>
    <div>
        <h4>Şu an oynatılıyor</h4>
        <p>${item.title}</p>
    </div>
   
</div>
<div id="player">
    <audio controls>
        <source
            src=${item.hub.actions[0].uri}>
        Tarayıcınız audio etiketini desteklemiyor.
    </audio>
</div>`

    }).join('');

    player.innerHTML = playerListHtml;

};

