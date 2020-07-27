<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12" md="6" class="pa-0 hidden-sm-and-down">
        <v-img :src="require('@/assets/contact.jpg')" height="100vh" />
      </v-col>
      <v-col cols="12" md="6" class="pa-0 blue lighten-5">
        <v-card color="transparent" flat min-height="100vh">
          <v-img
            class="top-bubble"
            :src="require('@/assets/bubbles1.png')"
            contain
            max-height="200"
          />

          <v-card-title
            class="display-3 font-weight-light d-flex blue--text text--darken-2"
            >Get in touch</v-card-title
          >

          <v-row no-gutters class="pa-4">
            <v-col cols="12" sm="8">
              <v-text-field
                label="Name"
                solo
                rounded
                v-model="name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="8">
              <v-text-field
                label="Email"
                solo
                rounded
                v-model="email"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="8">
              <v-text-field
                label="Subject"
                solo
                rounded
                v-model="subject"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="8">
              <v-textarea
                label="Message"
                solo
                rounded
                v-model="message"
                rows="5"
              ></v-textarea>
            </v-col>

            <v-col cols="12" sm="8">
              <v-btn color="blue darken-2" dark rounded @click="send"
                >Send</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "SectionContact",
  data: () => ({
    name: null,
    email: null,
    subject: null,
    message: null
  }),
  methods: {
    send() {
      console.log("TODO: Send email");
    }
  }
};
</script>

<style scoped></style>
