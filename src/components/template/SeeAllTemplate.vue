<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex">
      <p class="text_name-see">{{ name }}</p>
      <div v-if="flag === true" class="ml-30">
        <button class="button-flag">{{ flag_name }}</button>
      </div>
    </div>
    <div>
      <button class="button-show">See all</button>
      <img src="@Images/mbox_arrow_left.png" class="image-arrow ml-70" />
      <img src="@Images/mbox_arrow_right.png" class="image-arrow mr-20" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    flag: Boolean,
    flag_name: String,
  },
};
</script>

<style></style>
