function openModal() {
  document.getElementById('my-modal').style.display = "block";
  document.body.classList.add('modal-open');
}

function closeModal() {
  document.getElementById('my-modal').style.display = "none";
  document.body.classList.remove('modal-open');
}


window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('my-modal')) {
        document.getElementById('my-modal').style.display = "none";
    }
});

function IncreaseLikes(event) {
    event.stopPropagation();
    var likesCountElement = event.target.nextElementSibling;
    var likesCount = parseInt(likesCountElement.textContent);
}

let playlists = data.playlists;

playlists.forEach(playlist => {
// creaying a div for the song card
  let playlistCard = document.createElement("div");
  playlistCard.className = "song-card";

// creating a div for the playlist cover
  let playlistCover = document.createElement("div");
  playlistCover.className = "img-songcard";

// creating an image to put in the playlist cover
  let playlistCoverImg = document.createElement("img");
  playlistCoverImg.src = playlist.playlist_art;

// add the image to the cover then add the cover to the card
  playlistCover.appendChild(playlistCoverImg);
  playlistCard.appendChild(playlistCover);

  // create the div for the card info
  let playlistInfo = document.createElement("div");
  playlistInfo.className = "card-content";

  // create a header element for card for the playlist title
  let playlistTitle = document.createElement("h3");
  playlistTitle.textContent = playlist.playlist_name;

  //  create a paragraph element to add the creator
  let playlistCreator = document.createElement("p");
  playlistCreator.textContent = playlist.playlist_creator;

  // add the creator and the title to the playlistinfo div then add that to the playlist div
  playlistInfo.appendChild(playlistTitle);
  playlistInfo.appendChild(playlistCreator);
  playlistCard.appendChild(playlistInfo);


  // Add the playlist card to the page
  document.querySelector(".playlist-cards").appendChild(playlistCard);

});

let modal = document.createElement("div");
modal.id = "my-modal"
modal.className = "modal-overlay"

// Loop through each playlist
playlists.forEach(playlist => {
  // Create a div for the new modal content element
  let modalContent = document.createElement("div");
  modalContent.className = "modal-content";

// create a div for playlist tile
  let playlistTile = document.createElement("div");
  playlistTile.className = "playlist-tile";

  // creating a div for the playlist cover
  let playlistImage = document.createElement("div");
  playlistImage.className = "playlist-cover";

// creating an image to put in the playlist cover
  let playlistImageCover = document.createElement("img");
  playlistImageCover.src = playlist.playlist_art;

  playlistImage.appendChild(playlistImageCover);
  playlistTile.appendChild(playlistImage);

  let playlistInfo = document.createElement("div");
  playlistInfo.className = "playlist-info";

  // create the playlist title and creator element
  let playlistTitle = document.createElement("h5");
  playlistTitle.textContent = playlist.playlist_name;
  let playlistCreator = document.createElement("p");
  playlistCreator.textContent = playlist.playlist_creator;

// add the title and creator to modal content
  playlistInfo.appendChild(playlistTitle);
  playlistInfo.appendChild(playlistCreator);

  playlistTile.appendChild(playlistInfo)

  // create the song list div
  let songList = document.createElement("div");
  songList.className = "song-list";

  playlist.songs.forEach(song => {
    let songTile = document.createElement("div");
    songTile.className = "song-tile";

    // create the song cover art
    let songCover = document.createElement("div");
    songCover.className = "image-tile";

    let songCoverImg = document.createElement("img");
    songCoverImg.src = song.cover_art;

    // add the song cover art
    songCover.appendChild(songCoverImg);
    songTile.appendChild(songCover)

  // create the song title, artist, and duration element
    let songInfo = document.createElement("div");
    songInfo.className = "tile-content";

    // create the song title, artist, and duration element
    let songTitle = document.createElement("h3");
    songTitle.textContent = song.title;
    let songArtist = document.createElement("p");
    songArtist.textContent = song.artist;
    let albumName = document.createElement("p");
    albumName.textContent = song.album;

    let songDuration = document.createElement("div");
    songDuration.className = "song-duration"
    songDuration.textContent = song.duration;

    // add the song title, artist, and duration element to song info then add song info to song info
    songInfo.appendChild(songTitle);
    songInfo.appendChild(songArtist);
    songInfo.appendChild(albumName);

    // append songInfo to songTile
    songTile.appendChild(songInfo);
    songTile.appendChild(songDuration);

    songList.appendChild(songTile);

    // add plalist tile and song tile to modal content
    modalContent.appendChild(playlistTile);
    modalContent.appendChild(songList);

  });

  modal.appendChild(modalContent);
  document.querySelector(".playlist-cards").appendChild(modal);

});
