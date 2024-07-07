import { defineStore } from 'pinia';
import { decodeJwt } from '../utils/axios.js';
import { LocalStorage } from '../utils/LocalStorage.js';

export const ProfileStore = defineStore('profile', {
  state: () => {
    return {
      username: String,
      img_url: String,
      img_background: String,
    };
  },
  actions: {
    async getProfileComponent() {
      if (LocalStorage.GetItem(LocalStorage.JWTKey)) {
        const decode = await decodeJwt(LocalStorage.GetItem(LocalStorage.JWTKey));
        const parsed = JSON.parse(decode);
        this.username = parsed.Name;
      }
    },
  },
});
