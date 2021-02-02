<template>
  <v-row class="login-wrapper" justify="center" align="center">
    <v-col cols="12" md="6">
      <v-card>
        <v-card-title>ログイン</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            outlined
            dense
            label="Email"
            prepend-icon="mdi-email-outline"
          />
          <v-text-field
            v-model="password"
            outlined
            dense
            label="Password"
            type="password"
            prepend-icon="mdi-lock-outline"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn outlined rounded small @click="login"> Login </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    email: "",
    password: "",
    loginLoading: false,
  }),

  methods: {
    ...mapActions("auth", ["firebaseLogin"]),
    async login() {
      this.firebaseLogin({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
.login-wrapper {
  height: 100vh;
}
</style>
