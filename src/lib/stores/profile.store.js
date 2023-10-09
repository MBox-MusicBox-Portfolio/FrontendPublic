import { defineStore } from "pinia";
import { GetItem } from "../Service/LocalStorage/localstorage";
import { decodeJwt } from "../Service/Axios/axios";

export const ProfileStore = defineStore("", {
  state: () => {
    return {
      username: String,
      img_url: String,
      img_background: String,
    };
  },
  actions: {
    async get_profile_component() {
      if (GetItem("JWTKey")) {
        let decode = await decodeJwt(GetItem("JWTKey"));
        let decode_parse = JSON.parse(decode);
        this.username = decode_parse.Name;
      }
    },
  },
});
