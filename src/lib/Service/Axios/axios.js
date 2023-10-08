import axios from "axios";
import SourceJson from "./Source.json";

export async function RegisterAcc(username, email, password) {
  const request = await axios
    .post(SourceJson.register, {
      Name: username,
      Email: email,
      Password: password,
    })
    console.log(SourceJson.register);
    console.log(request);
    return request;
}

export async function AuthorizationAcc(email, password) {
  const request = await axios
    .post(SourceJson.login, {
      Email: email,
      Password: password,
    });
  return request;
}

export async function GetGroupList() {
  const request = await axios
  .get(SourceJson.GroupList, {
    
  });
  return request;
}