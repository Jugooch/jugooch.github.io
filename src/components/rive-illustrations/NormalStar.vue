<template>
  <canvas :id="starId" class="star-canvas" width="18" height="18"></canvas>
</template>

<script setup>

import * as rive from "@rive-app/canvas";
import {onMounted} from "vue";

const props = defineProps({
  starId: {
    type: String,
    required: true,
  }
});

onMounted(() => {
  const r = new rive.Rive({
    src: 'src/assets/rive/portfolio.riv',
    canvas: document.getElementById(this.props.starId),
    autoplay: true,
    artboard: "Normal Star",
    animations: ["Timeline 1"],
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });
})

</script>

<style scoped>
  .star-canvas {
    width: 18px;
    height: 18px;
  }
</style>