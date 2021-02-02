<template>
  <v-row class="login-wrapper" justify="center" align="center">
    <v-col cols="12" md="6">
      <v-card>
        <v-card-title>ユーザー登録</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="userName"
            outlined
            dense
            label="UserName"
            prepend-icon="mdi-account-outline"
          />
          <v-file-input
            v-model="avatarFile"
            label="アバター画像"
            outlined
            dense
          />
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
          <v-btn outlined small @click="signup"> signup </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    userName: "",
    email: "",
    password: "",
    avatarFile: null,
  }),
  computed: {
    ...mapState("auth", ["uid"]),
  },
  methods: {
    ...mapActions("auth", ["firebaseSignUp"]),
    async signup() {
      this.firebaseSignup({ email: this.email, password: this.password });
    },
  },
};
</script>
<style scoped>
.login-wrapper {
  height: 100vh;
}
</style>
