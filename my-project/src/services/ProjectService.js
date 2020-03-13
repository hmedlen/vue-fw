import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('songs')
  },

  postSong (song) {
    return Api().post('songs', song)
  },

  putSong (song) {
    return Api().put('songs', song)
  },

  show (songId) {
    return Api().get(`song/${songId}`)
  },
}
