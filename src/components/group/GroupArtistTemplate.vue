<template>
  <div>
      <div class='block-group-tmp-artist mt-30'>
        <div class='d-flex justify-content-center pt-5'>
          <img
            :src="img_url"
            class='img-group-artist'
          />
        </div>
        <p class='text-group-tmp-artist mt-4'>{{ name }}</p>
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
