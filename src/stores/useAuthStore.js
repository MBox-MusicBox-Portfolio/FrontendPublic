import { ref } from 'vue';
import { defineStore } from 'pinia';
import { authenticateUser, signUpUser } from '../utils/axios.js';
import { LocalStorage } from '../utils/LocalStorage.js';

export const useAuthStore = defineStore('auth', () => {
  const errorMessage = ref(null);
  const userToken = ref(null);

  const signIn = async (data) => {
    try {
      const userAuthResponse = await authenticateUser(data.email, data.password);

      if (userAuthResponse.status === 200) {
        this.errorMessage = userAuthResponse.statusText;
        LocalStorage.SetItem(LocalStorage.JWTKey, userAuthResponse.data.token);
        userToken.value = userAuthResponse.data.token;
        window.location.reload(); // TODO: use vue-router for redirection
      }

      if (userAuthResponse.status === 202) {
        this.errorMessage = userAuthResponse.data.value.email;
      }
    } catch (error) {
      console.error(error);

      if (error.response.status === 404) {
        if (error.response.data.value.email !== undefined) {
          this.errorMessage = error.response.data.value.email;
        }

        if (error.response.data.value.password !== undefined) {
          this.errorMessage = error.response.data.value.password;
        }
      }
    }
  };

  const signUp = async (data) => {
    try {
      const userRegisterResponse = await signUpUser(data.name, data.email, data.password);

      if (userRegisterResponse.status === 201) {
        this.errorMessage = userRegisterResponse.statusText;
        LocalStorage.SetItem(LocalStorage.JWTKey, userRegisterResponse.data.token);
        userToken.value = userRegisterResponse.data.token;
        window.location.reload(); // TODO: use vue-router for redirection
      }
    } catch (error) {
      console.error(error);

      if (error.response.status === 400) {
        if (error.response.data.value.email) {
          this.errorMessage = error.response.data.value.email;
        }

        if (error.response.data.value.password) {
          this.errorMessage = error.response.data.value.password;
        }
      }
    }
  };

  return { errorMessage, signUp, signIn };
});
