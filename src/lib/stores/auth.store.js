import { defineStore } from "pinia";
import { Auth } from "../Service/Axios/axios.js";
import { Register } from "../Service/Axios/axios.js";
import { SetItem } from "../Service/LocalStorage/localstorage.js";
import { Modal } from "../../../node_modules/bootstrap/dist/js/bootstrap.esm";

export const AuthStore = defineStore("auth", {
  state: () => {
    return {
      error_message: "",
    };
  },
  actions: {
    async SignIn(data) {
      const authorizationDataForm = {
        Email: data.email,
        Password: data.password,
      };

      await Auth(
        authorizationDataForm["Email"],
        authorizationDataForm["Password"]
      )
        .then((test) => {
          if (test.status === 200) {
            this.error_message = test.statusText;
            SetItem("JWTKey",test.data.token);
            window.location.reload();
          }
          if (test.status === 202) this.error_message = test.data.value.email;
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 404) {
            if (error.response.data.value.email != undefined)
              this.error_message = error.response.data.value.email;
            if (error.response.data.value.password != undefined)
              this.error_message = error.response.data.value.password;
          }
        });
    },
    async SignUp(data) {
      const registerDataForm = {
        Email: data.email,
        Name: data.name,
        Password: data.password,
      };

      await Register(
        registerDataForm["Name"],
        registerDataForm["Email"],
        registerDataForm["Password"]
      )
      .then((test) => {
        if (test.status === 201) {
          this.error_message = test.statusText;
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          if (error.response.data.value.email != undefined)
            this.error_message = error.response.data.value.email;
          if (error.response.data.value.Password != undefined)
            this.error_message = error.response.data.value.Password;
        }
      });

    },
  },
});
