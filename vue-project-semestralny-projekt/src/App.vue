<template>
 <header class="container main-header">
<TheNavigation />
</header>
<RouterView />
<Footer />
</template>
<script>
import TheNavigation from './components/TheNavigation.vue';
import Footer from './components/Footer.vue';
import {RouterView } from 'vue-router'
export default {
  components: {
    TheNavigation,
    RouterView,
    Footer,
  },
};
</script>
