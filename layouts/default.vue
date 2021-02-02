<template>
  <v-app dark>
    <Navigation />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  data() {
    return {};
  },
  components: {
    Navigation,
  },
};
</script>
