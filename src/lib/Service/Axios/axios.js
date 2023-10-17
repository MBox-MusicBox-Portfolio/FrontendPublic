import axios from "axios";
import SourceJson from "./Source.json";
import jwt_decode from "jwt-decode";

export async function decodeJwt(token) {
  let decoded = jwt_decode(token);
  return JSON.stringify(decoded);
}

/* Auth */

export async function Register(username, email, password) {
  const request = await axios // new Date
    .post(SourceJson.Auth.register, {
      Name: username,
      Email: email,
      Password: password,
    })
    return request;
}

export async function Auth(email, password) {
  const request = await axios
    .post(SourceJson.Auth.login, {
      Email: email,
      Password: password,
    });
  return request;
}

/* Auth */

/* Group */

export async function GroupList(index, size) {
  const request = await axios
  .get(SourceJson.Public.band + "?PageIndex=" + index + "&PageSize=" + size);
  return request;
}

// http://localhost/api/public/albums?PageIndex=1&PageSize=1

export async function Join(user, group) {
  const request = await axios.put(SourceJson.Public.band_join + "/" + group + "/user/" + user);
  return request;
}

export async function MyJoinGroup(user, index, size) {
  const request = await axios.get(SourceJson.Public.band_user + user + "/user/band?PageIndex=" + index + "&PageSize=" + size);
  return request;
}

/* Group */

/* Playlist */

export async function Playlist() {
  const request = await axios.get(SourceJson.Public.playlist);
  return request;
}

/* Playlist */