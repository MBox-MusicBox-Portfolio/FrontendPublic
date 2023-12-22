import { defineStore } from "pinia";
import {
  GroupList,
  Join,
  Open,
  decodeJwt,
  MyJoinGroup,
} from                      "@Utils/axios";
import { GetItem } from     "@Utils/localstorage";

export const GroupStore = defineStore("group-store", {
  actions: {
    /**
     * 
     * @returns 
     */
    async AllGroupList() {
      const gl = await GroupList(1, 5);
      const value_gl = gl.data.value[0];
      return value_gl;
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
        const value_mjg = mjg.data.value[0];
        return value_mjg;
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
      const value = response.data.value[0];
      const groupList = [];

      for (let i = 0; i < value.length; i++) {
        const groupValue = value[i];
        if (groupValue.id === id) {
          const group = {
            id: groupValue.id,
            name: groupValue.name,
            avatar: groupValue.avatar,
            producer: groupValue.producer,
            description: groupValue.fullInfo,
            countFollowers: groupValue.countFollowers,
            createdAt: groupValue.createdAt,
          };
          groupList.push(group);
        }
      }
      return groupList;
    },
  },
});
