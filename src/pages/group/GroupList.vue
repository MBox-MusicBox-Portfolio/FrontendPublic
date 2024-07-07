<template>
  <section>
    <ButtonComponent_1 link="group-create" name="Create new group" :flag="true" @click="MyJoinGroup" />
    <SearchComponent :placeholder="'Search group'"></SearchComponent>
    <div class="mt-5">
      <GroupTemplate
        v-for="group in groupList"
        :key="group.id"
        :name="group.name"
        :folovers="group.countFollowers"
        :creator_name="group.creator"
        :description="group.fullInfo"
        :img_url="group.avatar"
        :flag="'Join'"
        @click="JoinGroup(group.id)"
      />
    </div>
  </section>
</template>

<script>
import SearchComponent from '../../components/input/Search.vue';
import GroupTemplate from '../../components/group/templates/GroupTemplate.vue';
import ButtonComponent_1 from '../../components/button/Button_1.vue';
import { useGroupStore } from '../../stores/useGroupStore.js';

export default {
  components: {
    SearchComponent,
    GroupTemplate,
    ButtonComponent_1,
  },
  data() {
    return {
      groupList: [],
    };
  },
  async mounted() {
    await this.FethGroupList();
  },
  methods: {
    async FethGroupList() {
      const gs = useGroupStore();
      let value = await gs.getAllGroupList();
      this.groupList = value;
    },
    async JoinGroup(groupId) {
      const groupStore = useGroupStore();
      await groupStore.joinGroup(groupId);
      this.$router.push({
        name: 'group',
        params: { groupId: groupId },
      });
    },
  },
};
</script>
