<template>
  <div class="d-flex justify-content-center mb-30">
    <div class="d-flex block-group-tp">
      <img :src="img_url" class="me-4 img-group-template" />
      <div class="block-text-group-tp d-flex">
        <div>
          <div class="d-flex">
            <p class="text-group-tp-name mt-2">{{ name }}</p>
            <p class="text-group-tp ms-5">
              Followers: {{ folovers }} <span class="ms-1 me-1">●</span>
              {{ creator_name }}
            </p>
          </div>
          <div class="d-flex mt-4">
            <p class="text-group-tp">{{ description }}</p>
            <p class="text-group-tp ms-4 text-primary-emphasis">see more</p>
          </div>
        </div>
        <button class="bttn-group-tp mt-4 text-white">
          {{ flag_name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    folovers: String,
    creator_name: String,
    description: String,
    img_url: String,
    flag_name: String,
  },
  methods: {},
};
</script>

<style></style>
