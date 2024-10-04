<template>
  <div class="page-container">
    <!-- Canvas Background -->
    <canvas ref="spaceCanvas" class="background-canvas"></canvas>

    <!-- Rive Stars Containers -->
    <div class="stars-container">
      <div class="normal-stars">
        <NormalStar v-for="star in normalStars" :key="star.id" :star-id="star.id" :style="{ top: star.y + 'px', left: star.x + 'px' }" />
      </div>
      <div class="purple-stars">
        <PurpleStar v-for="star in purpleStars" :key="star.id" :star-id="star.id" :style="{ top: star.y + 'px', left: star.x + 'px' }" />
      </div>
      <div class="orange-stars">
        <OrangeStar v-for="star in orangeStars" :key="star.id" :star-id="star.id" :style="{ top: star.y + 'px', left: star.x + 'px' }" />
      </div>
    </div>

    <!-- Overlaying Content -->
    <div class="content-overlay">
      <main>
        <!-- This router view shows the main pages (Created in router/index.js) -->
        <router-view />
      </main>
      <footer>
        <!-- Vertical Spacing -->
        <div class="vertical-spacing"></div>
        <div class="vertical-spacing"></div>
        <!-- Footer -->
        <div class="container d-flex flex-column gap-4 col-6 align-items-center">
          <div class="d-flex gap-4">
            <LinkedIn />
            <Github />
            <Indeed />
            <Instagram />
          </div>
          <p>Created by <b>Justice Gooch</b></p>
          <Earth />
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

// Icons
import Github from "./components/icons/github.vue";
import LinkedIn from "./components/icons/linkedin.vue";
import Indeed from "./components/icons/indeed.vue";
import Instagram from "./components/icons/instagram.vue";

// Illustrations
import Earth from "./components/static-illustrations/Earth.vue";
import PurpleStar from "./components/rive-illustrations/PurpleStar.vue";
import NormalStar from "./components/rive-illustrations/NormalStar.vue";
import OrangeStar from "./components/rive-illustrations/OrangeStar.vue";

// Refs for normal, purple, and orange stars
let starIds = [];
const normalStars = ref([]);
const purpleStars = ref([]);
const orangeStars = ref([]);

const spaceCanvas = ref(null);

onMounted(() => {
  const canvas = spaceCanvas.value;
  const ctx = canvas.getContext('2d');

  // Function to adjust canvas size and stars-container dynamically
  function adjustSizes() {
    // Set canvas width and height to match the full page, including any scrollable content
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;

    // Adjust the stars-container height to match the body height as well
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
      starsContainer.style.height = `${document.body.scrollHeight}px`;
    }
  }

  // Handle window resize
  window.addEventListener("resize", () => {
    // Set canvas width and height to match the content height
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;
    // Redraw stars on resize
    drawStars();
    generateStars();
  });

  function generateUniqueId() {
    let id = 'star-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    if(starIds.includes(id)){
      return generateUniqueId();
    }
    else{
      starIds.push(id);
      return id;
    }
  }

  // Function to draw background stars
  function drawStars() {
    const numberOfStars = 200;
    // Clear the canvas before drawing again
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < numberOfStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.5;
      const alpha = Math.random();

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();
    }
  }

  // Function to generate star positions for each category
  function generateStars() {
    function generateStarCoordinates(count) {
      const starsArray = [];
      for (let i = 0; i < count; i++) {
        starsArray.push({
          id: generateUniqueId(),
          x: Math.random() * document.body.scrollWidth,
          y: Math.random() * document.body.scrollHeight,
        });
      }
      return starsArray;
    }

    // Populate the stars arrays
    normalStars.value = generateStarCoordinates(90);
    purpleStars.value = generateStarCoordinates(15);
    orangeStars.value = generateStarCoordinates(15);
  }

  // Initial drawing of stars and generation of Rive stars
  adjustSizes();
  drawStars();
  generateStars();

    // Handle window resize
    window.addEventListener('resize', () => {
    adjustSizes();
    drawStars();
    generateStars();
  });

  // Listen for content changes dynamically with ResizeObserver
  const resizeObserver = new ResizeObserver(() => {
    adjustSizes();
    drawStars();
    generateStars();
  });
  
  // Watch for changes in the body content size
  resizeObserver.observe(document.body); 

});
</script>

<style scoped>
.page-container {
  position: relative;
  overflow: hidden;
}

.background-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;

  pointer-events: none;
}

.normal-stars,
.purple-stars,
.orange-stars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.content-overlay {
  position: relative;
  z-index: 2;
}
</style>