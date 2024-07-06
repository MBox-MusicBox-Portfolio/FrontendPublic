<template>
  <div class="d-flex justify-content-center mt-5">
    <input type="text" class="input-search" :placeholder="[[placeholder]]" />
    <button class="bttn-search">
      <img src="@Images/mbox_search_white.png" class="img-search" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
  },
};
</script>

<style></style>
