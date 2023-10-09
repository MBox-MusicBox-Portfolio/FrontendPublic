<template>
  <section>
    <ButtonComponent_1 link="group-create" name="Create new group" :flag="true"/>
    <SearchComponent :placeholder="'Search group'"></SearchComponent>
    <div class='mt-5'>
      <!-- List -->
      <GroupTemplate v-for="item in 13" :key="item"
        :name="'Lil Peep'"
        :folovers="'173k'"
        :creator_name="'Lil Peep'"
        :description="'This is a group in memory of Gustav Elijah Åhr (Lil Peep) He was such an inspiration to so many people ...'"
      />
    </div>
  </section>
</template>

<script>
import SearchComponent from "../../../../components/input/SearchComponent.vue";
import GroupTemplate from "../../../../components/group/GroupTemplate.vue";
import ButtonComponent_1 from "../../../../components/Button/ButtonComponent_1.vue";

export default {
  components: {
    SearchComponent,
    GroupTemplate,
    ButtonComponent_1
  },
};
</script>

<style></style>
