<template>
  <footer class="d-flex justify-content-between align-items-center flex-wrap">
    <div class="links">
      <a
        href="https://github.com/cup-noodlehS"
        target="_blank"
        class="home-links btn btn-dark mx-2"
        ><img src="images/github.svg" alt="" class="pt-1"
      /></a>
      <a
        href="https://www.linkedin.com/in/sheldonarthur/"
        target="_blank"
        class="home-links btn btn-dark mx-1"
        ><img src="images/linkedin.svg" alt="" class="pt-1"
      /></a>
      <a
        href="mailto:sheldonarthursagrado@gmail.com"
        target="_blank"
        class="home-links btn btn-dark mx-1"
        ><img src="images/mail.svg" alt="" class="pt-1"
      /></a>
    </div>
    <h5>Created by Sheldon Arthur Sagardo</h5>
  </footer>
</template>
<style scoped>
.home-links {
  border-radius: 50% !important;
  width: 50px !important;
  height: 50px !important;
  box-shadow: 2px 2px 0 rgb(255, 255, 255);
  transition: all 0.2s ease;
}

.home-links:hover {
  transform: translate(-5px, -5px);
  box-shadow: 7px 7px 0 rgb(255, 255, 255);
}
</style>
