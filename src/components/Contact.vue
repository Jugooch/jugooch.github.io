<template>
  <!--Contact Section-->
  <div class="hero-container d-flex flex-column justify-content-between">
    <navbar />
    <div class="satellite-container">
      <Satellite class="satellite" />
    </div>
    <!--Vertical Spacing-->
    <div class="contact d-flex flex-column align-items-center">
      <h1 class="highlight">Contact</h1>
      <div class="d-flex col-8 justify-content-between flex-wrap mt-5">
        <div class="d-flex flex-column col-4 gap-4">
          <div class="d-flex gap-4">
            <LinkedIn />
            <Github />
            <Indeed />
            <Instagram />
          </div>
          <p>Thanks for viewing my portfolio! You can leave me a message at my work-related email or submit the contact form!</p>
          <div class="d-flex flex-column">
            <h4>Email:</h4>
            <p>justicegooch@gmail.com</p>
          </div>
        </div>
        <div class="col-5 contact-form-container">
          <form class="d-flex flex-column gap-4"
                id="contact-form"
                ref="form"
                @submit.prevent="sendEmail('contact-form')">
            <input class="input-txt" type="text" placeholder="Name..." />
            <input class="input-txt" type="text" placeholder="Email..." />
            <textarea class="input-txt" type="text" placeholder="Message..."></textarea>
            <button class="btn tertiary-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div class="vertical-spacing"></div>
  </div>
</template>

<script setup>

import Planet from "./static-illustrations/Planet.vue";
import Navbar from "./navbar.vue";
import Alien from "./static-illustrations/Alien.vue";
import Instagram from "./icons/instagram.vue";
import LinkedIn from "./icons/linkedin.vue";
import Indeed from "./icons/indeed.vue";
import Satellite from "./static-illustrations/Satellite.vue";
import Github from "./icons/github.vue";
</script>

<style scoped>
.satellite-container {
  position: absolute;
  top: 32px;
  right: 32px;
}

.satellite {
  width: 100%;
  height: auto;
  max-width: 600px;
  object-fit: contain;
}


.contact-form-container {
  padding: 32px;
  background-color: white;
  border-radius: 8px;
}
</style>