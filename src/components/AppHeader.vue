<template>
  <v-app-bar fixed :color="isFlat ? 'transparent' : 'white'" :flat="isFlat">
    <transition
      enter-active-class="animate__animated animate__fadeInLeft animate__fast"
      leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
    >
      <v-toolbar-title class="name" v-if="showTitle"
        >Enar Mustonen</v-toolbar-title
      >
    </transition>

    <v-spacer />

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          small
          href="https://www.instagram.com/enarmustonen/"
          target="InstagramWindow"
          dark
          color="blue-grey darken-3"
        >
          <v-icon>fab fa-instagram</v-icon>
        </v-btn>
      </template>
      <span>Instagram</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          small
          href="https://www.facebook.com/enar.mustonen"
          target="FacebookWindow"
          dark
          class="mx-3"
          color="blue-grey darken-3"
        >
          <v-icon>fab fa-facebook</v-icon>
        </v-btn>
      </template>
      <span>Facebook</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          small
          href="https://github.com/enmust"
          target="GithubWindow"
          dark
          color="blue-grey darken-3"
        >
          <v-icon>fab fa-github</v-icon>
        </v-btn>
      </template>
      <span>GitHub</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",

  data: () => ({
    isFlat: true,
    showTitle: false
  }),

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  // Todo: Can remove watcher after portfolio is done
  watch: {
    "$route.name"(newVal) {
      if (newVal && newVal === "Portfolio") {
        this.isFlat = false;
        this.showTitle = true;
      }
    }
  },

  methods: {
    handleScroll() {
      // Todo: Remove if check after portfolio is done
      if (this.$route.name === "Home") {
        this.isFlat = window.scrollY < 40;
        this.showTitle = window.scrollY >= 100;
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap");

.name {
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 1.5rem;
}
</style>
