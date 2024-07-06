<template>
  <button class="button_component">
    <router-link v-if="flag === true" :to="'/' + link" class="text-light">
      {{ name }}
    </router-link>
    <p v-else class="text-light">
      {{ name }}
    </p>
  </button>
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
