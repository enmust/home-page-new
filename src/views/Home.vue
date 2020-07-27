<template>
  <div class="home">
    <SectionWelcome />

    <SectionProjects />

    <SectionServices />

    <SectionAbout />

    <SectionContact />
  </div>
</template>

<script>
import SectionAbout from "../components/sections/SectionAbout";
import SectionProjects from "../components/sections/SectionProjects";
import SectionWelcome from "../components/sections/SectionWelcome";
import SectionContact from "../components/sections/SectionContact";
import SectionServices from "../components/sections/SectionServices";
export default {
  name: "Home",
  components: {
    SectionServices,
    SectionContact,
    SectionWelcome,
    SectionProjects,
    SectionAbout
  }
};
</script>
