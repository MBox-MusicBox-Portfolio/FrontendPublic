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

<script>
import PageContent from '../pages/PageContent.vue';
import Music from '../pages/Music.vue';
import Sidebar from '../components/sidepanels/SideBar.vue';
import SideMenu from '../components/sidepanels/SideMenu.vue';
import ProfileComponents from '../components/profile/Profile.vue';
import { GetItem } from '../utils/localstorage.js';

export default {
  components: { Music, Sidebar, PageContent, SideMenu, ProfileComponents },
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
