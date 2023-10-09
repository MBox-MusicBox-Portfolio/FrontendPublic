import { defineStore } from "pinia";

export const GroupStore = defineStore('group-store', {
    state: () => {
        return {
            
        }
    },
    actions: {
        CreateGroup(data) {
            const createDataForm = {
                "Name": data.name,
                "MusicianArr": data.musician,
                "Description": data.desc
            }
        },
        GroupList() {
            
        },
        Join(data) {

        },
        
        CreatePost(data) {
            const postDataForm = {
                "Title": data.title,
                "Description": data.desc,
                "Flag": data.flag,
                "Source": data.source
            }
        },
        PublicMusic(data) {

        },
    }
});