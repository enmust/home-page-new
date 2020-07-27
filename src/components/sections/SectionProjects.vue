<template>
  <section>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="pa-0 d-flex flex-column justify-space-between grey lighten-2"
        :class="{ 'position-relative': $vuetify.breakpoint.smAndDown }"
      >
        <v-img
          class="top-bubble hidden-sm-and-down"
          :class="{ 'top-bubble-sm': $vuetify.breakpoint.smAndDown }"
          :src="require('@/assets/bubbles1.png')"
          contain
          max-height="200"
        />

        <div class="text-center mt-4 mt-md-0">
          <p
            id="recent-projects"
            class="display-3 font-weight-light px-2 grey--text text--darken-3"
          >
            Recent projects
          </p>

          <p class="title font-weight-light">
            Go to
            <v-btn to="/portfolio" rounded small color="amber lighten-1"
              >portfolio</v-btn
            >
            to view all projects.
          </p>
        </div>

        <v-card shaped class="ma-3 grey lighten-3" style="z-index: 1;">
          <v-row no-gutters class="pa-2">
            <v-col
              v-for="card in cards"
              :key="card.title"
              cols="12"
              sm="6"
              class="pa-2"
            >
              <v-card elevation="12" color="amber lighten-1" shaped>
                <v-img
                  :src="card.src"
                  height="300px"
                  class="white--text image-hover"
                  gradient="to top right, rgba(0, 0, 0, .33), rgba(26, 35, 126, .77)"
                >
                  <v-card-title
                    class="fill-height align-end title-style"
                    style="word-break: break-word;"
                    v-text="card.title"
                  ></v-card-title>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        v-on="on"
                        absolute
                        top
                        right
                        rounded
                        color="amber lighten-1"
                        elevation="8"
                        :href="card.url"
                        target="ProjectWindow"
                        small
                      >
                        <span>View project</span>
                        <v-icon right small>fas fa-external-link-alt</v-icon>
                      </v-btn>
                    </template>

                    <span>{{ "Visit site: " + card.url }}</span>
                  </v-tooltip>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card>

        <v-img
          class="bottom-bubble"
          :class="{ 'bottom-bubble-sm': $vuetify.breakpoint.smAndDown }"
          :src="require('@/assets/bubbles2.png')"
          contain
          max-height="200"
        />
      </v-col>
      <v-col cols="12" md="6" class="pa-0 hidden-sm-and-down">
        <v-img :src="require('@/assets/projects.jpg')" height="100%" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "SectionProjects",
  data: () => ({
    cards: [
      {
        title: "TURBA",
        src: require("@/assets/cardBackgrounds/turvas.jpg"),
        url: "https://turvas.geoloogia.info",
        description:
          "An application that thoroughly introduces Estonian peat data."
      },
      {
        title: "GeoCASe-prototype",
        src: require("@/assets/cardBackgrounds/geocasePrototype.jpg"),
        url: "http://geocase.geocollections.info",
        description:
          "A small prototype made to showcase some features and functionalty which would already surpass the existing application http://www.geocase.eu/. Whole project which will include new Website and API is set to start on the summer of 2020."
      },
      {
        title: "SARV·DOI",
        src: require("@/assets/cardBackgrounds/sarvDoi.jpg"),
        url: "https://doi.geocollections.info",
        description:
          "An application for showing published and unpublished DOIs in Geoscience Data Repository."
      },
      {
        title: "SARV Data Management",
        src: require("@/assets/cardBackgrounds/sarvDataManagement.png"),
        url: "https://edit.geocollections.info",
        description:
          "An application made for managing geocollections-related data in Estonia. Various dedicated websites use information which is created and edited here."
      }
    ]
  })
};
</script>

<style scoped>
.title-style {
  text-shadow: 0 1px 9px rgba(0, 0, 0, 0.9);
  font-weight: 500;
  letter-spacing: 2px;
}

.image-hover:hover {
  opacity: 0.88;
}
</style>
