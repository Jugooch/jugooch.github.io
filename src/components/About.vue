<template>
  <div class="hero-container d-flex flex-column justify-content-between">
    <navbar />
    <Spaceship2 class="hero-top-right spaceship" />
    <!--About me Section-->
    <div class="about-me d-flex flex-column align-items-center">
      <h1 class="highlight">About Me</h1>
      <div class="d-flex col-8 justify-content-between flex-wrap mt-5">
        <div class="col-4"></div>
        <div class="d-flex flex-column col-4 gap-4">
          <div class="d-flex gap-4">
            <LinkedIn />
            <Github />
            <Indeed />
            <Instagram />
          </div>
          <h4>My name is Justice Gooch</h4>
          <p>I am a Software developer and UI designer who graduated from Grand Canyon University in 2024. Since then, I
            have held full-time and contract positions for multiple companies outlined in the experience section below.
            <br />
            <br />
            My focus when creating applications has been on retaining users. I want users to look at the product I have
            created and think to themselves “Wow! That was a great experience, I can’t wait to use XYZ again!”. </p>
        </div>
      </div>
    </div>
    <!--Vertical Spacing-->
    <div class="vertical-spacing"></div>
    <!--Skills Section-->
    <div class="d-flex flex-column gap-4">
      <div class="d-flex gap-2">
        <TitlePlanet />
        <h5>My Skills</h5>
      </div>
    </div>
  </div>
</template>

<script setup>

import Spaceship2 from "./static-illustrations/Spaceship2.vue";
import TitlePlanet from "./static-illustrations/TitlePlanet.vue";
import Navbar from "./navbar.vue";
</script>

<style scoped>
.spaceship {
  width: 40%;
}
</style>