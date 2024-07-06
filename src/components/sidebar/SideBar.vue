<template>
  <section>
    <div class="d-sidebar-block">
      <div class="sidebar-navigation-block" data-aos="fade-down" data-aos-delay="150">
        <div class="sidebar-navigation-block_item">
          <router-link to="/">
            <button class="button-image-link ms-0 mb-1 d-flex">
              <img class="button__image" src="../../assets/icons/mbox_home.png" />
              <span class="button__text ms-2">Home</span>
            </button>
          </router-link>
        </div>

        <div class="sidebar-navigation-block_item">
          <router-link to="/search">
            <button class="button-image-link ms-0 mb-1 d-flex">
              <img class="button__image" src="../../assets/icons/mbox_search.png" />
              <span class="button__text ms-2">Search</span>
            </button>
          </router-link>
        </div>

        <div v-if="checkIfUserAuthenticated()" class="sidebar-navigation-block_item">
          <router-link to="/group-list">
            <button class="button-image-link m-0 d-flex">
              <img class="button__image" src="../../assets/icons/mbox_music.png" />
              <span class="button__text ms-2">Groups</span>
            </button>
          </router-link>
        </div>
        <div v-else class="sidebar-navigation-block_item">
          <button class="button-image-link m-0 d-flex" @click="OpenModal">
            <img class="button__image" src="../../assets/icons/mbox_account_error.png" alt="" />
            <span class="button__text ms-2">Sign In</span>
          </button>
        </div>
      </div>
    </div>
    <SignIn />
  </section>
</template>

<script>
import { GetItem } from '../../utils/localstorage.js';
import SignIn from '../modals/SignIn.vue';

export default {
  components: {
    SignIn,
  },
  methods: {
    checkIfUserAuthenticated() {
      return GetItem('JWTKey') !== null;
    },
    OpenModal() {
      SignIn.methods.OpenModal();
    },
  },
};
</script>
