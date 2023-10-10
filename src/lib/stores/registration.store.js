import { defineStore } from "pinia";
import { RegisterAcc } from "../Service/Axios/axios.js";

export const RegisterStore = defineStore('register', {
    actions: {
        async registration(data) {

            const registerDataForm = {
                "Email": data.email,
                "Name": data.name,
                "Password": data.password,
            };

            const request = await RegisterAcc(
                registerDataForm["Name"], 
                registerDataForm["Email"], 
                registerDataForm["Password"],
            );
            console.log(JSON.stringify(request));
        },
    }
});