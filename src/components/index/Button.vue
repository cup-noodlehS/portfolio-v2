<template>
  <button v-bind="$attrs" v-on="$listeners" :disabled="disabled" class="mb-3">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: Boolean,
});
</script>

<style scoped lang="scss">
button {
  &.button-1 {
    color: rgb(12, 10, 27);
    font-weight: 1000 !important;
    padding: 0.8rem 1.2rem;
    background-color: rgb(241, 241, 120);
    border-radius: 5px;
    border: none;
    box-shadow: -3px 3px 0 rgb(255, 255, 255);
    transition: all 0.2s ease;

    &:hover {
      transform: translate(5px, -5px);
      box-shadow: -8px 8px 0 rgb(255, 255, 255);
      filter: brightness(120%);
    }
  }

  &.button-2 {
    border-radius: 50% !important;
    width: 50px !important;
    height: 50px !important;
    background-color: #212529;
    border: none;
    box-shadow: -2px 2px 0 rgb(255, 255, 255);
    transition: all 0.2s ease;

    &:hover {
      transform: translate(5px, -5px);
      box-shadow: -7px 7px 0 rgb(255, 255, 255);
    }
  }
}
</style>
