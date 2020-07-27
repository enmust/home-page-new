<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12" md="6" class="pa-0 hidden-sm-and-down">
        <v-img
          :src="require('@/assets/profile_picture.jpg')"
          height="100vh"
          gradient="to bottom right, rgba(0, 0, 0, .33), rgba(255, 255, 255, .50)"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="pa-0 d-flex flex-column justify-space-between"
        :class="{ 'position-relative': $vuetify.breakpoint.smAndDown }"
      >
        <v-img
          class="top-bubble"
          :class="{ 'top-bubble-sm': $vuetify.breakpoint.smAndDown }"
          :src="require('@/assets/bubbles1.png')"
          contain
          max-height="200"
        />

        <v-card shaped class="my-12 mx-6 ma-sm-15" style="z-index: 1;">
          <v-card-title class="display-3 font-weight-light">Hey!</v-card-title>

          <v-card-text class="title font-weight-light">
            <p>
              My name is <strong>Enar Mustonen</strong> and I am a Software
              Developer from Tallinn, Estonia.
            </p>
            <p>
              Check out my
              <v-btn
                rounded
                small
                color="amber lighten-1"
                @click="$vuetify.goTo('#recent-projects', { offset: 75 })"
                >recent projects</v-btn
              >
            </p>
            <p>
              If you need help with some project or have a great idea feel free
              to
              <v-btn rounded small color="amber lighten-1">contact me</v-btn>
              and I do my best to help you.
            </p>
          </v-card-text>
        </v-card>

        <v-img
          class="bottom-bubble"
          :class="{ 'bottom-bubble-sm': $vuetify.breakpoint.smAndDown }"
          :src="require('@/assets/bubbles2.png')"
          contain
          max-height="200"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "SectionWelcome"
};
</script>

<style scoped></style>
