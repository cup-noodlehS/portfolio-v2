<template>
  <div class="d-flex container-fluid my-5" id="about">
    <div class="row justify-content-center">
      <div class="about-content col-12 col-lg-6">
        <div class="d-flex mb-3">
          <a href="https://github.com/cup-noodlehS" target="_blank">
            <Button class="button-2">
              <img src="images/github.svg" alt="" class="pt-1" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/sheldonarthur/" target="_blank">
            <Button class="button-2">
              <img src="images/linkedin.svg" alt="" class="pt-1" />
            </Button>
          </a>
          <a href="mailto:sheldonarthursagrado@gmail.com" target="_blank">
            <Button class="button-2">
              <img src="images/mail.svg" alt="" class="pt-1" />
            </Button>
          </a>
          <a href="https://www.instagram.com/n0odlehs/" target="_blank">
            <Button class="button-2">
              <img src="images/instagram.svg" alt="" class="pt-1" />
            </Button>
          </a>
        </div>
        <h2>about.me</h2>
        <h5>what I love to do?</h5>
        <p>
          I am Sheldon, a Software Engineer with expertise in full-stack development. 
          Currently leading development at Tranches while also working as a Software Engineer at Bitwork Solutions. 
          I specialize in modern web technologies including Next.js, FastAPI, Django, and Svelte, 
          with a strong focus on building scalable applications and video automation pipelines. 
          I'm passionate about technical leadership and creating innovative solutions that deliver real business value. 
          Always open to exciting collaborations and new opportunities!
        </p>
      </div>
      <div class="about-pics col-12 col-lg-6">
        <div class="mt-5">
          <a
            href="https://www.upcebu.edu.ph/2024/11/18/computer-science-students-win-natl-data-science-comp-promote-sustainable-urban-mobility-with-lakbai/" target="_blank">
            <img src="images/aboutpic1.png" alt="" />
          </a>
          <a href="https://www.facebook.com/UPCSG/posts/-congratulations-to-the-brilliant-minds-behind-the-winning-projects-at-the-recen/905752168005900/" target="_blank">
            <img src="images/aboutpic2.jpg" alt="" />
          </a>
          <img src="images/aboutpic3.jpg" alt="" />
          <a href="https://www.facebook.com/UPCSG/posts/pfbid02xBayA3PZwx1mCrcbi93b7M6n5yXbGQ1UVNWxx73rPEyYHCuA4e45W9SJ9txua2Bnl" target="_blank">
            <img src="images/aboutpic4.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
</script>

<style scoped>
#about {
  /* padding: 100px 200px !important; */
  width: 100% !important;
  /* min-height: 100vh; */
}
#about h2 {
  font-weight: 600;
}
#about h5 {
  color: rgb(241, 241, 120);
}

.about-content {
  width: 30%;
  background-color: rgb(43, 48, 53);
  padding: 1rem;
  border-radius: 25px;
  transform: rotate(2deg);
  box-shadow: rgba(253, 227, 0, 0.4) -5px 5px, rgba(194, 185, 7, 0.3) -10px 10px,
    rgba(255, 243, 6, 0.2) -15px 15px, rgba(194, 191, 4, 0.1) -20px 20px,
    rgba(251, 255, 0, 0.05) -25px 25px;
}

.about-pics {
  padding: 1rem;
  transform: rotate(2deg);
}

.about-pics img {
  width: 40%;
  border-radius: 20px;
  margin: 0.5rem;
  transition: transform 0.3s ease;
}

.about-pics img:hover {
  transform: scale(1.5);
  z-index: 1;
  box-shadow: 0 0 10px rgb(241, 241, 120);
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
  .about-content {
    width: 100%;
  }
}
</style>
