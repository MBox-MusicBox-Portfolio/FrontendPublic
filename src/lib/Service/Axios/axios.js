import axios from "axios";
import SourceJson from "./Source.json";
import jwt_decode from "jwt-decode";

/* Auth */

export async function RegisterAcc(username, email, password) {
  const request = await axios // new Date
    .post(SourceJson.Auth.register, {
      Name: username,
      Email: email,
      Password: password,
    })
    return request;
}

export async function AuthorizationAcc(email, password) {
  const request = await axios
    .post(SourceJson.Auth.login, {
      Email: email,
      Password: password,
    });
  return request;
}

/* Auth */

export async function decodeJwt(token) {
  let decoded = jwt_decode(token);
  return JSON.stringify(decoded);
}

/* Group */

export async function GroupList(index, size) {
  const request = await axios
  .get(SourceJson.Public.band + "?PageIndex=" + index + "&PageSize=" + size);
  return request;
}

export async function Join(user, group) {
  const request = await axios.put(SourceJson.Public.band_join + "/" + group + "/user/" + user);

  return request;
}

/* Group */