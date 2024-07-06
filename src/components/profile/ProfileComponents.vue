<template>
  <section class="d-flex profile-template position-fixed">
    <div class="d-flex mt-2 me-3">
      <p class="template__text" :class="stylePc()">
        {{ username }}
      </p>
      <button class="template__button m-0">
        <router-link v-if="image_flag" to="/profile">
          <img class="button__image" src="@Images/no_usage_images/img-profile.png" />
        </router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image_flag: Boolean,
    image_url: String,
    username: String,
  },
  methods: {
    stylePc() {
      if (this.$route.path === '/home' || this.$route.path === '/group') {
        return 'text-white';
        /**
         * !! Добавить логику что если данный компонент ниже изображения
         * !! группы или дома то
         * * return 'text-dark';
         */
      }
    },
  },
};
</script>

<style></style>
