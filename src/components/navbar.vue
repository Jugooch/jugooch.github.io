<!-- Navbar.vue -->

<template>
    <nav class="navbar">
      <div class="navbar-container">
        <!-- Left-aligned logo -->
        <div class="logo">
            <LogoComponent />
        </div>
  
        <!-- Right-aligned links -->
        <div class="links">
          <button @click="scrollTo('about')">About</button>
          <button @click="scrollTo('portfolio')">Portfolio</button>
          <button @click="scrollTo('contact')">Contact</button>
        </div>
  
        <!-- Hamburger menu for smaller screens -->
        <div class="hamburger-menu" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
  
        <!-- Responsive menu for smaller screens -->
        <div v-if="showMenu" class="responsive-menu">
          <button @click="closeMenu, scrollTo('about')">About</button>
          <button @click="closeMenu, scrollTo('portfolio')">Portfolio</button>
          <button @click="closeMenu, scrollTo('contact')">Contact</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import LogoComponent from './icons/logo.vue';

  export default {
    components: {
        LogoComponent,
    } ,
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      closeMenu() {
        this.showMenu = false;
      },
      scrollTo(id){
        var targetElement = document.getElementById(id);

        if (targetElement) {
          // Calculate the offset of the target element
          var targetOffset = targetElement.offsetTop;

          // Scroll to the target element
          window.scrollTo({
            top: targetOffset,
            behavior: 'smooth',
          });
        }
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */

  button{
    border: none;
    background-color: #1b1725;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
  }
  
  .navbar {
    color: #fff;
    padding-top: 16px;
    font-size: 20px;
    font-weight: bold;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    max-width: 48px; /* Adjust based on your design */
  }
  
  .links {
    display: flex;
    gap: 64px;
  }
  
  .links a {
    text-decoration: none;
    color: #fff;
  }
  
  /* Hamburger menu styles */
  .hamburger-menu {
    display: none;
    cursor: pointer;
  }
  
  .bar {
    height: 3px;
    width: 25px;
    background-color: #fff;
    margin: 6px 0;
  }
  
  /* Responsive menu styles */
  .responsive-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 10px;
    background-color: #333;
    border: 1px solid #fff;
    padding: 10px;
  }
  
  @media screen and (max-width: 768px) {
    .hamburger-menu {
      display: block;
    }
  
    .links {
      display: none;
    }
  }
  </style>