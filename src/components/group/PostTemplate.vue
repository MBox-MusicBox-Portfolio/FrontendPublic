<template>
  <section>
    <div class='div__post'>
      <div class='d-flex'>
        <img :src="avatar" />
        <p class='post__text-name ms-3 mt-4'>
          {{ username }}<span class='post__text-time ms-3'>● {{ time }}</span>
        </p>
      </div>

      <div class='ml-130'>
        <p class='post__description'>
          {{ description }}
        </p>
      </div>
      <div :class="div_container_style() + ' mt-30'">
        <button
          class='post__button-image'
          v-for="(item, index) in toggleImage()"
          :key="index"
          :class="image_class_style(index)"
        >
          <img @click="show_image(index)" :src="item" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    username: String,
    avatar: String,
    time: String,
    description: String,
    gif: String,
    image: Array,
    flag: String // Image 
  },
  methods: {
    toggleImage() {
      if (this.image === undefined ) return null;
      if (this.image.length >= 2) return this.image.slice(0, 3);
      else return this.image;
    },
    show_image(index) {
      if (index === 2) {
      }
    },
    image_class_style(index) {
      if (this.flag === true) return "div-container"
      if (index === 0) return "img-1";
      if (index === 1) return "img-2";
      if (index === 2) return "img-3";
    },
    div_container_style() {
      if (this.flag === true) return "div-container"
      else return "grid-container"
    }
  },
};
</script>

<style></style>
