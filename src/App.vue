<template>
  <div class="page-container">
    <!-- Canvas Background -->
    <canvas ref="spaceCanvas" class="background-canvas"></canvas>

    <!-- Overlaying Content -->
    <div class="content-overlay">
      <div class="hero-container">
      <header>
        <navbar />
      </header>
      <div></div>
    </div>
      <main>
        <!-- Your main content (projects, etc.) goes here -->
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Navbar from "./components/navbar.vue";
// Import other components as needed

const spaceCanvas = ref(null);

onMounted(() => {
  const canvas = spaceCanvas.value;
  const ctx = canvas.getContext("2d");
  
  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Handle window resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Redraw stars on resize
    drawStars(); 
  });

  // Function to draw background stars
  function drawStars() {
    const numberOfStars = 100;
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

  // Initial drawing of stars
  drawStars();
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

.hero-container {
  height: 100vh;
  width: 100%;
}

.content-overlay {
  position: relative;
  z-index: 1;
}
</style>
