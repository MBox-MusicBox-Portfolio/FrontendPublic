<template>
  <section>
    <div class='container-fluid p-0 m-0'>
      <ProfileComponents v-if="this.$route.path !== '/profile' && check()" :image_flag="true"  :username="store.username" />
      <Sidebar/> 
      <SidebarNav/>
      <Content/>
    </div>
    <Music v-if="check()"/>
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
    check() {
      if (GetItem("JWTKey") === null) {
        return false;
      } else {
        return true;
      }
    },
  }
}
</script>
<script setup>
import {ProfileStore} from "@Stores/profile.store";
const store = ProfileStore();
store.get_profile_component();
</script>
<style>

</style>