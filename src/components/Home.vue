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
  <!--About me Section-->
  <div class="about-me d-flex flex-column align-items-center">
    <Spaceship />
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
        <h4>Welcome to my portfolio!</h4>
        <p>I’m a Software Developer and UI Designer who loves bringing ideas to life in user-friendly experiences.
          Whether I'm coding or creating designs in Figma, my main focus is not only making a product looks good but
          also keep users coming back for more. </p>
        <button class="btn primary-btn">Read More</button>
      </div>
    </div>
  </div>
  <!--Vertical Spacing-->
  <div class="vertical-spacing"></div>
  <!--Projects Section-->
  <div class="projects-container">
    <BlackHole class="blackhole-svg" />
    <div class="projects-content col-8">
      <h1 class="highlight" style="margin-top: 520px;">Projects</h1>
      <div class="d-flex justify-content-between align-items-end mt-5">
        <div class="col-3 d-flex flex-column gap-4">
          <img src="../assets/images/Summit.png" alt="Project 1" class="project-img" />
          <img src="../assets/images/Kue.png" alt="Project 2" class="project-img" />
        </div>
        <div class="col-3 col-3 d-flex flex-column gap-2">
          <h4>My skills displayed</h4>
          <p class="projects-description">
            Explore my portfolio showcasing all my major work done in both Software Development and UI Design!
          </p>
          <button class="btn primary-btn">See My Projects</button>
        </div>
        <div class="col-3 d-flex flex-column gap-4">
          <img src="../assets/images/OfficerPrivacy.png" alt="Project 2" class="project-img" />
          <img src="../assets/images/GCUApp.png" alt="Project 2" class="project-img" />
        </div>
      </div>
    <!--Vertical Spacing-->
    <div class="vertical-spacing"></div>
    </div>
  </div>
  <!--Contact Section-->
  <div class="contact d-flex flex-column align-items-center">
    <Satellite class="hero-top-right" />
    <!--Vertical Spacing-->
    <h1 class="highlight" style="margin-top: 320px;">Contact</h1>
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
        <button class="btn primary-btn">Contact Me</button>
      </div>
      <div class="col-5 contact-form-container">
        <form class="d-flex flex-column gap-4">
          <input class="input-txt" type="text" placeholder="Name..." />
          <input class="input-txt" type="text" placeholder="Email..." />
          <textarea class="input-txt" type="text" placeholder="Message..."></textarea>
          <button class="btn tertiary-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
//Components
import Navbar from "./navbar.vue";

//Icons
import Github from "./icons/github.vue";
import LinkedIn from "./icons/linkedin.vue";
import Indeed from "./icons/indeed.vue";
import Instagram from "./icons/instagram.vue";

// Illustrations
import Alien from "./static-illustrations/Alien.vue";
import Spaceship from "./static-illustrations/Spaceship.vue";
import Satellite from "./static-illustrations/Satellite.vue";
import Planet from "./static-illustrations/Planet.vue";
import BlackHole from "./static-illustrations/BlackHole.vue";

</script>

<style scoped>
.about-me {
  margin-top: -16px;
  position: relative;
  z-index: 1;
}

.projects-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.blackhole-svg {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.projects-content {
  position: relative;
  z-index: 2;
  /* Place content on top of the black hole SVG */
  text-align: center;
}

.projects-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.project-img {
  width: 100%;
  height: 180px;
  border-radius: 10px;
  border: 1px solid white;
}

.contact {
  position: relative;
}

.contact-form-container {
  padding: 32px;
  background-color: white;
  border-radius: 8px;
}
</style>