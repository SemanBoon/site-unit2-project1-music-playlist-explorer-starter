document.addEventListener("DOMContentLoaded", function () {
  loadPlaylists();
});

function loadPlaylists() {
  const playlistContainer = document.querySelector(".playlist-cards");
  let playlists = data.playlists;

  playlists.forEach((playlist) => {
    // Creating a div for the song card
    let playlistCard = document.createElement("div");
    playlistCard.className = "song-card";
    playlistCard.onclick = () => openModal(playlist.playlistID);

    // Creating a div for the playlist cover
    let playlistCover = document.createElement("div");
    playlistCover.className = "img-songcard";

    // Creating an image to put in the playlist cover
    let playlistCoverImg = document.createElement("img");
    playlistCoverImg.src = playlist.playlist_art;
    playlistCoverImg.alt = "Song Cover";

    // Add the image to the cover then add the cover to the card
    playlistCover.appendChild(playlistCoverImg);
    playlistCard.appendChild(playlistCover);

    // Create the div for the card info
    let playlistInfo = document.createElement("div");
    playlistInfo.className = "card-content";

    // Create a header element for card for the playlist title
    let playlistTitle = document.createElement("h3");
    playlistTitle.textContent = playlist.playlist_name;

    // Create a paragraph element to add the creator
    let playlistCreator = document.createElement("p");
    playlistCreator.textContent = playlist.playlist_creator;

    // Create the like button and adding counting function
    let heartButton = document.createElement("button");
    heartButton.className = "heart-button";
    heartButton.innerHTML = "&hearts;";
    heartButton.addEventListener("click", function (event) {
      event.stopPropagation();
      let likesCountElement = heartButton.nextElementSibling;
      let likesCount = parseInt(likesCountElement.textContent);
      likesCount++;
      likesCountElement.textContent = likesCount.toString();
    });

    // Create the likes count element
    let likesCount = document.createElement("span");
    likesCount.className = "likesCount";
    likesCount.textContent = playlist.likeCount.toString();

    // Add the creator, title, like button, and like count to the playlist info div
    playlistInfo.appendChild(playlistTitle);
    playlistInfo.appendChild(playlistCreator);
    playlistInfo.appendChild(heartButton);
    playlistInfo.appendChild(likesCount);

    // Add the info div to the card div
    playlistCard.appendChild(playlistInfo);

    // Add the playlist card to the page
    playlistContainer.appendChild(playlistCard);
  });
}

function openModal(playlistID) {
  const modal = document.getElementById("my-modal");
  const modalContent = modal.querySelector(".modal-content");
  const playlist = data.playlists.find((p) => p.playlistID === playlistID);

  modalContent.innerHTML = `
      <span class="close" onclick="closeModal()">&times;</span>
      <div class="modal-bogy">
        <div class="playlist-tile">
          <div class="playlist-cover">
            <img src="${playlist.playlist_art}" alt="Playlist Cover"/>
          </div>
          <div class="playlist-info">
            <h5>${playlist.playlist_name}</h5>
            <p>${playlist.playlist_creator}</p>
          </div>
        </div>
        <button class "shuffle-button" onclick = "shuffleSongs(${playlistID})">
          <span class = "shuffle-icon">shuffle</span>
        </button>
        <div class="song-list">
          ${playlist.songs.map((song) => `
            <div class="song-tile">
              <div class="image-tile">
                <img src="${song.cover_art}" alt="Song Cover"/>
              </div>
              <div class="tile-content">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
                <p>${song.album}</p>
              </div>
              <div class="song-duration">${song.duration}</div>
            </div>
          `).join('')}
        </div>
      </div>
 `;
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("my-modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("my-modal")) {
    closeModal();
  }
});



function shuffleSongs(playlistID) {
  const playlist = data.playlists.find((p) => p.playlistID === playlistID);
  playlist.songs = shuffleArray(playlist.songs);

  const songList = document.querySelector(".song-list");
  songList.innerHTML = playlist.songs.map(song => `
      <div class="song-tile">
          <div class="image-tile">
              <img src="${song.cover_art}" alt="Song Cover"/>
          </div>
          <div class="tile-content">
              <h3>${song.title}</h3>
              <p>${song.artist} - ${song.album}</p>
          </div>
          <div class="song-duration">${song.duration}</div>
      </div>
  `).join('');
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

