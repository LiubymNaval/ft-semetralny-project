<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <RouterLink to="/">
      <img src="/img/FC_Lomberx.png" height="100px" id="logo" />
    </RouterLink>
    <nav class="main-nav">
      <ul class="main-menu" id="main-menu" ref="menu">
        <li>
          <RouterLink to="/">Domov</RouterLink>
        </li>
        <li>
          <RouterLink to="/qna">O nás</RouterLink>
        </li>
        <li>
          <RouterLink to="/galeria">Galéria</RouterLink>
        </li>
        <li>
          <RouterLink to="/kontakt">Kontakt</RouterLink>
        </li>
        <li>
          <RouterLink to="/recenzie">Recenzie</RouterLink>
        </li>
        <li>
          <RouterLink to="/profil" @click="handleProfileClick">{{ profileLinkText }}</RouterLink>
        </li>
      </ul>
        <a class="hamburger" id="hamburger" ref="hamburger">
        <i class="fa fa-bars" style="color:greenyellow"></i>
        </a>
    </nav>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/userStore';
  import { initializeHamburgerMenu } from '@/utils/app.js';
  
  export default {
    name: 'TheNavigation',
    data() {
      return {
        profileLinkText: '',
      };
    },
    computed: {
      profileLinkText() {
        const userStore = useUserStore();
        if (userStore.isLoggedIn) {
          return `Prihlásený: ${userStore.user?.username} (${userStore.user?.role})`;
        } else {
          return 'Prihlásiť/Registrovať';
        }
      },
    },
    methods: {
      handleProfileClick() {
        const userStore = useUserStore();
        if (userStore.isLoggedIn) {
          userStore.logout();
        }
      },
    },
    mounted() {
      const hamburger = this.$refs.hamburger;
      const menu = this.$refs.menu;
      initializeHamburgerMenu(hamburger, menu);
    },
  };
  </script>