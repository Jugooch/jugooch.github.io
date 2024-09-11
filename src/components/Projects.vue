<template>
  <div class="hero-container d-flex flex-column justify-content-between">
    <navbar />
    <div class="blackhole-container">
      <BlackHole class="blackhole" />
    </div>
    <!--Projects Section-->
    <div class="projects-container">
      <div class="projects-content col-8">
        <h1 class="highlight">My Projects</h1>
        <div class="d-flex justify-content-between align-items-center mt-5">
          <div class="col-3 d-flex flex-column gap-4">
            <img src="../assets/images/Summit.png" alt="Project 1" class="project-img" />
            <img src="../assets/images/Kue.png" alt="Project 2" class="project-img" />
          </div>
          <div class="col-lg-2 col-md-3 d-flex flex-column gap-2">
            <h4>My skills displayed</h4>
            <p class="projects-description">
              Explore my portfolio showcasing all my major work done in both Software Development and UI Design!
            </p>
          </div>
          <div class="col-3 d-flex flex-column gap-4">
            <img src="../assets/images/OfficerPrivacy.png" alt="Project 3" class="project-img" />
            <img src="../assets/images/GCUApp.png" alt="Project 4" class="project-img" />
          </div>
        </div>
      </div>

    </div>
    <div></div>
  </div>
  <div class="container d-flex flex-column gap-5 align-items-center col-10">
    <div class="d-flex gap-4 flex-wrap justify-content-center">
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

var projects = [
  {
    'title': "University Student App",
    'image': "src/assets/images/GCUApp.png",
    'url': "",
    'github': "https://github.com/Jugooch/gcu_student_app",
    'header': "This project is a mobile application created for my University’s Capstone Showcase. It was a re-envisioned version of the student application that user’s used on the daily",
    'description': "This Application is a redesign of Grand Canyon University's (GCU's) mobile student application. The point of this redesign was to condense the amount of applications that GCU students have to download. As of right now, students download upwards of 8 to 9 applications to do various GCU-related tasks; this app shrinks that down to 1. The problem's students had with downloading so many apps is the amount of space it took up on their device, and the poor user experience that was related to moving between multiple applications just to do small everyday tasks. This app reduces the amount of space taken up, and also improves that user experience by keeping everything important for every-day life in one location. It utilizes Flutter as a frontend framework to support use across different platforms and is designed based on an entire UI/UX case study done on current GCU students."
  },
  {
    'title': "National Geographic Redesign",
    'image': "src/assets/images/GCUApp.png",
    'url': "",
    'github': "",
    'header': "This project is a mobile application created for my University’s Capstone Showcase. It was a re-envisioned version of the student application that user’s used on the daily",
    'description': "This Application is a redesign of Grand Canyon University's (GCU's) mobile student application. The point of this redesign was to condense the amount of applications that GCU students have to download. As of right now, students download upwards of 8 to 9 applications to do various GCU-related tasks; this app shrinks that down to 1. The problem's students had with downloading so many apps is the amount of space it took up on their device, and the poor user experience that was related to moving between multiple applications just to do small everyday tasks. This app reduces the amount of space taken up, and also improves that user experience by keeping everything important for every-day life in one location. It utilizes Flutter as a frontend framework to support use across different platforms and is designed based on an entire UI/UX case study done on current GCU students."
  },
  {
    'title': "National Geographic Redesign",
    'image': "src/assets/images/GCUApp.png",
    'url': "",
    'github': "",
    'header': "This project is a mobile application created for my University’s Capstone Showcase. It was a re-envisioned version of the student application that user’s used on the daily",
    'description': "This Application is a redesign of Grand Canyon University's (GCU's) mobile student application. The point of this redesign was to condense the amount of applications that GCU students have to download. As of right now, students download upwards of 8 to 9 applications to do various GCU-related tasks; this app shrinks that down to 1. The problem's students had with downloading so many apps is the amount of space it took up on their device, and the poor user experience that was related to moving between multiple applications just to do small everyday tasks. This app reduces the amount of space taken up, and also improves that user experience by keeping everything important for every-day life in one location. It utilizes Flutter as a frontend framework to support use across different platforms and is designed based on an entire UI/UX case study done on current GCU students."
  },
  {
    'title': "National Geographic Redesign",
    'image': "src/assets/images/GCUApp.png",
    'url': "",
    'github': "",
    'header': "This project is a mobile application created for my University’s Capstone Showcase. It was a re-envisioned version of the student application that user’s used on the daily",
    'description': "This Application is a redesign of Grand Canyon University's (GCU's) mobile student application. The point of this redesign was to condense the amount of applications that GCU students have to download. As of right now, students download upwards of 8 to 9 applications to do various GCU-related tasks; this app shrinks that down to 1. The problem's students had with downloading so many apps is the amount of space it took up on their device, and the poor user experience that was related to moving between multiple applications just to do small everyday tasks. This app reduces the amount of space taken up, and also improves that user experience by keeping everything important for every-day life in one location. It utilizes Flutter as a frontend framework to support use across different platforms and is designed based on an entire UI/UX case study done on current GCU students."
  },
  {
    'title': "National Geographic Redesign",
    'image': "src/assets/images/GCUApp.png",
    'url': "",
    'github': "",
    'header': "This project is a mobile application created for my University’s Capstone Showcase. It was a re-envisioned version of the student application that user’s used on the daily",
    'description': "This Application is a redesign of Grand Canyon University's (GCU's) mobile student application. The point of this redesign was to condense the amount of applications that GCU students have to download. As of right now, students download upwards of 8 to 9 applications to do various GCU-related tasks; this app shrinks that down to 1. The problem's students had with downloading so many apps is the amount of space it took up on their device, and the poor user experience that was related to moving between multiple applications just to do small everyday tasks. This app reduces the amount of space taken up, and also improves that user experience by keeping everything important for every-day life in one location. It utilizes Flutter as a frontend framework to support use across different platforms and is designed based on an entire UI/UX case study done on current GCU students."
  },
  {
    'title': "National Geographic Redesign",
    'image': "src/assets/images/GCUApp.png",
    'url': "",
    'github': "",
    'header': "This project is a mobile application created for my University’s Capstone Showcase. It was a re-envisioned version of the student application that user’s used on the daily",
    'description': "This Application is a redesign of Grand Canyon University's (GCU's) mobile student application. The point of this redesign was to condense the amount of applications that GCU students have to download. As of right now, students download upwards of 8 to 9 applications to do various GCU-related tasks; this app shrinks that down to 1. The problem's students had with downloading so many apps is the amount of space it took up on their device, and the poor user experience that was related to moving between multiple applications just to do small everyday tasks. This app reduces the amount of space taken up, and also improves that user experience by keeping everything important for every-day life in one location. It utilizes Flutter as a frontend framework to support use across different platforms and is designed based on an entire UI/UX case study done on current GCU students."
  },
]
</script>

<style scoped>
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

.projects-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.projects-content {
  position: relative;
  /* Place content on top of the black hole SVG */
  z-index: 2;
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
</style>