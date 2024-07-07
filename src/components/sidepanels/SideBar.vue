<script setup>
import SignIn from '../modals/SignIn.vue';
import { LocalStorage } from '../../utils/LocalStorage.js';
import { useAppStore } from '../../stores/app.store.js';
import { useAuthModal } from '../../composables/useAuthModal.js';

const app = useAppStore();
const authModal = useAuthModal();

const checkIfUserAuthenticated = () => {
  return LocalStorage.GetItem('JWTKey') !== null;
};
</script>

<template>
  <section>
    <div class="d-sidebar-block" :class="{ 'd-sidebar-block_expanded': app.isSideBarOpen }">
      <div class="sidebar-navigation-block" data-aos="fade-down" data-aos-delay="150">
        <div class="sidebar-navigation-block_item">
          <button
            class="button-image-link ms-0 mb-1 d-flex button-image-link-center"
            @click="app.isSideBarOpen ? app.closeSidePanel() : app.openSidePanel()"
          >
            <img v-if="app.isSideBarOpen" src="../../assets/icons/mbox_arrow_left.png" alt="open sidebar" />
            <img v-else-if="!app.isSideBarOpen" src="../../assets/icons/mbox_arrow_right.png" alt="close sidebar" />
          </button>
        </div>
        <div class="sidebar-navigation-block_item">
          <router-link to="/">
            <button class="button-image-link ms-0 mb-1 d-flex">
              <img class="button__image" src="../../assets/icons/mbox_home.png" alt="" />
              <span class="button__text ms-2">Home</span>
            </button>
          </router-link>
        </div>

        <div class="sidebar-navigation-block_item">
          <router-link to="/search">
            <button class="button-image-link ms-0 mb-1 d-flex">
              <img class="button__image" src="../../assets/icons/mbox_search.png" alt="" />
              <span class="button__text ms-2">Search</span>
            </button>
          </router-link>
        </div>

        <div v-if="checkIfUserAuthenticated()" class="sidebar-navigation-block_item">
          <router-link to="/group-list">
            <button class="button-image-link m-0 d-flex">
              <img class="button__image" src="../../assets/icons/mbox_music.png" alt="" />
              <span class="button__text ms-2">Groups</span>
            </button>
          </router-link>
        </div>
        <div v-else class="sidebar-navigation-block_item">
          <button class="button-image-link m-0 d-flex" @click="authModal.openSignInModal">
            <img class="button__image" src="../../assets/icons/mbox_account_error.png" alt="" />
            <span class="button__text ms-2">Sign In</span>
          </button>
        </div>
      </div>
    </div>
    <SignIn />
  </section>
</template>
