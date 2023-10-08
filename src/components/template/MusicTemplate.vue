<template>
    <div class='music-template mt-3 mr-20'>
      <div>
        <img :src="img_url" class='img-mt'/>
      </div>
      <div class='ms-2 mt-3 d-block'>
        <p class='text-name-mt mb-2'>{{ name }}</p>
        <p class='text-info-mt'>
          {{ name_info }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      img_url: String,
      name: String,
      name_info: String,
      flag: String // Music, Playlist, Podkast, Albums
    },
  };
  </script>
  
  <style></style>
  