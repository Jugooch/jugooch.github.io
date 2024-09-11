<template>
  <div class="hero-container about-container d-flex flex-column justify-content-between">
    <navbar />
    <Spaceship2 class="hero-top-right spaceship" />
    <!--About me Section-->
    <div class="about-me d-flex flex-column align-items-center">
      <h1 class="highlight">About Me</h1>
      <div class="container col-8 mt-5">
        <div class="row flex-wrap">
          <div class="col-md-6 col-lg-6 col-sm-12 mb-4"><img src="../assets/images/me.png" class="img-fluid about-img"/></div>
          <div class="col-md-1 col-lg-1 d-none d-md-block"></div>
          <div class="d-flex flex-column col-md-5 col-lg-5 col-sm-12 gap-4 align-items-center align-items-md-start">
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

// Skills Data
var skills = [
  {
    'title': "HTML",
    'image': "src/assets/images/skills-logos/html.png"
  },
  {
    'title': "CSS",
    'image': "src/assets/images/skills-logos/css.png"
  },
  {
    'title': "JavaScript",
    'image': "src/assets/images/skills-logos/js.png"
  },
  {
    'title': "Vue.js",
    'image': "src/assets/images/skills-logos/vue.png"
  },
  {
    'title': "Figma",
    'image': "src/assets/images/skills-logos/figma.png"
  },
  {
    'title': "C#",
    'image': "src/assets/images/skills-logos/csharp.png"
  },
  {
    'title': "Java",
    'image': "src/assets/images/skills-logos/java.png"
  },
  {
    'title': "Azure",
    'image': "src/assets/images/skills-logos/azure.png"
  },
  {
    'title': "Jira",
    'image': "src/assets/images/skills-logos/jira.png"
  },
  {
    'title': "Git",
    'image': "src/assets/images/skills-logos/git.png"
  },
  {
    'title': "Rive",
    'image': "src/assets/images/skills-logos/rive.png"
  },
  {
    'title': "Adobe",
    'image': "src/assets/images/skills-logos/adobe.png"
  },
  {
    'title': "Flutter",
    'image': "src/assets/images/skills-logos/Flutter.png"
  },
]

// Experience Data
var experience = [
  {
    'title': "Reynolds and Reynolds",
    'image': "src/assets/images/experience-logos/reynolds.png",
    'dateRange': "August 2024 to Current",
    'position': "Full-stack Software Developer",
    'content': ["Contributed to the development of Auto Vision, a web application designed for car dealerships to view, track, and sell cars.", "Utilized C# for backend development and Vue.js for frontend development to build APIs and Web Applications.", "Collaborated with the team through code reviews and standups to debug and continuously improve the application."]
  },
  {
    'title': "ClearStack AI",
    'image': "src/assets/images/experience-logos/clearstack.png",
    'dateRange': "May 2024 to Current",
    'position': "UI Designer and Developer",
    'content': ["Interfaced directly with clients to gather requirements and understand their design needs.", "Utilized Figma to create, iterate and refine user interfaces as guidelines for the front end developers.", "Developed front-end code for full-stack applications using Vue.JS and Flutter while contributing to organizations CI/CD pipeline."]
  },
  {
    'title': "Kinective",
    'image': "src/assets/images/experience-logos/kinective.png",
    'dateRange': "October 2022 to August 2023",
    'position': "Software Development Intern",
    'content': ["Used Vue and Wicket to build internal tools that increased productivity within the company by over 20%.", "Followed the Agile Methodology using tools like Jira and Confluence to organize and achieve deadlines efficiently.", "Worked alongside the front-end and UI/UX team to help create a design system for the company."]
  },
];

// Education Data
var education = [
  {
    'title': "Grand Canyon University",
    'image': "src/assets/images/education-logos/gcu.png",
    'dateRange': "August 2021 to April 2024",
    'degrees': ["Software Development", "Web Design"],
    'courses': ["Front-End Web Development", "C# I, II, & III", "Java I, II, & III", "Databases", "Web Design I & II", "UI/UX Design"],
    'achievements': ["Graduated Summa Cum Laude with 4.0"],
  },
  {
    'title': "Hill College",
    'image': "src/assets/images/education-logos/hill.png",
    'dateRange': "August 2020 to May 2021",
    'degrees': ["Computer Science"],
    'courses': ["C++ I & II", "Algorithms and Data Structures", "Assembly"],
    'achievements': ["Graduated Honors with a 3.8", "Received academic scholarships and a baseball scholarship"],
  },
];
</script>

<style scoped>
.spaceship {
  width: 40%;
}
@media(max-width: 770px){
  .about-container {
    text-align: center;
    height: auto;
  }
}


.about-img {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
}
</style>