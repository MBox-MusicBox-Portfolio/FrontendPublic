import { defineStore } from 'pinia';
import { HttpClient } from '../utils/HttpClient.js';
import { useAuthStore } from './useAuthStore.js';

const DEFAULT_PAGE_SIZE = 5;

export const useGroupStore = defineStore('group-store', () => {
  const auth = useAuthStore();
  const user = auth.user;

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
  const getGroupList = async (id) => {
    const response = await HttpClient.getGroupList(1, 5);
    const groupsResponse = response.data.value.at(0);

    const groups = [];

    for (const groupResponse of groupsResponse) {
      if (groupResponse.id === id) {
        groups.push({
          id: groupResponse.id,
          name: groupResponse.name,
          avatar: groupResponse.avatar,
          producer: groupResponse.producer,
          description: groupResponse.fullInfo,
          countFollowers: groupResponse.countFollowers,
          createdAt: groupResponse.createdAt,
        });
      }
    }

    return groups;
  };

  return {
    getGroupList,
    joinGroup,
    openGroup,
    joinGroupList,
  };
});
