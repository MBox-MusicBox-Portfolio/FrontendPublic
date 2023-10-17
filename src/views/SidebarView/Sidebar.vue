<template>
  <section>
    <div class='d-sidebar-block'>
      <div class="sidebar-navigation-block" data-aos="fade-down" data-aos-delay="150">
        <button class='button-image-link ms-0 mb-1 d-flex'>
          <router-link to="/home" >
            <img class='button__image' src="../../assets/icons/mbox_home.png" >
          </router-link>
          <p class='button__text ms-2'>Home</p>
        </button>
        <button class='button-image-link ms-0 mb-1 d-flex'>
            <router-link to="/search">
              <img class='button__image' src="../../assets/icons/mbox_search.png">
            </router-link>
            <p class='button__text ms-2'>Search</p>
        </button>
        <div v-if="check()">
          <button class='button-image-link m-0 d-flex'>
            <router-link to="/group-list">
              <img class='button__image' src="../../assets/icons/mbox_music.png">
            </router-link>
            <p class='button__text ms-2'>Groups</p>
          </button>
        </div>
        <button v-else class='button-image-link m-0 d-flex'>
          <img class='button__image' @click="OpenModal" src="../../assets/icons/mbox_account_error.png">
          <p class='button__text ms-2'>Sign Up</p>
        </button>
      </div>
    </div>
    <SignComponent/>
  </section>
</template>

<script>
import {GetItem} from '../../lib/Service/LocalStorage/localstorage';
import SignComponent from '../../components/modals/SignComponent.vue';

export default {
  components: {
    SignComponent
  },
  methods: {
    check() {
      if (GetItem("JWTKey") === null) {
        return false;
      } else {
        return true;
      }
    },
    OpenModal() {
      SignComponent.methods.OpenModal();
    }
  }
}
</script>