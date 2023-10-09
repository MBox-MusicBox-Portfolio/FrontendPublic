import axios from "axios";
import SourceJson from "./Source.json";
import jwt_decode from "jwt-decode";

export async function RegisterAcc(username, email, password) {
  const request = await axios
    .post(SourceJson.register, {
      Name: username,
      Email: email,
      Password: password,
    })
    console.log(request);
    return request;
}

export async function AuthorizationAcc(email, password) {
  // new Date
  const request = await axios
    .post('http://localhost/api/auth/login', {
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

export async function decodeJwt(token) {
  let decoded = jwt_decode(token);
  return JSON.stringify(decoded);
}