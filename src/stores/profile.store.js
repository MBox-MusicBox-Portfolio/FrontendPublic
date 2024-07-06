import { defineStore } from "pinia";
import { GetItem } from     "@Utils/localstorage";
import { decodeJwt } from   "@Utils/axios";

export const ProfileStore = defineStore("", {
  state: () => {
    return {
      username: String,
      img_url: String,
      img_background: String,
    };
  },
  actions: {
    async getProfileComponent() {
      if (GetItem("JWTKey")) {
        const decode = await decodeJwt(GetItem("JWTKey"));
        const parsed = JSON.parse(decode);
        this.username = parsed.Name;
      }
    },
  },
});
