import { defineStore } from 'pinia';
import { HttpClient } from '../utils/HttpClient.js';
import { useAuthStore } from './useAuthStore.js';
import { computed, onMounted, ref } from 'vue';

const DEFAULT_PAGE_SIZE = 5;

export const useGroupStore = defineStore('group-store', () => {
  const auth = useAuthStore();
  const user = auth.user;

  const groups = ref([]);
  const selectedGroup = computed(() => groups.value.at(0));

  const joinGroupList = async () => {
    if (user) {
      const response = await HttpClient.getJoinedGroups(user.Id, 1, DEFAULT_PAGE_SIZE);
      return response.data.value[0];
    }
  };
  const joinGroup = async (id) => {
    if (user) {
      await HttpClient.joinUserToGroup(user.Id, id);
    }
  };
  const openGroup = async () => {
    if (user) {
      await HttpClient.openUserGroup(user.Id);
    }
  };
  const getGroup = async (id) => {
    const response = await HttpClient.getGroup(id);
    const groupResponse = response.data.value;
    groups.value.push({
      id: groupResponse.id,
      name: groupResponse.name,
      avatar: groupResponse.avatar,
      producer: groupResponse.producer,
      description: groupResponse.fullInfo,
      countFollowers: groupResponse.countFollowers,
      createdAt: groupResponse.createdAt,
    });
  };
  const getGroupList = async () => {
    const response = await HttpClient.getGroupList();
    const groupsResponse = response.data.value;

    for (const groupResponse of groupsResponse) {
      groups.value.push({
        id: groupResponse.id,
        name: groupResponse.name,
        avatar: groupResponse.avatar,
        producer: groupResponse.producer,
        description: groupResponse.fullInfo,
        countFollowers: groupResponse.countFollowers,
        createdAt: groupResponse.createdAt,
      });
    }
  };

  onMounted(async () => {
    const groupIdParam = this.$route.params.groupId;

    if (groupIdParam) {
      await getGroup(this.$route.params.groupId);
    } else {
      await getGroupList();
    }
  });

  return {
    getGroup,
    joinGroup,
    openGroup,
    joinGroupList,
    groups,
    selectedGroup,
  };
});
