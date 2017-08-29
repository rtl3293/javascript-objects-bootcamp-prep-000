var playlist = {car: "green"}

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign({}, playlist, {[artist]:songTitle})
}
