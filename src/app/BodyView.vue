<script setup>
import { ProfileStore } from '../stores/profile.store.js';
import PageContent from '../pages/PageContent.vue';
import Music from '../pages/Music.vue';
import Sidebar from '../components/sidepanels/SideBar.vue';
import SideMenu from '../components/sidepanels/SideMenu.vue';
import ProfileComponents from '../components/profile/Profile.vue';
import { LocalStorage } from '../utils/LocalStorage.js';

const profile = ProfileStore();
profile.getProfileComponent(); // TODO: move this to onMounted hook, consider creating a composable
const checkIfUserAuthenticated = () => LocalStorage.GetItem(LocalStorage.JWTKey) !== null;
</script>

<template>
  <section>
    <div class="container-fluid p-0 m-0">
      <ProfileComponents
        v-if="$route.path !== '/profile' && checkIfUserAuthenticated()"
        :image_flag="true"
        :username="profile.username"
      />
      <Sidebar />
      <SideMenu />
      <PageContent />
    </div>
    <Music v-if="checkIfUserAuthenticated()" />
  </section>
</template>
