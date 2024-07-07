<script setup>
import SearchComponent from '../../components/input/Search.vue';
import GroupTemplate from '../../components/group/templates/GroupTemplate.vue';
import ButtonComponent_1 from '../../components/button/Button_1.vue';
import { useGroupStore } from '../../stores/useGroupStore.js';

const groupStore = useGroupStore();

const joinGroup = async (groupId) => {
  await groupStore.joinGroup(groupId);

  this.$router.push({
    name: 'group',
    params: { groupId },
  });
};
</script>

<template>
  <section>
    <ButtonComponent_1 link="group-create" name="Create new group" :flag="true" @click="MyJoinGroup" />
    <SearchComponent :placeholder="'Search group'"></SearchComponent>
    <div class="mt-5">
      <GroupTemplate
        v-for="group in groupStore.groups"
        :key="group.id"
        :name="group.name"
        :folovers="group.countFollowers"
        :creator_name="group.creator"
        :description="group.fullInfo"
        :img_url="group.avatar"
        :flag="'Join'"
        @click="joinGroup(group.id)"
      />
    </div>
  </section>
</template>
