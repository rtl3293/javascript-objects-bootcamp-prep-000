var playlist = {car : "green"}}

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign({}, playlist, {[artist]:songTitle})
}

function removeFromPlaylist(playlist, artist) {
  var newPlaylist = delete playlist.artist
  return newPlaylist
}
