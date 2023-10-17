import { defineStore } from "pinia";
import { GroupList, Join, decodeJwt, MyJoinGroup } from "../Service/Axios/axios";
import { GetItem } from "../Service/LocalStorage/localstorage";

export const GroupStore = defineStore("group-store", {
  actions: {
    async GroupList() {
      const request = await GroupList(1, 5);
      const value = request.data.value[0];
      const groupList = [];
      console.log(value);
      for (let i = 0; i < value.length; i++) {
        const groupValue = value[i];
        const group = {
          id: groupValue.id,
          name: groupValue.name,
          avatar: groupValue.avatar,
          producer: groupValue.producer,
          description: groupValue.fullInfo,
          countFollowers: groupValue.countFollowers,
        };
        groupList.push(group);
      }
      return groupList;
    },
    async Join(id) {
      if (GetItem("JWTKey")) {
        const decode = await decodeJwt(GetItem("JWTKey"));
        const decode_parse = JSON.parse(decode);
        await Join(decode_parse.Id, id);
      }
    },
    async Group(id) {
      const request = await GroupList(1, 5);
      const value = request.data.value[0];
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
    async MyJoinGroup(index, size) {
      if (GetItem("JWTKey")) {
        const decode = await decodeJwt(GetItem("JWTKey"));
        const decode_parse = JSON.parse(decode);
        const request = await MyJoinGroup(decode_parse.Id, index, size);
        return request;
      }
    }
  },
});
