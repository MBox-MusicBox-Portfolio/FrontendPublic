import { defineStore } from "pinia";
import { AuthorizationAcc } from "../Service/Axios/axios.js";
import { SetItem } from "../Service/LocalStorage/localstorage.js";

export const AuthorizationStore = defineStore("auth", {
  state: () => ({}),
  actions: {
    async authorization(data) {
      const authorizationDataForm = {
        Email: data.email,
        Password: data.password,
      };

      const request = await AuthorizationAcc(
        authorizationDataForm["Email"],
        authorizationDataForm["Password"]
      );
      console.log(JSON.stringify(request));
      if (request.data.success === true) {
        SetItem("JWTKey",request.data.token);
      }
    },
  },
});
