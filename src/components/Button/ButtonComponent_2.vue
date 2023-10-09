<template>
    <button class='button_component'>
        <router-link :to="'/' + link" class='text-light' v-if="flag === true">
          {{ name }}
        </router-link>
        <p class='text-light' v-else>{{ name }}</p>
      </button>
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