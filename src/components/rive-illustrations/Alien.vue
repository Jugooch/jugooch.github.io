<template>
  <canvas id="riveAlien" width="125" height="174"></canvas>
</template>

<script setup>

import * as rive from "@rive-app/canvas";
import {onMounted} from "vue";

onMounted(() => {
  const r = new rive.Rive({
    src: 'src/assets/rive/portfolio.riv',
    canvas: document.getElementById("riveAlien"),
    autoplay: true,
    artboard: "Alien",
    animations: ["Timeline 1"],
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });
})


</script>