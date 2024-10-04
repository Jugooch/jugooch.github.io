<template>
  <div class="hero-container projects">
    <navbar />
    <h1 class="highlight mt-5">Projects</h1>
    <div class="blackhole-container">
      <BlackHole class="blackhole" />
    </div>

    <div class="projects-container d-flex flex-column">
      <div class="container col-10 col-md-8 mt-5">
        <div class="row flex-wrap">
          <div class="col-md-5 col-lg-6 col-12 mb-4"><img src="../assets/images/me.png" class="img-fluid hero-img"/></div>
          <div class="col-md-1 col-lg-1 d-none d-md-block"></div>
          <div class="d-flex flex-column col-md-6 col-lg-5 col-sm-12 gap-4 justify-content-md-center align-items-center align-items-md-start">
            <div class="d-flex gap-4">
              <LinkedIn />
              <Github />
              <Indeed />
              <Instagram />
            </div>
            <h4>My Skills Displayed</h4>
            <p>Explore my portfolio showcasing all my major work done in both Software Development and UI Design!
              <br />
              <br />
              Each of my projects below has its own separate page with more information if you would like to learn
              more about the processes I used to create them
            </p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
  <div class="vertical-spacing"></div>
  <div class="container d-flex flex-column gap-5 align-items-center col-10">
    <div class="d-flex gap-4 gap-lg-5 flex-wrap justify-content-center">
      <div v-for="item in projects">
        <ProjectCard :project="item" />
      </div>
    </div>
  </div>
</template>

<script setup>

import Navbar from "./navbar.vue";
import BlackHole from "./static-illustrations/BlackHole.vue";
import ProjectCard from "./subcomponents/ProjectCard.vue";

import { ref, onMounted } from 'vue';
import Indeed from "./icons/indeed.vue";
import Instagram from "./icons/instagram.vue";
import Github from "./icons/github.vue";
import LinkedIn from "./icons/linkedin.vue";

const projects = ref([]);

onMounted(async () => {
  projects.value = await fetchJSON('src/assets/data/projects.json');
});

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

.projects {
  text-align: center;
  height: 100%;
}

.blackhole-container {
  position: absolute;
  top: 16px;
  right: 64px;
}

.blackhole {
  width: 100%;
  height: auto;
  max-width: 600px;
  object-fit: contain;
}

@media(max-width: 1100px){
  .blackhole-container {
    width: 60%;
    right: 0px;
  }
}

@media(max-width: 950px){
  .blackhole-container {
    right: -64px;
  }
}

@media(max-width: 850px){
  .blackhole-container {
    z-index: -1;
  }
}

@media(max-width: 550px){
  .blackhole-container {
    right: -120px;
    z-index: -1;
  }
}

.projects-container {
  text-align: start;
  height: 100%;
}


@media(max-width: 668px){
  .projects {
    height: 100vh;
  }

  .projects-container {
    text-align: center;
  }
}
</style>