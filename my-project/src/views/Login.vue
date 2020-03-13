<template>
  <div>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col cols="1" />

      <v-col cols="10">
        <panel title="Login">
          <v-text-field
            v-model="email"
            label="Email" />


          <v-text-field
            v-model="password"
            label="Password" />

          <br>
          <div class="error" v-html="error" />
          <br>

          <v-btn
            class="primary"
            @click="login">
            Login
          </v-btn>
        </panel>
      </v-col>

      <v-col cols="1" />
    </v-row>
  </div>

</template>

<script>
// @ is an alias to /src
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  name: 'Login',

  components: {
    Panel
  },

  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token) // calls setToken action, which calls setToken mutation
        this.$store.dispatch('setUser', response.data.user) 
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>