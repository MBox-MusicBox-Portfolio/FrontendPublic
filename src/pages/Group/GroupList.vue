<template>
  <section>
    <ButtonComponent_1
      link="group-create"
      name="Create new group"
      :flag="true"
      @click="MyJoinGroup"
    />
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
import SearchComponent from   "@Components/input/SearchComponent.vue";
import GroupTemplate from     "@Components/group/GroupTemplate.vue";
import ButtonComponent_1 from "@Components/Button/ButtonComponent_1.vue";
import { GroupStore } from    "@Stores/group.store";

export default {
  data() {
    return {
      groupList: [],
    };
  },
  components: {
    SearchComponent,
    GroupTemplate,
    ButtonComponent_1,
  },
  methods: {
    async FethGroupList() {
      const gs = GroupStore();
      let value = await gs.AllGroupList();
      this.groupList = value;
    },
    async JoinGroup(groupId) {
      const groupStore = GroupStore();
      /*const groupJoin ;
      const groupOpen ;*/
      await gl.Join(groupId);
      this.$router.push({
        name: "group",
        params: { groupId: groupId },
      });
    },
  },
  async mounted() {
    await this.FethGroupList();
  },
};
</script>
