var playlist = {'Michael Jackson':"Thriller"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist = Object.assign(playlist,{artistName: songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
 delete playlist[artistName]
}
