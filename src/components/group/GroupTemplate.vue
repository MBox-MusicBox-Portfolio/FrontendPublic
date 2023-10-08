<template>
  <div class='d-flex justify-content-center mb-30'>
    <div class='d-flex block-group-tp'>
      <img
        src="../../assets/icons/no_usage_images/user-avatar1.png"
        class='me-4 img-group-template'
      />
      <div class='block-text-group-tp d-flex'>
        <div>
          <div class='d-flex'>
          <p class='text-group-tp-name mt-2'>{{ name }}</p>
          <p class='text-group-tp ms-5'>
            Followers: {{ folovers }} <span class='ms-1 me-1'>●</span>
            {{ creator_name }}
          </p>
          </div>
          <div class='d-flex mt-4'>
            <p class='text-group-tp'>{{ description }}</p>
            <p class='text-group-tp ms-4 text-primary-emphasis'>see more</p>
          </div>
        </div>
        <button class='bttn-group-tp mt-4'>
          <router-link to="/group" class='text-light'> Join </router-link>
        </button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    folovers: String,
    creator_name: String,
    description: String,
    img_url: String,
  },
};
</script>

<style></style>
