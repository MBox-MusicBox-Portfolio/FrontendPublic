<template>
  <div class='block-dop-info ml-20'>
    <div class='d-flex w-100'>
      <p class='text-anim'>Artist</p>
    </div>
    <div>
      <div class='block-group-tmp-artist mt-30'>
        <div class='d-flex justify-content-center pt-5'>
          <img
            src="../../assets/icons/no_usage_images/user-avatar4-big.png"
            class='img-group-artist'
          />
        </div>
        <p class='text-group-tmp-artist mt-4'>Lil Peep</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        img_url: String,
    }
};
</script>

<style></style>
