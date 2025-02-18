<template>
  <footer class="d-flex justify-content-center py-5">
    <div class="d-flex flex-column align-items-center">
      <h5 class="text-center">Designed and Developed by Sheldon Arthur Sagrado</h5>
      <p class="muted">sheldonarthursagrado@gmail.com</p>
      <div class="links d-flex">
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
        <a href="mailto:sheldonarthursagrado@gmail.com" target="_blank"
          ><Button class="button-2">
            <img src="images/mail.svg" alt="" class="pt-1" /> </Button
        ></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Button from "../index/Button.vue";
</script>

<style scoped>
.muted {
  color: #6c757d;
}
</style>
