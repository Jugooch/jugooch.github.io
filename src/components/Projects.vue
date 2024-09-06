<template>
  <div class="hero-container d-flex flex-column justify-content-between">
    <navbar />
    <Planet class="hero-top-right" />
    <div class="d-flex flex-column gap-2 align-self-center" style="text-align: center">
      <h2>Hi, I'm <span class="highlight">Justice Gooch</span></h2>
      <p>Software Developer | UI Designer</p>
      <div class="d-flex flex-row gap-2 justify-content-center">
        <button class="btn primary-btn">Hire Me</button>
        <button class="btn secondary-btn">See Resume</button>
      </div>
    </div>
    <div class="align-self-center">
      <!-- TODO: Replace with Rive animation Alien-->
      <Alien />
    </div>
  </div>
</template>

<script setup>

import Planet from "./static-illustrations/Planet.vue";
import Navbar from "./navbar.vue";
import Alien from "./static-illustrations/Alien.vue";
</script>

<style scoped>

</style>