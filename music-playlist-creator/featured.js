document.addEventListener("DOMContentLoaded", function () {
    displayRandomPlaylist();
});


function displayRandomPlaylist() {
    const playlists = data.playlists;

    // Select a random playlist
    const randomPlaylist = playlists[Math.floor(Math.random() * playlists.length)];

    // Update playlist cover image
    const coverImage = document.querySelector(".cover-image");
    coverImage.src = randomPlaylist.playlist_art;
    coverImage.alt = randomPlaylist.playlist_name;

    // Update playlist title
    const playlistTitle = document.querySelector(".playlist-title");
    playlistTitle.textContent = randomPlaylist.playlist_name;

    // Update playlist creator
    const playlistCreator = document.querySelector(".playlist-creator");
    playlistCreator.textContent = randomPlaylist.playlist_creator;

     // Update song list
    const songList = document.querySelector(".song-list");
    songList.innerHTML = randomPlaylist.songs.map(song => `
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
