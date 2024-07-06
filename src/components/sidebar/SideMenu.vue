<template>
  <section>
    <div class="d-sidebar-library">
      <div class="sidebar-logotype" data-aos="fade-down" data-aos-delay="150">
        <img src="../../assets/icons/mbox_logo.png" class="logotype__image" />
      </div>
      <div class="navigation-block" data-aos="fade-down" data-aos-delay="150">
        <div class="navigation__library d-flex align-items-center">
          <img class="library__image" src="../../assets/icons/mbox_audio_library.png" />
          <p class="library__text">My Library</p>
          <img class="library__image-add" src="../../assets/icons/mbox_add.png" />
        </div>
        <div class="navigation__menu d-flex">
          <button class="menu__button">Playlist</button>
          <button class="menu__button">Albums</button>
          <button class="menu__button">Artist</button>
        </div>
        <div class="navigation__search d-flex">
          <img class="search__image" src="../../assets/icons/mbox_search.png" />
          <p class="search__text">Recent</p>
          <img class="search__image" src="../../assets/icons/mbox_arrow_down.png" />
        </div>
      </div>
      <div v-if="check()" class="ml-20">
        <div v-for="item in testUser" :key="item">
          <LibraryComponents
            :img_url="item.img_url"
            :name="item.name"
            :name_desc="item.name_desk"
            :name_info="item.name_info"
            :flag="item.flag"
          />
        </div>
      </div>
      <div v-else class="ml-27">
        <div class="mb-60">
          <p class="text-message">Create your first Playlist!</p>
          <ButtonComponent_2Vue :flag="false" name="Create Playlist" class="mt-10" @click="OpenModal(true)" />
        </div>
        <div>
          <p class="text-message">Subscribe to your favorite artists</p>
          <ButtonComponent_2Vue :flag="false" name="Subscribe" class="mt-10" @click="OpenModal(false)" />
        </div>
      </div>
    </div>
    <SignComponent />
  </section>
</template>

<script>
import ButtonComponent_2Vue from '../button/Button_2.vue';
import SignComponent from '../modals/SignIn.vue';
import LibraryComponents from '../library/Library.vue';
import { GetItem } from '../../utils/localstorage.js';

export default {
  components: {
    LibraryComponents,
    ButtonComponent_2Vue,
    SignComponent,
  },
  data() {
    return {
      testUser: [
        {
          img_url: '../../../src/assets/icons/mbox_favorit.png',
          name: 'Favorite Trackes',
          name_info: 'PlayList',
          name_desk: '114 track',
          flag: '10',
        },
        {
          img_url: '../../../src/assets/icons/no_usage_images/user-avatar1.png',
          name: 'mayby',
          name_info: 'PlayList',
          name_desk: 'mompas',
          flag: '10',
        },
        {
          img_url: '../../../src/assets/icons/no_usage_images/music7.png',
          name: 'HOPE',
          name_info: 'Playlist',
          name_desk: 'khpolinaa',
          flag: '50',
        },
        {
          img_url: '../../../src/assets/icons/no_usage_images/music2.png',
          name: 'litlle',
          name_info: 'Playlist',
          name_desk: 'khpolinaa',
          flag: '10',
        },
        {
          img_url: '../../../src/assets/icons/no_usage_images/music4.png',
          name: 'AM',
          name_info: 'Album',
          name_desk: 'Arctic Monkeys',
          flag: '10',
        },
        {
          img_url: '../../../src/assets/icons/no_usage_images/user-avatar5.png',
          name: 'Krokus',
          name_info: 'Artist',
          name_desk: '',
          flag: '10',
        },
        {
          img_url: '../../../src/assets/icons/no_usage_images/user-avatar4.png',
          name: 'Lil Peep',
          name_info: 'Artist',
          name_desk: 'Artist',
          flag: '50',
        },
        {
          img_url: '../../../src/assets/icons/no_usage_images/user-avatar2.png',
          name: 'Parfeniuk',
          name_info: 'Artist',
          name_desk: 'Artist',
          flag: '50',
        },
        {
          img_url: '../../../src/assets/icons/no_usage_images/user-avatar3.png',
          name: 'Buddy Guy',
          name_info: 'Artist',
          name_desk: 'Artist',
          flag: '50',
        },
      ],
    };
  },
  methods: {
    check() {
      return GetItem('JWTKey') !== null;
    },
    OpenModal(test) {
      SignComponent.methods.SetSign(test);
      SignComponent.methods.OpenModal();
    },
  },
};
</script>
