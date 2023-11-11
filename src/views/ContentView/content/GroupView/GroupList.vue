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
        :flag="gl_flag()"
        @click="JoinGroup(group.id)"
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
      value_mjg: []
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

      this.value_mjg = await gs.JoinGroupList();
      this.groupList = value;
      console.log(this.groupList);
      console.log(this.value_mjg);
    },
    async JoinGroup(groupId) {
      const gl = GroupStore();
      await gl.Join(groupId);
      this.$router.push({
        name: "group",
        params: { groupId: groupId },
      });
    },
    gl_flag() {
      if (this.groupList.id === this.value_mjg.id) return false;
      else return true;  
    }
  },
  async mounted() {
    await this.FethGroupList();
  },
};
</script>
