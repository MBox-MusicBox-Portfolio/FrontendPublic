<template>
  <section>
    <ButtonComponent_1Vue name="Create new post" :flag="false" @click="CreateNewPost()" />
    <img src="@Images/no_usage_images/bg-group.png" class="image-background" />
    <div class="d-flex mb-89 ml-20">
      <div class="group-height">
        <div class="d-flex">
          <div class="profile-card">
            <div class="d-flex justify-content-center">
              <img :src="groupList.avatar" class="card__image" />
            </div>
            <div class="text-center mt-20">
              <p class="card__text-name">{{ groupList.name }}</p>
              <p class="card__text card__width">
                {{ groupList.description }}
              </p>
              <p class="card__text mt-20">
                <span class="card__text-index mr-20">0</span>
                Publication
              </p>
              <p class="card__text mt-10">
                <span class="card__text-index mr-20">{{ groupList.countFollowers }}</span>
                Followers
              </p>
              <p class="card__text mt-10">{{ groupList.createdAt }}</p>
              <!-- <button class="card__button-edit mt-20">Edit profile</button> -->
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="block-dop-info ml-20">
          <div class="d-flex w-100">
            <p class="text-anim">Artist</p>
          </div>
          <GroupArtistTemplate :img_url="groupList.avatar" :name="groupList.name" />
        </div>
        <!--<div class="div__add-artist d-flex justify-content-center">
          <img
            class="add__image"
            src="@Images/mbox_add_artist.png"
          />
        </div>-->
      </div>
    </div>
    <div class="ml-20">
      <div>
        <SeeAllTemplate name="Albums" :flag="true" flag_name="Create new album" />
        <div class="d-flex flex-nowrap overflow-hidden">
          <MusicTemplate
            v-for="item in 4"
            :key="item"
            flag="albums"
            img_url="../../../../../src/assets/icons/no_usage_images/music4.png"
            name="Am"
            name_info="Arctic Monkey"
          />
        </div>
        <SeeAllTemplate name="Tracks" :flag="true" flag_name="Add new track" />
        <div class="d-flex flex-nowrap overflow-hidden">
          <MusicTemplate
            v-for="item in 4"
            :key="item"
            flag="albums"
            img_url="../../../../../src/assets/icons/no_usage_images/music9.png"
            name="I WANNA BE YOUR SLAVE"
            name_info="Måneskin"
          />
        </div>
        <SeeAllTemplate name="Playlist" :flag="true" flag_name="Create new playlist" class="mt-20" />
        <div class="d-flex flex-nowrap overflow-hidden">
          <MusicTemplate
            v-for="item in 4"
            :key="item"
            flag="music"
            img_url="../../../../../src/assets/icons/no_usage_images/music6.png"
            name="Weekend"
            name_info="Taylor Swift, The Weekend, Ed Sheeran, Lana Del Rey, Arian..."
          />
        </div>
      </div>
    </div>
    <p class="text-post">Posts</p>
    <PostTemplate
      username="Lil Peep"
      avatar="../../../../../src/assets/icons/no_usage_images/user-avatar1.png"
      description="So, as a little kid, Gus got to experience the pleasure of writing freely.
      I have all of his written work from the first grade, as well as his early writing from Pre-K and
      Kindergarten. It is interesting to analyze Gus’s early written work with all his other writing to
      think about as well. I see patterns in his writing. From the moment he began writing, as a child,
      until the day he died, Gus mixed reality with make-believe to express his feelings whether they were
      playful or sad.
      What stands out the most to me when I read Gus’s early stories is how so many of them are evocative
      in the same way that his lyrics are."
      time="44 хв."
    />
    <PostTemplate
      username="Lil Peep"
      avatar="../../../../../src/assets/icons/no_usage_images/user-avatar1.png"
      time="44 хв."
      :image="image2"
      :flag="true"
    />
    <PostTemplate
      username="Lil Peep"
      avatar="../../../../../src/assets/icons/no_usage_images/user-avatar1.png"
      description="So, as a little kid, Gus got to experience the pleasure of writing freely.
      I have all of his written work from the first grade, as well as his early writing from
      Pre-K and Kindergarten. It is interesting to analyze Gus’s early written work with all
      his other writing to think about as well. I see patterns in his writing."
      time="1 hours"
      :image="images"
    />
    <CreatePost />
    <AddArtist />
  </section>
</template>

<script>
import MusicTemplate from '../../components/templates/MusicTemplate.vue';
import SeeAllTemplate from '../../components/templates/SeeAllTemplate.vue';
import GroupArtistTemplate from '../../components/group/templates/GroupArtistTemplate.vue';
import ButtonComponent_1Vue from '../../components/button/Button_1.vue';
import CreatePost from '../../components/modals/AddPost.vue';
import PostTemplate from '../../components/group/templates/PostTemplate.vue';
import AddArtist from '../../components/modals/AddArtist.vue';
import { GroupStore } from '../../stores/group.store.js';

export default {
  components: {
    MusicTemplate,
    SeeAllTemplate,
    GroupArtistTemplate,
    ButtonComponent_1Vue,
    CreatePost,
    PostTemplate,
    AddArtist,
  },
  data() {
    return {
      images: [
        '../../../../../src/assets/icons/no_usage_images/Rectangle 2.png',
        '../../../../../src/assets/icons/no_usage_images/Rectangle 3.png',
        '../../../../../src/assets/icons/no_usage_images/Rectangle 4 (1).png',
        '../../../../../src/assets/icons/no_usage_images/Rectangle 3.png',
        '../../../../../src/assets/icons/no_usage_images/Rectangle 3.png',
      ],
      image2: ['../../../../../src/assets/icons/no_usage_images/poster_group.png'],
      groupList: [],
    };
  },
  mounted() {
    this.Group();
  },
  methods: {
    CreateNewPost() {
      CreatePost.methods.openEditPostModal();
    },
    AddArtist() {
      AddArtist.methods.openArtistEditModal();
    },
    async Group() {
      const gl = await GroupStore();
      const value = await gl.Group(this.$route.params.groupId);
      this.groupList = value[0];
    },
  },
};
</script>
