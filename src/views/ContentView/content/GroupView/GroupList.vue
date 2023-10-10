<template>
  <section>
    <ButtonComponent_1
      link="group-create"
      name="Create new group"
      :flag="true"
    />
    <SearchComponent :placeholder="'Search group'"></SearchComponent>
    <div class="mt-5">
      <!-- List -->
      <GroupTemplate
        v-for="group in groupList"
        :key="group.id"
        :name="group.name"
        :folovers="group.countFollowers"
        :creator_name="group.creator"
        :description="group.description"
        :img_url="group.avatar"
        @click="joinGroup(group.id, group.name)"
      />
    </div>
  </section>
</template>

<script>
import SearchComponent from "../../../../components/input/SearchComponent.vue";
import GroupTemplate from "../../../../components/group/GroupTemplate.vue";
import ButtonComponent_1 from "../../../../components/Button/ButtonComponent_1.vue";
import { GroupStore } from "../../../../lib/stores/group.store";

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
      const gl = GroupStore();
      let value = await gl.GroupList();
      this.groupList = value;
    },
    async joinGroup(groupId, groupName) {
      const gl = GroupStore();
      await gl.Join(groupId);
      this.$router.push({
        name: "group",
        params: { groupId: groupId, groupName: groupName },
      });
    },
  },
  mounted() {
    this.FethGroupList();
  },
};
</script>
