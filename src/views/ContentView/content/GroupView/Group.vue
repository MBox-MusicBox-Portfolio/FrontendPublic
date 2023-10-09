<template>
  <section>
    <ButtonComponent_1Vue
      name="Create new post"
      :flag="false"
      @click="CreateNewPost()"
    />
    <img
      src="../../../../assets/icons/no_usage_images/bg-group.png"
      class="image-background"
    />
    <div class='d-flex mb-89 ml-20'>
      <div class='group-height'>
        <div class='d-flex'>
          <div class='profile-card'>
            <div class='d-flex justify-content-center'>
              <img
                src="../../../../assets/icons/no_usage_images/user-avatar1.png"
              />
            </div>
            <div class='text-center mt-20'>
              <p class='card__text-name'>Lil Peep</p>
              <p class='card__text mt-1'>
                This is a group in memory of Gustav <br />
                Elijah Åhr (Lil Peep) He was such an <br />
                inspiration to so many people and <br />
                deserves to be remembered. Please <br />
                keep post respectful and remember <br />
                this is about Gus‼️
              </p>
              <p class='card__text mt-20'>
                <span class='card__text-index mr-20'>811</span> Publication
              </p>
              <p class='card__text mt-10'>
                <span class='card__text-index mr-20'>173k</span> Followers
              </p>
              <p class='card__text mt-10'>Created 11 Feb 2021</p>
              <button class='card__button-edit mt-20'>Edit profile</button>
            </div>
          </div>
        </div>
      </div>
      <div class='d-flex'>
        <GroupArtistTemplate />
        <div class='div__add-artist d-flex justify-content-center'>
          <img @click="AddArtist()"
            class='add__image'
            src="../../../../assets/icons/mbox_add_artist.png"
          />
        </div>
      </div>
    </div>
    <div class='ml-20'>
      <div>
        <SeeAllTemplate
          name="Albums"
          :flag="true"
          flag_name="Create new album"
        />
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
        <SeeAllTemplate
          name="Playlist"
          :flag="true"
          flag_name="Create new playlist"
          class="mt-20"
        />
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
    <p class='text-post'>Posts</p>
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
import AuthorTemplate from "../../../../components/template/AuthorTemplate.vue";
import MusicTemplate from "../../../../components/template/MusicTemplate.vue";
import SeeAllTemplate from "../../../../components/template/SeeAllTemplate.vue";
import GroupArtistTemplate from "../../../../components/group/GroupArtistTemplate.vue";
import ButtonComponent_1Vue from "../../../../components/Button/ButtonComponent_1.vue";
import CreatePost from "../../../../components/modals/CreatePostComponent.vue";
import PostTemplate from "../../../../components/group/PostTemplate.vue";
import AddArtist from "../../../../components/modals/AddArtistComponent.vue";

export default {
  data() {
    return {
      images: [
        "../../../../../src/assets/icons/no_usage_images/Rectangle 2.png",
        "../../../../../src/assets/icons/no_usage_images/Rectangle 3.png",
        "../../../../../src/assets/icons/no_usage_images/Rectangle 4 (1).png",
        "../../../../../src/assets/icons/no_usage_images/Rectangle 3.png",
        "../../../../../src/assets/icons/no_usage_images/Rectangle 3.png",
      ],
      image2: [
        "../../../../../src/assets/icons/no_usage_images/poster_group.png",
      ],
    };
  },
  components: {
    AuthorTemplate,
    MusicTemplate,
    SeeAllTemplate,
    GroupArtistTemplate,
    ButtonComponent_1Vue,
    CreatePost,
    PostTemplate,
    AddArtist,
  },
  methods: {
    CreateNewPost() {
      CreatePost.methods.OpenModal();
    },
    AddArtist() {
      AddArtist.methods.OpenModal();
    }
  },
};
</script>
