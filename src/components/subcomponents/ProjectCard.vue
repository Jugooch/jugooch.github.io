<template>
    <div class="card-large" style="padding: 0px">
        <img class="project-img" :src="project.image" :alt="project.title" />
    </div>
</template>

<script setup>
    var props = defineProps(['project']);
</script>

<style scoped>
    .project-img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
</style>