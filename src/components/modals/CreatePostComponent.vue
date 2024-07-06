<template>
  <div class='modal' id="modal-edit">
    <div class='modal-dialog'>
      <div class='modal-content bg-transparent'>
        <form class='b_post-form'>
          <div class='mb-1 d-flex justify-content-between'>
            <p class='post__text-create'>Create new post</p>
            <img
              src="@Images/mbox_exit.png"
              class='post__image-exit'
            />
          </div>
          <div class='d-flex align-items-center'>
            <img
              src="@Images/no_usage_images/user-avatar1.png"
              class='post__image-avatar'
            />
            <p class='post__text-name'>Lil Peep</p>
          </div>
          <div class='post__input ml-70'>
            <input class='input__title' type="text" placeholder="Post title" />
            <input
              class='input__descriptions'
              type="text"
              placeholder="What's new?"
            />
            <select class='post__input-select'>
              <option class='text-center'>
                <p class='select__text'>Lil Peep</p>
              </option>
            </select>
          </div>
          <div class='ml-70 d-flex justify-content-between'>
            <div>
              <img
                class='post__image'
                src="@Images/mbox_add_image.png"
              />
              <img class='post__image' src="@Images/mbox_gif.png" />
              <img
                class='post__image'
                src="@Images/mbox_add_emoji.png"
              />
            </div>
            <button class='post__button' type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "../../../node_modules/bootstrap/dist/js/bootstrap.esm";

export default {
  methods: {
    OpenModal() {
      const modalShow = new Modal(document.getElementById("modal-edit"), {});
      modalShow.show();
    },
  },
};
</script>
<script></script>
