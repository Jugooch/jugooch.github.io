<template>
  <nav class="navbar">
    <Hamburger class="hamburger-icon" @click="toggleMenu" :isActive="isMenuActive" @toggle="toggleMenu"></Hamburger>
    <div :class="{ 'nav-links': true, 'is-active': isMenuActive }">
      <router-link :to="{ name: 'Home' }" class="nav-item" active-class="active">
        <div class="nav-content">
          <Helmet v-if="currentTab === 'home'" class="helmet" />
          <h5>Home</h5>
        </div>
      </router-link>
      <router-link :to="{ name: 'About' }" class="nav-item" active-class="active">
        <div class="nav-content">
          <Helmet v-if="currentTab === 'about'" class="helmet" />
          <h5>About Me</h5>
        </div>
      </router-link>
      <router-link :to="{ name: 'Projects' }" class="nav-item" active-class="active">
        <div class="nav-content">
          <Helmet v-if="currentTab === 'projects'" class="helmet" />
          <h5>Projects</h5>
        </div>
      </router-link>
      <router-link :to="{ name: 'Contact' }" class="nav-item" active-class="active">
        <div class="nav-content">
          <Helmet v-if="currentTab === 'contact'" class="helmet" />
          <h5>Contact</h5>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import Helmet from '@/components/static-illustrations/Helmet.vue';
import Hamburger from "./icons/Hamburger.vue";

//TODO: Update About Me Tab to not wrap, Change Hamburger Icon (Consider Rebranding with new logo and stuff?)
export default {
  components: {
    Helmet,
    Hamburger
  },
  data() {
    return {
      currentTab: 'home',
      isMenuActive: false,
    };
  },
  watch: {
    $route(to) {
      this.updateCurrentTab(to.name);
    },
  },
  mounted() {
    this.updateCurrentTab(this.$route.name);
  },
  methods: {
    updateCurrentTab(tabName) {
      const tabMap = {
        Home: 'home',
        About: 'about',
        Projects: 'projects',
        Contact: 'contact',
      };
      this.currentTab = tabMap[tabName] || 'home';
    },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    }
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
  z-index: 5;
  padding: 64px;
  background: transparent;
}

.hamburger-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  display: none;
}

/* Links container */
.nav-links {
  display: flex;
  flex-direction: row;
  gap: 72px;
}

.nav-links.is-active {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
}

.nav-item {
  position: relative;
  cursor: pointer;
  padding: 16px;
  text-decoration: none;
}

.nav-item.active h5 {
  color: #9747FF;
}

.nav-item h5 {
  margin-bottom: 0px;
}

/* Style for the helmet icon */
.helmet {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}

.nav-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

/* Add hover effect text inside the nav routes */
.nav-item h5:hover {
  color: #cccccc;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0px;
    padding-top: 64px;
    padding-bottom: 16px;
    background: #1A1A1A;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .nav-links.is-active {
    display: flex;
    align-items: flex-start;
  }

  .nav-item {
    width: 100%;
  }

  .nav-item.active {
    background-color: #141414;
    width: 100%;
  }

  .nav-item h5 {
    margin-left: 16px;
  }

  .nav-item.active h5 {
    margin-left: 0px;
  }

  .helmet {
    position: static;
    width: 10%;
    height: auto;
  }

  .hamburger-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
  }
}
</style>
