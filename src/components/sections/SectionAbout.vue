<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12" md="6" class="pa-0 green lighten-5">
        <v-card color="transparent" flat min-height="100vh">
          <v-img
            class="top-bubble"
            :src="require('@/assets/bubbles1.png')"
            contain
            max-height="200"
          />

          <v-card-title
            class="display-3 font-weight-light d-flex green--text text--darken-3"
            >About me</v-card-title
          >

          <v-card-text class="title font-weight-light"
            >I have been in a <strong>software development</strong> world since
            2015 and I would say <strong>web</strong> development has always
            been my <strong>strongest</strong> suit. I work
            <strong>hard</strong> and <strong>effective</strong> to provide
            <strong>clients</strong> with what they need from idea to
            <strong>final product</strong>.
          </v-card-text>

          <v-row no-gutters class="px-4 pb-4">
            <v-col cols="12">
              <div
                class="display-1 font-weight-light green--text text--darken-4"
              >
                Skills
              </div>
            </v-col>

            <v-col cols="12">
              <v-card color="transparent" class="mt-2">
                <v-row no-gutters class="pa-4">
                  <v-col
                    class="mb-2"
                    cols="12"
                    v-for="(entity, index) in skills"
                    :key="index"
                  >
                    <div class="d-flex flex-row justify-space-between">
                      <div class="text-uppercase title font-weight-light">
                        {{ entity.title }}
                      </div>
                      <div class="title font-weight-light">
                        {{ entity.percentage }}%
                      </div>
                    </div>

                    <v-progress-linear
                      :color="entity.color"
                      :value="entity.percentage"
                      height="10"
                      striped
                    ></v-progress-linear>
                  </v-col>

                  <v-col cols="12" class="mt-3">
                    <span v-for="(entity, index) in tags" :key="index">
                      <v-chip class="ma-1" color="green lighten-3">{{
                        entity
                      }}</v-chip>
                    </span>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="pa-0">
        <v-img
          :src="require('@/assets/marathon.jpg')"
          height="100vh"
          class="hidden-sm-and-down"
        />
        <v-img
          :src="require('@/assets/profile_picture.jpg')"
          height="100vh"
          class="hidden-md-and-up"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "SectionAbout",
  data: () => ({
    skills: [
      {
        title: "Web Developement",
        percentage: 95,
        color: "blue"
      },
      {
        title: "Web Design",
        percentage: 85,
        color: "orange"
      },
      {
        title: "Web Support",
        percentage: 90,
        color: "lime darken-2"
      }
    ],
    tags: [
      "JavasScript",
      "HTML",
      "CSS",
      "Vue",
      "Docker",
      "Linux",
      "Django REST framework",
      "REST API",
      "CircleCI",
      "Python",
      "Node",
      "Git",
      "PostgreSQL",
      "React",
      "Java",
      "Apache Solr",
      "Angular",
      "TypeScript",
      "NGINX",
      "etc."
    ]
  }),
  methods: {
    calculateRandomColor() {
      return (
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")
      );
    }
  }
};
</script>

<style scoped></style>
