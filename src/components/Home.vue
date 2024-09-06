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
  <div class="about-me d-flex flex-column align-items-center">
    <Spaceship />
    <h1 class="highlight">About Me</h1>
    <div class="d-flex col-8 justify-content-between flex-wrap mt-5">
      <div class="col-4"></div>
      <div class="d-flex flex-column col-4 gap-2">
        <div class="d-flex gap-2"></div>
        <h4>Welcome to my portfolio!</h4>
        <p>I’m a Software Developer and UI Designer who loves bringing ideas to life in user-friendly experiences. Whether I'm coding or crafting designs in Figma, I'm all about making a product that not only look good but also keep users coming back for more. </p>
        <button class="btn primary-btn">Read More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./navbar.vue";
import Alien from "./static-illustrations/Alien.vue";
import Spaceship from "./static-illustrations/Spaceship.vue";
import Planet from "./static-illustrations/Planet.vue";

</script>

<style scoped>
.about-me {
  margin-top: -16px;
  position: relative;
  z-index: 1;
}

</style>