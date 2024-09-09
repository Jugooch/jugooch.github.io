<template>
  <nav class="navbar">
    <router-link :to="{ name: 'Home' }" class="nav-item" active-class="active">
      <Helmet v-if="currentTab === 'home'" class="helmet" />
      <h5>Home</h5>
    </router-link>
    <router-link :to="{ name: 'About' }" class="nav-item" active-class="active">
      <Helmet v-if="currentTab === 'about'" class="helmet" />
      <h5>About Me</h5>
    </router-link>
    <router-link :to="{ name: 'Projects' }" class="nav-item" active-class="active">
      <Helmet v-if="currentTab === 'projects'" class="helmet" />
      <h5>Projects</h5>
    </router-link>
    <router-link :to="{ name: 'Contact' }" class="nav-item" active-class="active">
      <Helmet v-if="currentTab === 'contact'" class="helmet" />
      <h5>Contact</h5>
    </router-link>
  </nav>
</template>

<script>
import Helmet from '@/components/static-illustrations/Helmet.vue'; // Import your Helmet component

export default {
  components: {
    Helmet, // Register your Helmet component
  },
  data() {
    return {
      currentTab: 'home', // Default tab
    };
  },
  watch: {
    // Watch the route and update the active tab based on the current route
    $route(to) {
      this.updateCurrentTab(to.name);
    },
  },
  mounted() {
    // Set the initial tab based on the current route
    this.updateCurrentTab(this.$route.name);
  },
  methods: {
    updateCurrentTab(tabName) {
      // Map route names to tab names
      const tabMap = {
        Home: 'home',
        About: 'about',
        Projects: 'projects',
        Contact: 'contact',
      };
      this.currentTab = tabMap[tabName] || 'home'; // Default to 'home'
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 72px;
  position: relative;
  padding: 64px;
}

.nav-item {
  text-align: center;
  position: relative;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
}

.nav-item h5 {
  margin: 0;
}

.nav-item.active h5 {
  /* Change color of active tab */
  color: #9747FF;
}

/* Style for the helmet icon */
.helmet {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}

/* Add hover effect text inside the nav routes */
.nav-item h5:hover {
  color: #cccccc;
}
</style>
