<template>
  <section class="pb-5">
    <img src="@Images/no_usage_images/bg-home.png" class="img-bg-random" />
    <div class="block-image-rnd d-flex">
      <div class="block-wrap-content">
        <h1 class="text-name mb-4 mt-2 ms-2">Arctice Monkeys</h1>
        <p class="text-description ms-2">
          “Didn’t you see she were gorgeous, she was beyond belief / <br />
          But this lad at the side drinking his Smirnoff ice / Came and <br />
          paid for her Tropical Reef”
        </p>
        <div class="mt-4">
          <button class="button-play m-2">Play</button>
          <button class="button-add m-2"><span>+</span> Add to playlist</button>
        </div>
      </div>
    </div>
    <div class="ml-20 mt-5 mb-5 position-relative">
      <div>
        <SeeAllTemplate name="Playlist for you" />
        <div class="d-flex flex-nowrap overflow-hidden me-2">
          <MusicTemplate
            v-for="item in 4"
            :key="item"
            flag="playlist"
            img_url="../../../../src/assets/icons/no_usage_images/music6.png"
            name="Weekend"
            name_info="Taylor Swift, The Weekend, Ed Sheeran, Lana Del Rey, Arian..."
          />
        </div>
      </div>
      <div class="mt-4">
        <SeeAllTemplate name="Artist for you" />
        <div class="d-flex flex-nowrap overflow-hidden me-2">
          <UserTemplate
            v-for="item in 4"
            :key="item"
            name="Parfeniuk"
            img_url="../../../../src/assets/icons/no_usage_images/user-avatar2.png"
          />
        </div>
      </div>
      <div class="mt-4">
        <SeeAllTemplate name="Popular Playlist" />
        <div class="d-flex flex-nowrap overflow-hidden me-2">
          <MusicTemplate
            v-for="item in 4"
            :key="item"
            flag="playlist"
            img_url="../../../../src/assets/icons/no_usage_images/music3.png"
            name="Weekend"
            name_info="Taylor Swift, The Weekend, Ed Sheeran, Lana Del Rey, Arian..."
          />
        </div>
      </div>
      <div class="mt-4">
        <SeeAllTemplate name="Popular Albums" />
        <div class="d-flex flex-nowrap overflow-hidden me-2">
          <MusicTemplate
            v-for="item in 4"
            :key="item"
            flag="albums"
            img_url="../../../../src/assets/icons/no_usage_images/music4.png"
            name="AM"
            name_info="Arctic Monkeys"
          />
        </div>
      </div>
      <div class="mt-4">
        <SeeAllTemplate name="Podcast" />
        <div class="d-flex flex-nowrap overflow-hidden me-2">
          <MusicTemplate
            v-for="item in 4"
            :key="item"
            flag="podcast"
            img_url="../../../../src/assets/icons/no_usage_images/music5.png"
            name="HEAR U"
            name_info="Enzo Gigi"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MusicTemplate from '../components/templates/MusicTemplate.vue';
import UserTemplate from '../components/templates/AuthorTemplate.vue';
import SeeAllTemplate from '../components/templates/SeeAllTemplate.vue';

export default {
  components: {
    MusicTemplate,
    UserTemplate,
    SeeAllTemplate,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
