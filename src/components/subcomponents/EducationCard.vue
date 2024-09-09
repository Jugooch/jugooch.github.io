<template>
  <div class="card-wrapper" @click="toggleFlip">
    <div :class="['card', { 'is-flipped': flipped }]">
      <div class="card-face card-large card-back d-flex flex-column gap-4 align-items-center justify-content-center">
        <img width="80" :src="props.image"/>
        <h4>{{props.title}}</h4>
        <div class="gap-2">
          <p>Relevant Coursework:</p>
          <ul>
            <li v-for="item in props.courses" class="small" style="margin-bottom: 4px;">{{item}}</li>
          </ul>
          <p>Achievements:</p>
          <ul>
            <li v-for="item in props.achievements" class="small" style="margin-bottom: 4px;">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="card-face card-large card-front d-flex flex-column gap-4 align-items-center justify-content-center">
        <img width="80" :src="props.image"/>
        <h4>{{props.title}}</h4>
        <p>{{props.dateRange}}</p>
        <p v-if="props.title.includes('Hill')">Associate of the Arts in <b>{{props.degree}}</b></p>
        <div v-else style="text-align: center;">
          <p>Bachelor of Science in <b>{{props.degrees[0]}}</b></p>
          <p>Minor in <b>{{props.degrees[1]}}</b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['title', 'image', 'dateRange', 'degrees', 'courses', 'achievements'])

const flipped = ref(false);

function toggleFlip() {
  flipped.value = !flipped.value;
}

</script>