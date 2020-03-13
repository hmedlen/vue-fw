<template>
  <v-container class="grey lighten-5">
    <v-layout>
      <v-flex xs5>
        <panel title="Song Metadata">
          <v-text-field
            label="Title"
            v-model="song.title"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Artist"
            v-model="song.artist"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Genre"
            v-model="song.genre"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Album"
            v-model="song.album"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Album Image Url"
            v-model="song.albumImageUrl"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Youtube ID"
            v-model="song.youtubeId"
            required
            :rules="[required]"
          ></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs7 class="ml-2">
        <panel title="Song Structure">
          <v-textarea
            label="Tab"
            multi-line
            v-model="song.tab"
            required
            :rules="[required]"
          ></v-textarea>

          <v-textarea
            label="Lyrics"
            multi-line
            v-model="song.lyrics"
            required
            :rules="[required]"
          ></v-textarea>
        </panel>

        <v-alert
          class="ml-4"
          :value="error"
          transition="scale-transition"
          dismissible
          error>
          {{ error }}
        </v-alert>

        <v-btn
          dark
          class="primary"
          @click="create">
          Create Song
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
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
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },

  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in the required fields.'
        return
      }

      try {
        ProjectService.postSong(this.song)
        this.$router.push({name: 'songs'})
      } catch (err) {
        console.log(err)
      }
    }
  }
  // async mounted () {
  //   // do a request to the backend for all the songs
  //   this.songs = (await ProjectService.getAllSongs()).data
  // }
}
</script>

<style scoped>
</style>