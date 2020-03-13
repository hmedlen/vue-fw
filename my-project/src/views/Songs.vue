<template>
    <!-- <v-container class="grey lighten-5"> -->
  <div>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col cols="1" />

      <v-col
        cols="10">
        <panel title="Songs">
          <v-btn
            :to="{name: 'songs-create'}"
            slot="action"
            class="white"
            medium
            fab
            middle
            right
            light>
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <div
            v-for="song in songs"
            class="song"
            :key="song.id">

            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                  {{ song.title }}
                </div>
                <div class="song-artist">
                  {{ song.artist }}
                </div>
                <div class="song-genre">
                  {{ song.genre }}
                </div>

                <v-btn
                  dark
                  class="primary"
                  :to="{name: 'song', params: {songId: song.id}}" 
                  >
                  View
                </v-btn>
              </v-flex>

              <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl">
              </v-flex>
            </v-layout>

            <!-- {{ song.title }} -
            {{ song.artist }} -
            {{ song.album }} -->
          </div>
        </panel>
      </v-col>

      <v-col cols="1" />
    </v-row>
  <!-- </v-container> -->
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import ProjectService from '@/services/ProjectService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await ProjectService.getAllSongs()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 250px;
  overflow: hidden;
}

.song-title {
  font-size: 26px;
}

.song-artist {
  font-size: 22px;
}

.song-genre {
  font-size: 16px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>