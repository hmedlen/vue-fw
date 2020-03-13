<template>
  <panel title="Song Metadata">
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
    </v-flex>

    <v-btn
      dark
      class="primary"
      :to="{name: 'song-edit', params: {songId: song.id}}" 
      >
      Edit
    </v-btn>

    <v-flex xs6>
      <img class="album-image" :src="song.albumImageUrl">
      {{ song.album }}
    </v-flex>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
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