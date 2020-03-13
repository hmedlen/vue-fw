<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col cols="1" />

      <v-col cols="10">
        <panel title="Register">
          <form
            name="tab-tracker-form"
            autocomplete="off">
            <v-text-field
              v-model="email"
              label="Email" />
            <v-text-field
              v-model="password"
              label="Password"
              autocomplete="new-password" />
          </form>

          <br>
          <div class="error" v-html="error" />
          <br>

          <v-btn
            class="primary"
            @click="register">
            Register
          </v-btn>
        </panel>
      </v-col>

      <v-col cols="1" />
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  name: 'Register',

  components: {
    Panel
  },

  methods: {
    async register () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user) 
      } catch (error) {
        this.error = error.response.data.error
      }

      // Another way to do this? Save for now.
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