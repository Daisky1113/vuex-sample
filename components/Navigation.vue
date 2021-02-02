<template>
  <v-app-bar fixed app>
    <v-app-bar-title>Frontend3</v-app-bar-title>
    <v-spacer />
    <v-btn to="/login" text> login </v-btn>
    <v-btn to="/signup" text outlined> signup </v-btn>
    <v-btn text @click="logout"> ログアウト </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({}),
  computed: {},
  methods: {
    logout() {
      console.log("logout");
    },
  },
};
</script>
