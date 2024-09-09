<template>
  <div class="card-wrapper" @click="toggleFlip">
    <div :class="['card', { 'is-flipped': flipped }]">
      <div class="card-face card-large card-back d-flex flex-column gap-4 align-items-center justify-content-center">
        <img width="80" :src="props.image" />
        <h4>{{ props.title }}</h4>
        <ul>
          <li v-for="item in props.content" :key="item" class="small">{{ item }}</li>
        </ul>
      </div>
      <div class="card-face card-large card-front d-flex flex-column gap-4 align-items-center justify-content-center">
        <img width="80" :src="props.image" />
        <h4>{{ props.title }}</h4>
        <p>{{ props.dateRange }}</p>
        <p>{{ props.position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps(['title', 'image', 'dateRange', 'position', 'content'])

  const flipped = ref(false);

  function toggleFlip() {
    flipped.value = !flipped.value;
  }

</script>