import { defineStore } from 'pinia';
import { decodeJwt, getGroupList, joinUserToGroup, getJoinedGroups, openUserGroup } from '../utils/axios.js';
import { LocalStorage } from '../utils/LocalStorage.js';

export const GroupStore = defineStore('group-store', {
  actions: {
    /**
     *
     * @returns
     */
    async AllGroupList() {
      const gl = await getGroupList(1, 5);
      return gl.data.value[0];
    },

    /**
     *
     * @returns
     */
    async JoinGroupList() {
      if (LocalStorage.GetItem('JWTKey')) {
        const decode = await decodeJwt(LocalStorage.GetItem('JWTKey'));
        const decode_parse = JSON.parse(decode);

        const mjg = await getJoinedGroups(decode_parse.Id, 1, 5);
        return mjg.data.value[0];
      }
    },

    /**
     *
     * @param id
     */
    async Join(id) {
      if (LocalStorage.GetItem('JWTKey')) {
        const decode = await decodeJwt(LocalStorage.GetItem('JWTKey'));
        const decode_parse = JSON.parse(decode);

        await joinUserToGroup(decode_parse.Id, id);
      }
    },

    /**
     *
     */
    async Open() {
      if (LocalStorage.GetItem('JWTKey')) {
        const decode = await decodeJwt(LocalStorage.GetItem('JWTKey'));
        const decode_parse = JSON.parse(decode);

        await openUserGroup(decode_parse.Id);
      }
    },

    /**
     *
     * @param id
     * @returns
     */
    async Group(id) {
      const response = await getGroupList(1, 5);
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
    },
  },
});
