import { defineStore } from "pinia";
import { RegisterAcc } from "../Service/Axios/axios.js";

export const RegisterStore = defineStore('register', {
    actions: {
        async registration(data) {

            const registerDataForm = {
                "Email": data.email,
                "Name": data.name,
                "Password": data.password,
                "Birthday": data.birthday
            };

            const request = await RegisterAcc(
                registerDataForm["Name"], 
                registerDataForm["Email"], 
                registerDataForm["Password"],
                registerDataForm["Birthday"]
            );
        },
    }
});