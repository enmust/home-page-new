<template>
  <v-footer elevation="12" color="white">
    <div class="d-flex justify-space-around py-2 mx-auto">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            fab
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

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            fab
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

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            fab
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

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            fab
            href="mailto:enar.mustonen@gmail.com"
            dark
            class="mx-3"
            color="blue-grey darken-3"
          >
            <v-icon>far fa-envelope</v-icon>
          </v-btn>
        </template>
        <span>Mail</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            fab
            href="tel:+37253471868"
            dark
            color="blue-grey darken-3"
          >
            <v-icon>fas fa-phone-alt</v-icon>
          </v-btn>
        </template>
        <span>Phone</span>
      </v-tooltip>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped></style>
