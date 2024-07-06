<template>
  <section>
    <div class="container-fluid p-0 m-0">
      <ProfileComponents
        v-if="$route.path !== '/profile' && checkIfUserAuthenticated()"
        :image_flag="true"
        :username="store.username"
      />
      <Sidebar />
      <SidebarNav />
      <CustomContent />
    </div>
    <Music v-if="checkIfUserAuthenticated()" />
  </section>
</template>

<script>
import CustomContent from '../pages/CustomContent.vue';
import Music from '../pages/Music/Music.vue';
import Sidebar from '../pages/Sidebar/Sidebar.vue';
import SidebarNav from '../pages/Sidebar/SidebarNav.vue';
import ProfileComponents from '../components/profile/ProfileComponents.vue';
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

const store = ProfileStore();
store.getProfileComponent();
</script>

<style></style>
