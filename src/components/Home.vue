<template>
  <div class="hero-container d-flex flex-column justify-content-between">
    <navbar />
    <Planet class="hero-top-right" />
    <div class="d-flex flex-column gap-2 align-self-center" style="text-align: center">
      <h2>Hi, I'm <span class="highlight">Justice Gooch</span></h2>
      <p>Software Developer | UI Designer</p>
      <div class="d-flex flex-row gap-2 justify-content-center">
        <button class="btn primary-btn">Hire Me</button>
        <button class="btn secondary-btn" v-on:click="downloadPDF()">See Resume</button>
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
    <div class="container col-10 col-8-md mt-5">
      <div class="row flex-wrap">
        <div class="col-md-6 col-lg-6 col-sm-12 mb-4"><img src="../assets/images/me.png" class="img-fluid about-img"/></div>
        <div class="col-md-1 col-lg-1 d-none d-md-block"></div>
        <div class="d-flex flex-column col-md-5 col-lg-5 col-sm-12 gap-4">
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
          <router-link :to="{ name: 'About' }" class="btn primary-btn">Read More</router-link>
        </div>
      </div>
    </div>
  </div>
  <!--Vertical Spacing-->
  <div class="vertical-spacing"></div>
  <!--Projects Section-->
  <div class="projects-container">
    <BlackHole class="blackhole-svg" />
    <div class="projects-content col-10 col-8-md mx-auto d-flex flex-column gap-5 gap-md-0">
      <h1 class="highlight" style="margin-top: 520px;">Projects</h1>
      <div class="row justify-content-between align-items-center mt-5">

        <!-- Left Stack Column (or first row of images on small screens) -->
        <div class="col-12 col-md-3 d-flex flex-wrap flex-md-column gap-2 mb-4 mb-md-0">
          <div class="col-5 col-md-12">
            <img src="../assets/images/Summit.png" alt="Project 1" class="project-img img-fluid" />
          </div>
          <div class="col-1"></div>
          <div class="col-5 col-md-12">
            <img src="../assets/images/Kue.png" alt="Project 2" class="project-img img-fluid" />
          </div>
        </div>

        <!-- Center Content Column -->
        <div class="col-12 col-md-3 d-flex flex-column gap-2 text-center text-md-left mb-4 mb-md-0">
          <h4>My skills displayed</h4>
          <p class="projects-description">
            Explore my portfolio showcasing all my major work done in both Software Development and UI Design!
          </p>
          <router-link :to="{ name: 'Projects' }" class="btn primary-btn">See My Projects</router-link>
        </div>

        <!-- Right Stack Column (or second row of images on small screens) -->
        <div class="col-12 col-md-3 d-flex flex-wrap flex-md-column gap-2">
          <div class="col-5 col-md-12">
            <img src="../assets/images/OfficerPrivacy.png" alt="Project 1" class="project-img img-fluid" />
          </div>
          <div class="col-1"></div>
          <div class="col-5 col-md-12">
            <img src="../assets/images/GCUApp.png" alt="Project 2" class="project-img img-fluid" />
          </div>
        </div>
      </div>

      <!-- Vertical Spacing -->
      <div class="vertical-spacing mb-5"></div>
    </div>
  </div>
  <!--Contact Section-->
  <div class="contact d-flex flex-column align-items-center">
    <Satellite class="satellite" />
    <!--Vertical Spacing-->
    <h1 class="highlight" style="margin-top: 320px;">Contact</h1>
    <div class="container col-10 col-8-md mt-5">
      <div class="row flex-wrap">
        <div class="col-md-5 col-lg-5 col-12 d-flex flex-column gap-4">
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
          <router-link :to="{ name: 'Contact' }" class="btn primary-btn">Contact Me</router-link>
        </div>
        <div class="col-md-1 col-lg-1 d-none d-md-block"></div>
        <div class="col-md-6 col-lg-6 col-12 contact-form-container mt-5">
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

// Files
import Resume from "../assets/Justice_Gooch_Resume.pdf";
import emailjs from "@emailjs/browser";

function downloadPDF() {
  // Use the imported PDF path
  const pdfPath = Resume;

  // Open the PDF in a new tab or window
  window.open(pdfPath, "_blank");
}

function sendEmail(formId) {
  var form = document.getElementById(formId);

  emailjs
      .sendForm("default_service", "template_t4dw9kl", form, "MvuWEKUPjd_YI_EAM")
      .then(
          (result) => {
            alert("Email Successfully Sent!");
          },
          (error) => {
            console.log(error);
            alert("Email Failed to Send... Please Try Again");
          }
      );
}

</script>

<style scoped>
.about-me {
  margin-top: -16px;
  position: relative;
  z-index: 1;
}

.about-img {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
}
.satellite {
  position: absolute;
  top: 80px;
  right: 64px;
}

@media(max-width: 1100px){
  .satellite {
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
    right: -128px;
    z-index: -1;
  }
}

@media(max-width: 550px){
  .satellite {
    top: 40px;
    right: -256px;
    z-index: -1;
  }
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

.project-img {
  width: 100%;
  height: 180px;
  border-radius: 10px;
  border: 1px solid white;
  object-fit: cover;
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