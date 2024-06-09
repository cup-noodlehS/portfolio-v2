<template>
  <div id="home" class="home row justify-content-center align-items-center">
    <div class="col-6 align-self-end d-none d-md-block">
      <img src="images/gwapo.png" alt="" id="meImg" class="" />
    </div>
    <div class="home-content col-12 col-md-6">
      <div class="text">
        <h4 class="mb-3">Hello, they call me "Don";</h4>
        <h5>
          I am a <span class="yellow">full-stack developer</span> from the
          <span class="yellow">Philippines</span> who loves to create ;&#41;
        </h5>
      </div>
      <div class="links mt-5 d-flex gap-2 flex-wrap justify-content-start">
        <a href="#featured">
          <Button class="button-1">Projects</Button>
        </a>
        <div class="d-flex gap-2">
          <a href="https://github.com/cup-noodlehS" target="_blank">
            <Button class="button-2"
              ><img src="images/github.svg" alt="" class=""
            /></Button>
          </a>
          <a href="https://www.linkedin.com/in/sheldonarthur/" target="_blank">
            <Button class="button-2"
              ><img src="images/linkedin.svg" alt="" class="" /></Button
          ></a>
          <a href="mailto:sheldonarthursagrado@gmail.com" target="_blank">
            <Button class="button-2"
              ><img src="images/mail.svg" alt="" class="pt-1" /></Button
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/index/Button.vue";
</script>

<style scoped>
.home {
  min-height: 100lvh;
}

#meImg {
  max-height: calc(100vh - 100px);
}

h5 {
  font-size: 3rem !important;
  font-weight: 1000;

  @media screen and (max-width: 768px) {
    font-size: 2rem !important;
  }
}
.yellow {
  color: rgb(241, 241, 120);
}

#meImg:hover {
  animation: shake 1s;
}

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

@media (max-width: 768px) {
  #meImg {
    display: none;
  }

  h4 {
    font-size: 1rem;
  }
}
</style>
