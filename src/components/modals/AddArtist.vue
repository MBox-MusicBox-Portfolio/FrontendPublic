<script>
import { Modal } from 'bootstrap';

export default {
  props: {
    username: String,
    img_user: String,
  },
  methods: {
    openArtistEditModal() {
      const modalShow = new Modal(document.getElementById('modal-edit1'), {});
      modalShow.show();
    },
  },
};
</script>

<template>
  <div id="modal-edit1" class="modal">
    <div class="modal-dialog">
      <div class="modal-content bg-transparent">
        <form class="b_post-form">
          <div class="mb-1 d-flex justify-content-between">
            <p class="post__text-create">Add new artist</p>
            <img :src="img_user" class="post__image-exit" alt="" />
          </div>
          <div class="d-flex align-items-center">
            <img :src="img_user" class="post__image-avatar" alt="" />
            <p class="post__text-name">{{ username }}</p>
          </div>
          <div class="post__input ml-70">
            <input class="input__title" type="text" placeholder="Write name" />
          </div>
          <div class="d-flex justify-content-end">
            <button class="post__button" type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
