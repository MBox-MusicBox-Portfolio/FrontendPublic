<template>
  <section>
    <div class='container-fluid p-0 m-0'>
      <ProfileComponents v-if="this.$route.path !== '/profile' && checkIfUserAuthenticated()" :image_flag="true" :username="store.username" />
      <Sidebar/> 
      <SidebarNav/>
      <Content/>
    </div>
    <Music v-if="checkIfUserAuthenticated()"/>
  </section>
</template>

<script>
import Content from           '@Pages/Content.vue';
import Music from             '@Pages/Music/Music.vue';
import Sidebar from           '@Pages/Sidebar/Sidebar.vue';
import SidebarNav from        '@Pages/Sidebar/SidebarNav.vue';
import ProfileComponents from '@Components/profile/ProfileComponents.vue';
import { GetItem } from       '@Utils/localstorage';
 
export default {
  components: { Music, Sidebar, Content, SidebarNav, ProfileComponents },
  methods: {
    checkIfUserAuthenticated() {
      return GetItem("JWTKey") !== null;
    },
  }
}
</script>
<script setup>
import {ProfileStore} from "@Stores/profile.store";

const store = ProfileStore();
store.getProfileComponent();
</script>
<style>

</style>