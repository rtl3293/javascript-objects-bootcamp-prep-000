var playlist = {Kanye: "Gold Digger"}

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign({}, playlist, {[artist]:songTitle})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}

console.log(removeFromPlaylist(playlist, "Kanye"))