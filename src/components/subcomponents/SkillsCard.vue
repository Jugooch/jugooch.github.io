<template>
  <div class="d-flex flex-column gap-4 align-items-center justify-content-center card-small">
    <img width="64" :src="props.image" />
    <p style="margin-bottom: 0px">{{ props.title }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'image'])
</script>

<style scoped>
</style>