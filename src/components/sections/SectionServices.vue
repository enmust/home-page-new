<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12" md="6" class="pa-0 hidden-sm-and-down">
        <v-img :src="require('@/assets/services.jpg')" height="100%" />
      </v-col>
      <v-col cols="12" md="6" class="pa-0 brown lighten-5">
        <v-card color="transparent" flat min-height="100vh">
          <v-img
            class="top-bubble-right"
            :src="require('@/assets/bubbles1.png')"
            contain
            max-height="200"
          />

          <v-card-title
            class="display-3 font-weight-light px-2 d-flex justify-center brown--text"
            >Services</v-card-title
          >

          <v-card-text class="title font-weight-light text-center"
            >Main focus is on web development both <strong>front</strong> and
            <strong>back</strong> end however I also provide some other software
            services.</v-card-text
          >

          <v-row no-gutters class="text-center">
            <v-col
              cols="12"
              sm="6"
              class="d-flex flex-column align-center mb-3"
              v-for="(entity, index) in services"
              :key="index"
            >
              <v-card
                elevation="6"
                shaped
                color="brown lighten-3"
                width="75"
                height="75"
              >
                <v-icon dark class="fill-height" large>{{
                  entity.icon
                }}</v-icon>
              </v-card>

              <v-card-title
                class="display-1 font-weight-light"
                style="word-break: break-word;"
              >
                {{ entity.title }}
              </v-card-title>

              <v-card-text class="title font-weight-light">
                {{ entity.text }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "SectionServices",
  data: () => ({
    services: [
      {
        icon: "fas fa-code",
        title: "Development",
        text: "Agile development and custom software solutions"
      },
      {
        icon: "fas fa-user",
        title: "Support",
        text: "Software consulting, bug fixes"
      },
      {
        icon: "fas fa-pencil-ruler",
        title: "Design",
        text: "Mobile first, intuitive, responsive"
      },
      {
        icon: "fas fa-chart-line",
        title: "Analytics & Research",
        text: "SEO, latest tech, analytics for websites"
      }
    ]
  })
};
</script>

<style scoped></style>
