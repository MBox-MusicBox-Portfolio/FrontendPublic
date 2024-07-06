<template>
  <div class="d-flex justify-content-center fixed-button">
    <button class="button__create-post mt-4">
      <router-link v-if="flag === true" :to="'/' + link" class="text-light">
        {{ name }}
      </router-link>
      <p v-else class="text-light">
        {{ name }}
      </p>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    link: String,
    flag: Boolean,
  },
};
</script>
