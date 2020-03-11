<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
      </div>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="email" />

        <br>

        <input
          v-model="password"
          type="password"
          name="password"
          placeholder="password" />

        <br>
        <div class="error" v-html="error" />
        <br>

        <!-- <button
          @click="register">
          Register
        </button> -->
        <v-btn
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </div>
    </v-flex>
  </v-layout>

  <!-- <div>
    <h1>Register</h1>




  </div> -->
</template>

<script>
// @ is an alias to /src
// import Register from '@/components/Register.vue'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',

  // components: {
  //   Register
  // },

  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
      // const response = await AuthenticationService.register({
      //   email: this.email,
      //   password: this.password
      // })
      // console.log(response.data);
    }
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  // watch: {
  //   email (value) {
  //     console.log("email has changed", value)
  //   }
  // },

  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>