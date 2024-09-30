<template>
  <canvas id="riveMoonOrbit" width="600" height="360"></canvas>
</template>

<script setup>

import * as rive from "@rive-app/canvas";
import {onMounted} from "vue";

onMounted(() => {
  const r = new rive.Rive({
    src: 'src/assets/rive/portfolio.riv',
    canvas: document.getElementById("riveMoonOrbit"),
    autoplay: true,
    artboard: "Moon Orbit",
    animations: ["Timeline 1"],
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });
})

</script>