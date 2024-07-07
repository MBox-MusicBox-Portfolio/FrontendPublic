<script setup>
import { useAuthStore } from '../stores/useAuthStore.js';
import PageContent from '../pages/PageContent.vue';
import Music from '../pages/Music.vue';
import Sidebar from '../components/sidepanels/SideBar.vue';
import SideMenu from '../components/sidepanels/SideMenu.vue';
import UserProfile from '../components/userProfile/UserProfile.vue';

const auth = useAuthStore();
const checkIfUserAuthenticated = () => Boolean(auth.user);
</script>

<template>
  <section>
    <div class="container-fluid p-0 m-0">
      <UserProfile v-if="$route.path !== '/profile' && checkIfUserAuthenticated()" />
      <Sidebar />
      <SideMenu />
      <PageContent />
    </div>
    <Music v-if="checkIfUserAuthenticated()" />
  </section>
</template>
