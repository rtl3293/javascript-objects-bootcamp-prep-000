var playlist = {}

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign({}, playlist, {[artist]:songTitle})
}

console.log(updatePlaylist(playlist, "apple", "banana"))
