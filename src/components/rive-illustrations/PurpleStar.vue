<template>
  <canvas id="rivePurpleStar" class="star-canvas" width="18" height="18"></canvas>
</template>

<script setup>
import * as rive from "@rive-app/canvas";
import { onMounted } from "vue";

onMounted(() => {
  const r = new rive.Rive({
    src: 'src/assets/rive/portfolio.riv',
    canvas: document.getElementById("rivePurpleStar"),
    autoplay: true,
    artboard: "Purple Star",
    animations: ["Timeline 1"],
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });
});
</script>

<style scoped>
.star-canvas {
  width: 18px;
  height: 18px;
}
</style>