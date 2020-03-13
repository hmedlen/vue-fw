<template>
  <div class="white">
    <div>
      <v-toolbar flat dense class="primary" dark>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer/>
        <slot name="action" />
      </v-toolbar>
    </div>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <!-- <slot name="hey">
        No slot content defined.
      </slot> -->
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>