<script setup>
import { useAuthStore } from '../../stores/useAuthStore.js';

defineProps({
  isImagePresent: {
    type: Boolean,
    default: true,
  },
});
const auth = useAuthStore();
</script>

<template>
  <section class="d-flex profile-template position-fixed">
    <div class="d-flex mt-2 me-3">
      <p class="template__text">
        {{ auth.user.Name }}
      </p>
      <button class="template__button m-0">
        <router-link v-if="isImagePresent" to="/profile">
          <img class="button__image" src="@Images/no_usage_images/img-profile.png" alt="" />
        </router-link>
      </button>
    </div>
  </section>
</template>
