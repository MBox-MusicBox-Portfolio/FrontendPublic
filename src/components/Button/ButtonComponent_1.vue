<template>
  <div class='d-flex justify-content-center fixed-button'>
    <button class='button__create-post mt-4'>
      <router-link :to="'/' + link" class='text-light' v-if="flag === true">
        {{ name }}
      </router-link>
      <p class='text-light' v-else>{{ name }}</p>
    </button>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        link: String,
        flag: Boolean
    }
};
</script>