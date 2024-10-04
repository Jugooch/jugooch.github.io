<template>
  <div class="hero-container about-container">
    <navbar />
    <h1 class="highlight mt-5">About Me</h1>
    <Spaceship2 class="hero-top-right spaceship" />
    <!--About me Section-->
    <div class="about-me d-flex flex-column">
      <div class="container col-10 col-md-8 mt-5">
        <div class="row flex-wrap">
          <div class="col-md-5 col-lg-6 col-12 mb-4"><img src="../assets/images/me.png" class="img-fluid hero-img"/></div>
          <div class="col-md-1 col-lg-1 d-none d-md-block"></div>
          <div class="d-flex flex-column col-md-6 col-lg-5 col-sm-12 gap-4 align-items-center justify-content-md-center align-items-md-start">
            <div class="d-flex gap-4">
              <LinkedIn />
              <Github />
              <Indeed />
              <Instagram />
            </div>
            <h4>My name is Justice Gooch</h4>
            <p>I am a Software developer and UI designer who graduated from Grand Canyon University in 2024. Since then, I
              have held full-time and contract positions outlined in the experience section below.
              <br />
              <br />
              My focus when creating applications has been on retaining users. I want users to look at the product I have
              created and think to themselves “Wow! That was a great experience, I can’t wait to use XYZ again!”. </p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
  <!--Vertical Spacing-->
  <div class="vertical-spacing"></div>
  <!--Skills Section-->
  <div class="container d-flex flex-column gap-5 align-items-center col-8">
    <div class="d-flex gap-4">
      <TitlePlanet />
      <h4>My Skills</h4>
    </div>
    <div class="d-flex gap-4 flex-wrap justify-content-center">
      <div v-for="skill in skills">
        <SkillsCard :title="skill.title" :image="skill.image"/>
      </div>
    </div>
  </div>
  <!--Vertical Spacing-->
  <div class="vertical-spacing"></div>
  <!--Experience Section-->
  <div class="container d-flex flex-column gap-5 align-items-center col-10">
    <div class="d-flex gap-4">
      <TitlePlanet />
      <h4>My Experience</h4>
    </div>
    <div class="d-flex gap-4 flex-wrap justify-content-center">
      <div v-for="item in experience">
        <ExperienceCard :title="item.title" :image="item.image" :dateRange="item.dateRange" :position="item.position" :content="item.content"/>
      </div>
    </div>
  </div>
  <!--Vertical Spacing-->
  <div class="vertical-spacing"></div>
  <!--Education Section-->
  <div class="container d-flex flex-column gap-5 align-items-center col-8">
    <div class="d-flex gap-4">
      <TitlePlanet />
      <h4>My Education</h4>
    </div>
    <div class="d-flex gap-4 flex-wrap justify-content-center">
      <div v-for="school in education">
        <EducationCard :title="school.title" :image="school.image" :degrees="school.degrees" :achievements="school.achievements" :courses="school.courses" :dateRange="school.dateRange"/>
      </div>
    </div>
  </div>
</template>

<script setup>

import Spaceship2 from "./static-illustrations/Spaceship2.vue";
import TitlePlanet from "./static-illustrations/TitlePlanet.vue";
import Navbar from "./navbar.vue";
import SkillsCard from "./subcomponents/SkillsCard.vue";
import ExperienceCard from "./subcomponents/ExperienceCard.vue";
import EducationCard from "./subcomponents/EducationCard.vue";
import Instagram from "./icons/instagram.vue";
import LinkedIn from "./icons/linkedin.vue";
import Indeed from "./icons/indeed.vue";
import Github from "./icons/github.vue";

import {ref, onMounted, computed} from 'vue';

// Create a ref to hold the skills data
const skills = ref([]);
const experience = ref([]);
const education = ref([]);
const isLoading = ref(true);

// Fetch the JSON data and stop loading once we get it
onMounted(async () => {
  try {
    skills.value = await fetchJSON('src/assets/data/skills.json');
    experience.value = await fetchJSON('src/assets/data/experience.json');
    education.value = await fetchJSON('src/assets/data/education.json');
  } finally {
    isLoading.value = false;
  }
});

const loading = computed(() => {
  return this.isLoading.value;
})

// Function to fetch data from JSON files
async function fetchJSON(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const ret = await response.json();
    return ret;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}
</script>

<style scoped>
.about-container {
  text-align: center;
  height: 100%;
}

.spaceship {
  width: 40%;
}

.about-me {
  text-align: start;
}

@media(max-width: 668px){
  .about-container {
    height: 100vh;
  }

  .about-me {
    text-align: center;
  }
}
</style>