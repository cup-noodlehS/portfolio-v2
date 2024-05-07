<template>
  <div class="container-fluid">
    <Navbar class="fixed-top" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/partials/navbar.vue";
import Footer from "./components/partials/footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
