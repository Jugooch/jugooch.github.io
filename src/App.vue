<script setup>
import { ref } from "vue";
import navbar from "./components/navbar.vue";
import backgroundRightToLeft from "./components/icons/background-hexagons.vue";
import Github from "./components/icons/github.vue";
import Email from "./components/icons/email.vue";
import Behance from "./components/icons/behance.vue";
import Linkedin from "./components/icons/linkedin.vue";
import download from "./components/icons/download.vue";
import logo from "./components/icons/logo.vue";
import Resume from "./assets/Justice_Gooch_Resume.pdf";
import emailjs from '@emailjs/browser';

var currentTab = ref(1);
var phone = ref("");
var isUI = ref(true);
var isFrontend = ref(false);
var isBackend = ref(false);

function acceptNumber() {
  var x = phone.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  phone.value = !x[2]
    ? x[1]
    : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
}

function scrollTo(id){
  var targetElement = document.getElementById(id);

  if (targetElement) {
    // Calculate the offset of the target element
    var targetOffset = targetElement.offsetTop;

    // Scroll to the target element
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth',
    });
  }
}

function sendEmail(formId) {
      var form = document.getElementById(formId);

      emailjs.sendForm('default_service', 'template_t4dw9kl', form, 'MvuWEKUPjd_YI_EAM')
        .then((result) => {
          alert("Email Successfully Sent!");
        }, (error) => {
          alert("Email Failed to Send... Please Try Again");
        });
    }

function downloadPDF() {
    // Use the imported PDF path
    const pdfPath = Resume;

    // Open the PDF in a new tab or window
    window.open(pdfPath, '_blank');
  }

function setActive(){
  if(currentTab.value == 1){
    isUI.value = true;
    isFrontend.value = false;
    isBackend.value = false;
  }  
  else if(currentTab.value == 2){
    isUI.value = false;
    isFrontend.value = true;
    isBackend.value = false;
  }  
  else{
    isUI.value = false;
    isFrontend.value = false;
    isBackend.value = true;
  }
}

const uiSkills = ref([
  "Figma",
  "Adobe XD",
  "Prototyping",
  "Wireframes",
  "User Testing",
  "UI/UX",
  "Icon Design",
  "Responsive Design",
]);
const frontendSkills = ref([
  "Vue",
  "Angular",
  "Flutter",
  "HTML",
  "CSS",
  "Javascript",
  "API Consumption",
]);
const backendSkills = ref([
  "Java",
  "C#",
  "Object-Oriented",
  "Spring-Boot",
  ".NET Core",
  "REST API's",
]);

const uiProjects = ref([
  {
    image: "/images/natgeo-mockup.png",
    name: "Nat-Geo Redesign",
    description: "Figma, UI/UX, Prototyping",
    url: "https://www.behance.net/gallery/183185371/National-Geographic-Redesign",
  },
  {
    image: "/images/neubrutalism-landing-page.png",
    name: "Neubrutalism Landing Page",
    description: "Figma, UI/UX, Icon Design",
    url: "https://www.behance.net/gallery/183186019/Neubrutalism-Landing-Page",
  },
  {
    image: "/images/soundoff.png",
    name: "Sound-Off Case Study",
    description: "Adobe XD, UI/UX, User Testing",
    url: "https://www.behance.net/gallery/169087427/SoundOff-Case-Study",
  },
  {
    image: "/images/allrecipes-redesign.png",
    name: "AllRecipes Redesign",
    description: "Figma, UI/UX, Wireframes",
    url: "https://www.behance.net/gallery/180092127/AllRecipes-Redesign",
  },
  {
    image: "/images/Responsive-Event-Mockup.png",
    name: "Responsive Event Website",
    description: "Figma, UI/UX, Responsive",
    url: "https://www.behance.net/gallery/185133781/Responsive-Event-Website",
  },
  {
    image: "/images/gcu-student-app.png",
    name: "GCU Student App Redesign",
    description: "Figma, UI/UX, Prototyping",
    url: "https://www.behance.net/gallery/185136569/Grand-Canyon-University-Student-App-Redesign",
  },
]);
const frontendProjects = ref([
  {
    image: "/images/personal-portfolio.png",
    name: "Personal Portfolio",
    description: "Vue, HTML, CSS",
    url: "https://github.com/Jugooch/jugooch.github.io",
  },
  {
    image: "/images/gcu-student-app.png",
    name: "GCU Student App Redesign",
    description: "Flutter",
    url: "https://github.com/Jugooch/gcu_student_app",
  },
]);
const backendProjects = ref([
  {
    image: "/images/minesweeper.PNG",
    name: "Minesweeper Online",
    description: "C#, .NET Core",
    url: "https://github.com/Jugooch/Milestone-CST350",
  },
  {
    image: "/images/friendzone.png",
    name: "FriendZone Social media",
    description: "Java, Spring Boot, Rest API",
    url: "https://github.com/Jugooch/FriendZone",
  },
  {
    image: "/images/umarket.png",
    name: "U-Market Shopping",
    description: "Angular, Spring Boot, Rest API",
    url: "https://github.com/Jugooch/U-Market",
  },
]);
</script>

<template>
  <div style="width: 100%; background-color: #1b1725">
    <div class="page-container">
      <header id="top">
        <navbar />
      </header>
      <div class="vertical-spacing"></div>
      <main>
        <div class="hero-row">
          <!-- Container on the left -->
          <div id="hero-content" class="hero-content-container">
            <div style="display: flex; align-items: center">
              <h1 style="font-weight: normal">Hi, I'm</h1>
              <div style="width: 16px"></div>
              <div
                style="
                  background-color: #226ce0;
                  padding: 8px;
                  height: fit-content;
                "
              >
                <h1>Justice Gooch</h1>
              </div>
            </div>
            <!-- Your content goes here -->
            <h3>Frontend Developer | UI Designer</h3>
            <div style="height: 64px"></div>
            <div style="display: flex; align-items: center; flex-wrap: wrap">
              <button class="btn-primary" v-on:click="scrollTo('contact');">Contact</button>
              <button class="btn-secondary" v-on:click="downloadPDF()">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <download />
                  <div style="width: 8px"></div>
                  Download Resume
                </div>
              </button>
            </div>
          </div>

          <!-- Imported component on the right -->
          <div class="background">
            <backgroundRightToLeft />
          </div>
          <div></div>
        </div>
        <div id="about">
          <h2>&lt;ABOUT ME&gt;</h2>
          <div class="vertical-spacing"></div>
          <div class="about-me">
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/justicegooch/"
                ><Linkedin
              /></a>
              <a href="https://www.behance.net/justicegooch"><Behance /></a>
              <a href="mailto:justicegooch@hotmail.com"><Email /></a>
              <a href="https://github.com/Jugooch"><Github /></a>
            </div>
            <div class="social-divider"></div>
            <div class="reactive-section">
              <p style="font-size: 20px; color: white">
                My name is Justice Gooch, and I am currently enrolled as a
                full-time student at Grand Canyon University. I am currently a
                senior, so I am looking for a job in either front end
                development or product design for when I graduate! These fields
                both interest me greatly, and I want to apply the skills I’ve
                learned throughout college to help the development team I join
                in any way I can. Thank you for your consideration!
              </p>
            </div>
          </div>
        </div>
        <div class="vertical-spacing"></div>
        <backgroundRightToLeft :is-flipped="true" />
        <div id="portfolio">
          <h2 align="right">&lt;PORTFOLIO&gt;</h2>
          <div class="vertical-spacing"></div>
          <div
            style="
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            "
          >
            <div class="portfolio-card" :class="{'portfolio-card-active': isUI}" v-on:click="currentTab = 1; setActive();">
              <div align="center" style="width: 100%">
                <img
                  src="./assets/images/ui-design.png"
                  alt="Design"
                  width="48"
                  height="48"
                />
                <div style="height: 48px"></div>
                <h1 style="font-weight: normal">UI Design</h1>
                <div style="height: 48px"></div>
                <div>
                  <p
                    style="
                      color: white;
                      font-weight: lighter;
                      margin: 0px;
                      font-size: 20px;
                    "
                  >
                    {{ uiSkills.length }} Skills
                  </p>
                  <div style="height: 16px"></div>
                  <p
                    style="
                      color: white;
                      font-weight: lighter;
                      margin: 0px;
                      font-size: 20px;
                    "
                  >
                    {{ uiProjects.length }} Projects
                  </p>
                </div>
              </div>
            </div>
            <div class="portfolio-card" :class="{'portfolio-card-active': isFrontend}" v-on:click="currentTab = 2; setActive();">
              <div align="center" style="width: 100%">
                <img
                  src="./assets/images/frontend.png"
                  alt="frontend"
                  height="48"
                />
                <div style="height: 48px"></div>
                <h1 style="font-weight: normal">Frontend</h1>
                <div style="height: 48px"></div>
                <div>
                  <p
                    style="
                      color: white;
                      font-weight: lighter;
                      margin: 0px;
                      font-size: 20px;
                    "
                  >
                    {{ frontendSkills.length }} Skills
                  </p>
                  <div style="height: 16px"></div>
                  <p
                    style="
                      color: white;
                      font-weight: lighter;
                      margin: 0px;
                      font-size: 20px;
                    "
                  >
                    {{ frontendProjects.length }} Projects
                  </p>
                </div>
              </div>
            </div>
            <div class="portfolio-card" :class="{'portfolio-card-active': isBackend}" v-on:click="currentTab = 3; setActive();">
              <div align="center" style="width: 100%">
                <img
                  src="./assets/images/backend.png"
                  alt="Coding"
                  width="48"
                  height="48"
                />
                <div style="height: 48px"></div>
                <h1 style="font-weight: normal">Backend</h1>
                <div style="height: 48px"></div>
                <div>
                  <p
                    style="
                      color: white;
                      font-weight: lighter;
                      margin: 0px;
                      font-size: 20px;
                    "
                  >
                    {{ backendSkills.length }} Skills
                  </p>
                  <div style="height: 16px"></div>
                  <p
                    style="
                      color: white;
                      font-weight: lighter;
                      margin: 0px;
                      font-size: 20px;
                    "
                  >
                    {{ backendProjects.length }} Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 64px"></div>
          <h1>Skills</h1>
          <div
            style="
              width: 100%;
              height: 4px;
              margin-top: 8px;
              background-color: #226ce0;
            "
          ></div>
          <div v-if="currentTab == 1" 
            class="skill-wrap">
            <div class="skill-pill" v-for="skill in uiSkills">
              <p style="font-size: 20px; font-weight: 400; color: white">
                {{ skill }}
              </p>
            </div>
          </div>
          <div
            v-else-if="currentTab == 2"
            class="skill-wrap"
          >
            <div class="skill-pill" v-for="skill in frontendSkills">
              <p style="font-size: 20px; font-weight: 400; color: white">
                {{ skill }}
              </p>
            </div>
          </div>
          <div
            class="skill-wrap"
            v-else-if="currentTab == 3"
          >
            <div class="skill-pill" v-for="skill in backendSkills">
              <p style="font-size: 20px; font-weight: 400; color: white">
                {{ skill }}
              </p>
            </div>
          </div>
          <div style="height: 64px"></div>
          <h1>Projects</h1>
          <div
            style="
              width: 100%;
              height: 4px;
              margin-top: 8px;
              margin-bottom: 16px;
              background-color: #226ce0;
            "
          ></div>
          <div
            v-if="currentTab == 1"
            style="
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              justify-content: space-evenly;
            "
          >
            <div v-for="project in uiProjects">
              <a
                :href="project.url"
                target="_blank"
                style="text-decoration: none"
              >
                <div class="project-card">
                  <div style="width: 100%; height: 264px">
                    <img
                      :src="project.image"
                      class="image-fit"
                      alt="Project Image"
                    />
                  </div>
                  <p style="font-size: 20px; font-weight: bold; color: white">
                    {{ project.name }}
                  </p>
                  <p
                    style="font-size: 20px; font-weight: lighter; color: white"
                  >
                    {{ project.description }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div
            v-else-if="currentTab == 2"
            style="
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              justify-content: space-evenly;
            "
          >
            <div v-for="project in frontendProjects">
              <a
                :href="project.url"
                target="_blank"
                style="text-decoration: none"
              >
                <div class="project-card">
                  <div style="width: 100%; height: 264px">
                    <img
                      :src="project.image"
                      class="image-fit"
                      alt="Project Image"
                    />
                  </div>
                  <p style="font-size: 20px; font-weight: bold; color: white">
                    {{ project.name }}
                  </p>
                  <p
                    style="font-size: 20px; font-weight: lighter; color: white"
                  >
                    {{ project.description }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div
            v-else-if="currentTab == 3"
            style="
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              justify-content: space-evenly;
            "
          >
            <div v-for="project in backendProjects">
              <a
                :href="project.url"
                target="_blank"
                style="text-decoration: none"
              >
                <div class="project-card">
                  <div style="width: 100%; height: 264px">
                    <img
                      :src="project.image"
                      class="image-fit"
                      alt="Project Image"
                    />
                  </div>
                  <p style="font-size: 20px; font-weight: bold; color: white">
                    {{ project.name }}
                  </p>
                  <p
                    style="font-size: 20px; font-weight: lighter; color: white"
                  >
                    {{ project.description }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="vertical-spacing"></div>
        <backgroundRightToLeft />
        <div id="contact">
          <h2>&lt;CONTACT&gt;</h2>
          <div style="height: 64px"></div>
          <div class="about-me">
            <form id="contact-form" class="reactive-section"  ref="form" @submit.prevent="sendEmail('contact-form')">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  flex-wrap: wrap;
                "
              >
                <input
                  id="firstName" name="firstName"
                  class="input26"
                  placeholder="First Name"
                  required
                />
                <input id="lastName" name="lastName" class="input26" placeholder="Last Name" required/>
                <input id="company" name="company" class="input26" placeholder="Company" />
                <input
                  id="phone"
                  name="phone"
                  class="input26"
                  v-model="phone"
                  placeholder="Phone"
                  v-on:input="acceptNumber()"
                />
                <input id="email" name="email" class="input63" placeholder="Email" type="email" required/>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message Here..."
                  style="width: 100%; height: 80px; padding: 0px"
                ></textarea>
                <button class="btn-primary" style="margin-bottom: 64px" type="submit">
                  Send Message
                </button>
              </div>
            </form>
            <div class="social-divider" style="margin-bottom: 16px;"></div>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/justicegooch/"
                ><Linkedin
              /></a>
              <div class="social-spacing"></div>
              <a href="https://www.behance.net/justicegooch"><Behance /></a>
              <div class="social-spacing"></div>
              <a href="mailto:justicegooch@hotmail.com"><Email /></a>
              <div class="social-spacing"></div>
              <a href="https://github.com/Jugooch"><Github /></a>
            </div>
          </div>
        </div>
      <div class="vertical-spacing"></div>
      </main>
      <footer>
        <div class="footer">
          <div class="logo">
            <logo />
          </div>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <button class="link" style="margin-bottom: 16px;" v-on:click="scrollTo('about')">About</button>
            <button class="link" style="margin-bottom: 16px;" v-on:click="scrollTo('portfolio')">Portfolio</button>
            <button class="link"  v-on:click="scrollTo('contact')">Contact</button>
          </div>
          <div>
            <button class="link" v-on:click="scrollTo('top')">^Back To Top</button>
          </div>
        </div>
      </footer>
      <div style="height: 64px;"></div>
    </div>
  </div>
</template>

<style scoped>

.link{
    border: none;
    background-color: #1b1725;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
  }
  
.skill-wrap{
  display: flex; 
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

a{
  color: white;
  text-decoration: none;
}

.logo img {
  max-width: 48px; /* Adjust based on your design */
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reactive-section {
  width: 100%;
}

input, textarea {
  background-color: #1b1725;
  border: none;
  border-bottom: 2px solid white;
  padding: 8px;
  color: white;
  margin-bottom: 32px;
}

.input26 {
  width: 100%;
}

.input63 {
  width: 100%;
}

.image-fit {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.project-card {
  width: 320px;
  height: 400px;
  background-color: #2e273f;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  cursor: pointer;
}

.skill-pill {
  width: 224px;
  height: 56px;
  border-radius: 28px;
  background-color: #2e273f;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
}

.portfolio-card {
  width: 320px;
  height: 400px;
  background-color: #2e273f;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  cursor: pointer;
}

.portfolio-card-active {
  background-color: #226ce0;
}

.portfolio-card:hover {
  background-color: #5c4e7e;
}

.portfolio-card-active:hover {
  background-color: #226ce0;
}

.social-divider {
  height: 4px;
  width: 100%;
  background-color: #226ce0;
}

.vertical-spacing {
  height: 64px;
}

.social-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
}

.social-spacing {
  height: 0px;
  width: 24px;
}

.about-me {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn-primary {
  border: 2px solid white;
  width: 100%;
  padding: 16px;
  background-color: #1b1725;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 64px;
  margin-right: 0px;
  cursor: pointer;
}

.btn-secondary {
  background-color: #1b1725;
  width: 100%;
  color: white;
  font-size: 20px;
  font-weight: 400;
  border: 0;
  cursor: pointer;
}

h1 {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
}

h2 {
  font-size: 32px;
  margin: 0px;
  color: #2e273f;
}

h3 {
  color: #5c4e7e;
  font-size: 20px;
  font-weight: lighter;
  margin: 0px;
}
.hero-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Space items evenly, pushing the right item to the right edge */
  position: relative; /* Set the relative positioning on the parent */
  height: 100%;
}

.hero-content-container {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.background {
  width: 100%;
  margin-top: 32px;
}

/* Default styles for mobile screens (and up) */
.page-container {
  margin-left: 5vw; /* Adjust based on your design */
  margin-right: 5vw;
}

/* Media queries for tablets and larger screens */
@media screen and (min-width: 768px) {
  .page-container {
    margin-left: 8vw;
    margin-right: 8vw;
  }

  h1 {
    color: white;
    font-size: 40px;
    font-weight: bold;
    margin: 0px;
  }

  h2 {
    font-size: 96px;
    margin: 0px;
    color: #2e273f;
  }

  h3 {
    color: #5c4e7e;
    font-size: 32px;
    font-weight: lighter;
    margin: 0px;
  }

  .btn-primary {
    border: 2px solid white;
    width: 184px;
    padding: 16px;
    background-color: #1b1725;
    color: white;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 0px;
    margin-right: 64px;
  }

  .btn-secondary {
    background-color: #1b1725;
    width: fit-content;
    color: white;
    font-size: 20px;
    font-weight: 400;
    border: 0;
  }

  .about-me {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .social-icons {
    flex-direction: column;
    height: 320px;
  }

  .social-spacing {
    width: 0px;
    height: 48px;
  }

  .vertical-spacing {
    height: 128px;
  }

  .social-divider {
    height: 320px;
    width: 4px;
  }

  .input26 {
    width: 26%;
  }

  .input63 {
    width: 63%;
  }

  .reactive-section {
    width: 70%;
  }

  .skill-wrap{
    display: flex; 
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: left;
  }
}

@media screen and (min-width: 992px) {
  .page-container {
    margin-left: 10vw;
    margin-right: 10vw;
  }
}

@media screen and (min-width: 1200px) {
  .page-container {
    margin-left: 12vw;
    margin-right: 12vw;
  }

  .hero-content-container {
    width: 40%;
  }
  .background {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    margin-top: 0px;
  }
}
</style>
