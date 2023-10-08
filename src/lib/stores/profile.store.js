import { defineStore } from "pinia";
import localStorage from '../Service/LocalStorage/localstorage';

export const ProfileStore = defineStore('', {
    state: () => {
        return {
            id: String, // JWT
        }
    },
    actions: {
        async CheckUser() {
            const jwt = localStorage.GetItem('JWTKey');
            if (jwt === undefined) {
                this.SetId('false');
                console.log("false")
            }else {
                this.SetId('true');
                console.log('true');
            }
        },
        async SetId(id) {
            this.id = id;
        },
        async GetId() {
            return this.id;
        }
    }
});