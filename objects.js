var playlist = {}

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign({}, playlist, {[artist]:songTitle})
}

updatePlaylist(playlist, "apple", "banana")
