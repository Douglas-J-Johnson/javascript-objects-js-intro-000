var playlist = {'Michael Jackson':"Thriller"}

function updatePlaylist(playlist, artisName, songTitle) {
  playlist = Object.assign(playlist,{artistName: songTitle})
  return playlist
}
