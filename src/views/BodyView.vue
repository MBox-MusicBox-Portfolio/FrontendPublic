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
import Content from './ContentView/Content.vue';
import Music from './MusicView/Music.vue';
import Sidebar from './SidebarView/Sidebar.vue';
import SidebarNav from './SidebarView/SidebarNav.vue';
import ProfileComponents from '../components/profile/ProfileComponents.vue';
import { GetItem } from '../lib/Service/LocalStorage/localstorage';
 
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
import {ProfileStore} from "../lib/stores/profile.store";
const store = ProfileStore();
store.get_profile_component();
</script>
<style>

</style>