<template>
  <div
    class="portfolio fill-height display-1 pa-4"
    style="display: grid; place-items: center;"
  >
    <div>
      Portfolio in progress...
      <v-progress-linear
        class="mt-4"
        color="green"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>

      <div class="text-center">
        <v-btn dark class="mt-4" @click="$router.push('/')" color="green"
          >Go back</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style scoped></style>
