<template>
  <!--Contact Section-->
  <div class="hero-container contact-container">
    <navbar />
    <h1 class="highlight mt-5">Contact</h1>
    <div class="satellite-container">
      <Satellite class="satellite" />
    </div>
    <!--Contact Section-->
    <div class="contact d-flex flex-column">
      <Satellite class="satellite" />
      <div class="container col-10 col-8-md mt-5">
        <div class="row flex-wrap">
          <div class="col-md-5 col-lg-5 col-12 d-flex flex-column gap-4">
            <div class="d-flex gap-2 gap-md-4 justify-content-center justify-content-md-start">
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
            <router-link :to="{ name: 'Contact' }" class="btn primary-btn">Contact Me</router-link>
          </div>
          <div class="col-md-1 col-lg-1 d-none d-md-block"></div>
          <div class="col-md-6 col-lg-6 col-12 contact-form-container mt-5 mt-md-0">
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
    </div>
    <div></div>
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

.contact-container {
  text-align: center;
  height: 100%;
}

.contact {
  text-align: start;
}

@media(max-width: 770px){
  .contact {
    text-align: center;
  }
}

.satellite {
  position: absolute;
  top: 96px;
  right: 64px;
  z-index: -1;
}

@media(max-width: 1150px){
  .satellite {
    width: 40%;
    right: 0px;
  }
}

@media(max-width: 950px){
  .satellite {
    right: -64px;
  }
}

@media(max-width: 850px){
  .satellite {
    top: 64px;
    right: -128px;
  }
}

@media(max-width: 550px){
  .satellite {
    top: 0px;
    z-index: -1;
  }
}

.contact-form-container {
  padding: 32px;
  background-color: white;
  border-radius: 8px;
}
</style>