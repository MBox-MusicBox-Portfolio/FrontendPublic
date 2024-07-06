import {defineStore} from "pinia";
import {decodeJwt, GroupList, Join, MyJoinGroup, Open,} from "@Utils/axios";
import {GetItem} from "@Utils/localstorage";

export const GroupStore = defineStore("group-store", {
  actions: {
    /**
     * 
     * @returns 
     */
    async AllGroupList() {
      const gl = await GroupList(1, 5);
      return gl.data.value[0];
    },

    /**
     * 
     * @returns 
     */
    async JoinGroupList() {
      if (GetItem("JWTKey")) {
        const decode = await decodeJwt(GetItem("JWTKey"));
        const decode_parse = JSON.parse(decode);

        const mjg = await MyJoinGroup(decode_parse.Id, 1, 5);
        return mjg.data.value[0];
      }
    },

    /**
     * 
     * @param id 
     */
    async Join(id) {
      if (GetItem("JWTKey")) {
        const decode = await decodeJwt(GetItem("JWTKey"));
        const decode_parse = JSON.parse(decode);

        await Join(decode_parse.Id, id);
      }
    },

    /**
     * 
     */
    async Open() {
      if (GetItem("JWTKey")) {
        const decode = await decodeJwt(GetItem("JWTKey"));
        const decode_parse = JSON.parse(decode);

        await Open(decode_parse.Id);
      }
    },

    /**
     * 
     * @param id 
     * @returns 
     */
    async Group(id) {
      const response = await GroupList(1, 5);
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
