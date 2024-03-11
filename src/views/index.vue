<template>
  <header class="container">
    <Cover />
  </header>
  <main class="container">
    <Features />
    <hr />
    <Experience />
    <hr />
    <Projects />
    <hr />
    <About />
  </main>
</template>
<script>
import Cover from "../components/index/cover.vue";
import Features from "../components/index/features.vue";
import Projects from "../components/index/projects.vue";
import About from "../components/index/about.vue";
import Experience from "../components/index/experience.vue";

export default {
  components: {
    Cover,
    Features,
    Projects,
    About,
    Experience,
  },
};
</script>
