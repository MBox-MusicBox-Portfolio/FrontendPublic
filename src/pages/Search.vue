<template>
  <section>
    <SearchComponent :placeholder="'Search'" />
    <div class='mt-5 ml-20'>
      <div>
        <SeeAllTemplate :name="'Search History'" />
        <div class='d-flex'>
          <MusicTemplate
            flag="music"
            name="Weekend"
            name_info="Taylor Swift, The Weekend, Ed Sheeran, Lana Del Rey, Arian..."
            img_url="../../../../src/assets/icons/no_usage_images/music6.png"
          />
          <UserTemplate
            img_url="../../../../src/assets/icons/no_usage_images/user-avatar2.png"
            name="Parfeniuk"
          />
          <MusicTemplate
            flag="music"
            name="AM"
            name_info="Arctic Monkeys"
            img_url="../../../../src/assets/icons/no_usage_images/music4.png"
          />
          <MusicTemplate
            flag="music"
            name="HEAR U!"
            name_info="Enzo Gig"
            img_url="../../../../src/assets/icons/no_usage_images/music5.png"
          />
        </div>
      </div>
      <div class='mt-3'>
        <div>
          <p class='text-search-genres mb-3'>Genres</p>
        </div>
        <div class='d-flex flex-wrap'>
          <div v-for="item in testGenres" :key="item">
            <GenresTemplateVue :color="item.color" :name="item.name" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GenresTemplateVue from "../components/template/GenresTemplate.vue";
import MusicTemplate from "../components/template/MusicTemplate.vue";
import UserTemplate from "../components/template/AuthorTemplate.vue";
import SearchComponent from "../components/input/SearchComponent.vue";
import SeeAllTemplate from "../components/template/SeeAllTemplate.vue";

export default {
  data() {
    return {
      testGenres: [
        {
          name: "Podcast",
          color: "#6083F2",
        },
        {
          name: "Pop",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "For You",
          color: "#ABB1CA",
        },
        {
          name: "Mood",
          color: "#6083F2",
        },
        {
          name: "Metal",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "For You",
          color: "#ABB1CA",
        },
        {
          name: "Mood",
          color: "#6083F2",
        },
        {
          name: "Metal",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "For You",
          color: "#ABB1CA",
        },
        {
          name: "Mood",
          color: "#6083F2",
        },
        {
          name: "Metal",
          color: "#2B3385",
        },
        {
          name: "Jazz",
          color: "black",
        },
        {
          name: "For You",
          color: "#ABB1CA",
        },
        {
          name: "Mood",
          color: "#6083F2",
        },
        {
          name: "Metal",
          color: "#2B3385",
        },
      ],
    };
  },
  components: {
    GenresTemplateVue,
    MusicTemplate,
    UserTemplate,
    SearchComponent,
    SeeAllTemplate,
  },
};
</script>
