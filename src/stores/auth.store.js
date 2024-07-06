import { defineStore } from    "pinia";
import { UserAuth, UserRegister } from "@Utils/axios.js";
import { SetItem } from        "@Utils/localstorage.js";

export const AuthStore = defineStore("auth", {
  state: () => {
    return {
      errorMessage: "",
    };
  },
  actions: {
    async SignIn(data) {
      try {
        const userAuthResponse = await UserAuth(
          data.email,
          data.password,
        );

        if (userAuthResponse.status === 200) {
          this.errorMessage = userAuthResponse.statusText;
          SetItem("JWTKey", userAuthResponse.data.token);
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
    },
    async SignUp(data) {
      try {
        const userRegisterResponse = await UserRegister(
          data.name,
          data.email,
          data.password,
        )

        if (userRegisterResponse.status === 201) {
          this.errorMessage = userRegisterResponse.statusText;
          window.location.reload(); // TODO: use vue-router for redirection
        }
      } catch (error) {
        console.error(error);

        if (error.response.status === 400) {

          if (error.response.data.value.email !== undefined) {
            this.errorMessage = error.response.data.value.email;
          }

          if (error.response.data.value.Password !== undefined) {
            this.errorMessage = error.response.data.value.Password;
          }
        }
      }
    },
  },
});
