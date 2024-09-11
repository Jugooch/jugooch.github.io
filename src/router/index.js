import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Return saved position for popstate navigations
      return savedPosition;
    } else {
      // Scroll to the top for new navigations
      return { top: 0, left: 0 };
    }
  },
});

export default router;