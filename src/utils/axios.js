import axios from "axios";
import SourceJson from "@Jsons/Source.json";
import jwt_decode from "jwt-decode";

export async function decodeJwt(token) {
  let decoded = jwt_decode(token);
  return JSON.stringify(decoded);
}

/* Auth */

export async function Register(username, email, password) {
  const response = await axios // new Date
    .post(SourceJson.Auth.register, {
      Name: username,
      Email: email,
      Password: password,
    })
    return response;
}

export async function Auth(email, password) {
  const response = await axios
    .post(SourceJson.Auth.login, {
      Email: email,
      Password: password,
    });
  return response;
}

/* Auth */

/* Group */

export async function GroupList(index, size) {
  const response = await axios.get(SourceJson.Public.band + "?PageIndex=" + index + "&PageSize=" + size);
  return response;
}

export async function Join(user, group) {
  const response = await axios.put(SourceJson.Public.band_join + "/" + group + "/user/" + user);
  return response;
}

export async function MyJoinGroup(user, index, size) {
  const response = await axios.get(SourceJson.Public.band_user + user + "/user/bands?PageIndex=" + index + "&PageSize=" + size);
  return response;
}

/* Group */

/* Playlist */

export async function Playlist() {
  const response = await axios.get(SourceJson.Public.playlist);
  return response;
}

/* Playlist */