<template>
  <panel title="YouTube Video">
    <!-- {{ youtubeId }} -->
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="194">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
  
}
</script>

<style scoped>

</style>