<template>
    <div class="card-large project-card" style="padding: 0px; position: relative">
        <img class="project-img" :src="project.image" :alt="project.title" />
        <div class="overlay">
          <h4>{{ project.title }}</h4>
        </div>
        <Arrow class="arrow card-arrow hover-arrow"/>
    </div>
</template>

<script setup>
    import Arrow from "../icons/Arrow.vue";

    var props = defineProps(['project']);
</script>

<style scoped>
    .project-card {
      cursor: pointer;
    }
    .project-img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      border-radius: 8px;
      transition: opacity 0.3s ease-in-out;
    }

    .card-large:hover .overlay {
      opacity: 1;
    }

    .hover-arrow {
      opacity: 0; /* Initially hidden on larger screens */
    }

    .card-large:hover .hover-arrow {
      opacity: 1; /* Visible on hover on larger screens */
    }

    /* Ensure arrow is visible on smaller screens */
    @media (max-width: 768px) {
      .arrow {
        opacity: 1;
      }
    }
</style>