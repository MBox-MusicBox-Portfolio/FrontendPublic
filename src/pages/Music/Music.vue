<template>
  <!-- <audio> src Fluc Codec-->
  <section>
    <div class="music-block d-flex">
      <div class="size-block-1 d-flex">
        <div class="m-info-block d-flex">
          <!-- Music Info -->
          <div class="mr-20">
            <img src="@Images/no_usage_images/music1.png" />
          </div>
          <div>
            <p class="text-name text-white">Star Shopping</p>
            <p class="text-author text-white">Lil Peep</p>
          </div>
        </div>
        <div class="favor-block mr-32">
          <!-- Favorite Image -->
          <button class="bttn-favor">
            <img src="@Images/mbox_favorite.png" class="img-favor" />
          </button>
        </div>
      </div>
      <div class="size-block-2">
        <div class="progress-block">
          <div class="value-prg"></div>
        </div>
      </div>
      <div class="size-block-3">
        <div class="d-flex ml-30">
          <button class="pl-bttn">
            <img src="@Images/mbox_shuffle.png" class="img-pl-size" />
          </button>
          <button class="pl-bttn">
            <img src="@Images/mbox_back_music.png" class="img-pl-size" />
          </button>
          <button class="pl-bttn">
            <img src="@Images/mbox_play.png" class="img-frame-size mt-1" />
          </button>
          <button class="pl-bttn">
            <img src="@Images/mbox_next-music.png" class="img-pl-size" />
          </button>
          <button class="pl-bttn">
            <img src="@Images/mbox_autorenew.png" class="img-pl-size" />
          </button>
          <div class="d-flex mt-1">
            <img src="@Images/mbox_volume_up.png" class="img-vol ml-30" />
            <div class="progress-block volume-block">
              <div class="value-prg w-25"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
