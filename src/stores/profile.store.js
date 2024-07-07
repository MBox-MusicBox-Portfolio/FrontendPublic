import { defineStore } from 'pinia';
import { decodeJwt } from '../utils/axios.js';
import { GetItem } from '../utils/localstorage.js';

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
      if (GetItem('JWTKey')) {
        const decode = await decodeJwt(GetItem('JWTKey'));
        const parsed = JSON.parse(decode);
        this.username = parsed.Name;
      }
    },
  },
});
