<template>
  <section>
    <img src="../assets/icons/no_usage_images/bg-profile.png" class="image-background" alt="background" />
    <div class="ml-20">
      <div class="d-flex">
        <div class="profile-card">
          <!-- Profile card-->
          <div class="d-flex justify-content-center">
            <img src="../assets/icons/no_usage_images/img-profile.png" alt="profile photo" />
          </div>
          <div class="text-center mt-20">
            <p class="card__text-name">khpolinaa</p>
            <p class="card__text mt-1">we were born to die</p>
            <p class="card__text mt-20"><span class="card__text-index mr-20">17</span> Playlist</p>
            <p class="card__text mt-10"><span class="card__text-index mr-20">233</span> Subscribers</p>
            <p class="card__text mt-10"><span class="card__text-index mr-20">110</span> Subscribtions</p>
            <button class="card__button-edit mt-20">Edit profile</button>
          </div>
        </div>
        <div class="favorite-block">
          <SeeAllTemplate name="Your favorite tracks" />
          <div class="mt-4 ml-149">
            <FavoriteListTemplate
              v-for="item in subList"
              :key="item.name"
              :index="item.name"
              img_url="../../../../../src/assets/icons/no_usage_images/music8.png"
              :name="'Hung Up'"
              :author_name="'Madonna'"
              :description="'Confessions on a Dance Floor'"
              :time="'4:34'"
            />
          </div>
        </div>
      </div>
      <div class="mb-5 position-relative">
        <!-- Content -->
        <div>
          <SeeAllTemplate name="Your playlist" />
          <div class="d-flex flex-nowrap overflow-hidden">
            <MusicTemplate
              v-for="item in subList"
              :key="item.name"
              :index="item.name"
              flag="playlist"
              img_url="../../../../../src/assets/icons/no_usage_images/music6.png"
              name="Weekend"
              name_info="Taylor Swift, The Weekend, Ed Sheeran, Lana Del Rey, Arian..."
            />
          </div>
        </div>
        <div class="mt-4">
          <SeeAllTemplate name="Your Subscribtions" />
          <div class="d-flex flex-nowrap overflow-hidden">
            <UserTemplate
              v-for="item in subList"
              :key="item.name"
              :index="item.name"
              name="Name"
              img_url="../../../../src/assets/icons/no_usage_images/user-avatar2.png"
            />
          </div>
        </div>
        <div class="mt-4">
          <SeeAllTemplate name="Your Subscribers" />
          <div class="d-flex flex-nowrap overflow-hidden">
            <UserTemplate v-for="item in subList" :key="item" :name="item.name" :img_url="item.img_url" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FavoriteListTemplate from '../components/templates/FavoriteTemplate.vue';
import SeeAllTemplate from '../components/templates/SeeAllTemplate.vue';
import MusicTemplate from '../components/templates/MusicTemplate.vue';
import UserTemplate from '../components/templates/AuthorTemplate.vue';

export default {
  components: {
    FavoriteListTemplate,
    SeeAllTemplate,
    MusicTemplate,
    UserTemplate,
  },
  data() {
    return {
      subList: [
        {
          img_url: '../../../../../src/assets/icons/no_usage_images/user-sub4.png',
          name: 'nikawtf',
        },
        {
          img_url: '../../../../../src/assets/icons/no_usage_images/user-sub3.png',
          name: 'sabbath',
        },
        {
          img_url: '../../../../../src/assets/icons/no_usage_images/user-sub2.png',
          name: 'ALEX',
        },
        {
          img_url: '../../../../../src/assets/icons/no_usage_images/user-sub1.png',
          name: 'KJABBA',
        },
      ],
    };
  },
};
</script>
