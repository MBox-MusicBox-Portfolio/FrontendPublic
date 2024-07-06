<template>
  <section>
    <div class="container-fluid p-0 m-0">
      <ProfileComponents
        v-if="$route.path !== '/profile' && checkIfUserAuthenticated()"
        :image_flag="true"
        :username="profile.username"
      />
      <Sidebar />
      <SidebarNav />
      <CustomContent />
    </div>
    <Music v-if="checkIfUserAuthenticated()" />
  </section>
</template>

<script>
import CustomContent from '../pages/PageWrapper.vue';
import Music from '../pages/Music/Music.vue';
import Sidebar from '../components/sidebar/SideBar.vue';
import SidebarNav from '../components/sidebar/SideMenu.vue';
import ProfileComponents from '../components/profile/Profile.vue';
import { GetItem } from '../utils/localstorage.js';

export default {
  components: { Music, Sidebar, CustomContent, SidebarNav, ProfileComponents },
  methods: {
    checkIfUserAuthenticated() {
      return GetItem('JWTKey') !== null;
    },
  },
};
</script>

<script setup>
import { ProfileStore } from '../stores/profile.store.js';

const profile = ProfileStore();
profile.getProfileComponent();
</script>

<style></style>
