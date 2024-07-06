<template>
  <div class="d-flex mt-3 ms-2">
    <div>
      <img :src="img_url" :style="imgBorderStyle" class="img-lib-comp" />
    </div>
    <div class="ms-2">
      <p class="text-name-lc">{{ name }}</p>
      <p class="text-info-lc">
        {{ name_info }}
        <span v-if="name_info !== 'Artist'" class="ms-1 me-1">●</span>
        {{ name_desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img_url: String,
    name: String,
    name_info: String, // Playlist, Track, Artist
    name_desc: String, // 114 tracks, author name, else artist = null
    flag: String, // border
  },
  computed: {
    imgBorderStyle() {
      if (this.flag === '10') return 'border-radius: 10px';
      if (this.flag === '50') return 'border-radius: 50%';
      return 'border-radius: 10px';
    },
  },
};
</script>

<style></style>
