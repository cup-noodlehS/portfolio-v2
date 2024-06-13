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
          I am Sheldon, a computer science student in the University of the
          Philippines Cebu, and a Full-stack developer as well!<br /><br />
          I am eager to apply my technical skills and passion for
          problem-solving to help develop innovative software solutions and
          enhance the user experience. I am also aspiring to build or contribute
          to a startup, so don't hesitate to hit me up if you want to collab!
        </p>
      </div>
      <div class="about-pics col-12 col-lg-6">
        <div class="mt-5">
          <img src="images/aboutpic1.png" alt="" />
          <img src="images/aboutpic2.jpg" alt="" />
          <img src="images/aboutpic3.jpg" alt="" />
          <img src="images/aboutpic4.jpg" alt="" />
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
  border-radius: 10px;
  margin: 0.5rem;
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
