import axios from "axios";
import SourceJson from "@Jsons/Source.json";
import jwt_decode from "jwt-decode";

export async function decodeJwt(token) {
  let decoded = jwt_decode(token);
  return JSON.stringify(decoded);
}

/**
 * Регистрация пользователя
 * @param username 
 * @param email
 * @param password
 * @returns
*/
export async function UserRegister(username, email, password) {
  try {
    const response = await axios // new Date
    .post(SourceJson.Auth.register, {
      Name: username,
      Email: email,
      Password: password,
    })
    return response;
  }catch (err) {
    return `Axios Error ${err}`
  }
}

/**
 * Авторизация пользователя
 * @param email 
 * @param password 
 * @returns 
 */
export async function UserAuth(email, password) {
  try {
    const response = await axios
    .post(SourceJson.Auth.login, {
      Email: email,
      Password: password,
    });
    return response;
  }catch (err) {
    return `Axios Error ${err}`
  }
}

/**
 * Возвращает массив групп
 * @param index 
 * @param size 
 * @returns 
 */
export async function GroupList(index, size) {
  try {
    const response = await axios.get(SourceJson.Bands.GetBands + "?PageIndex=" + index + "&PageSize=" + size);
    return response;
  }catch (err) {
    return `Axios Error ${err}`
  }
}
/**
 * Присоединение пользователя к группе
 * @param user 
 * @param group 
 * @returns 
 */
export async function Join(user, group) {
  try {
    const response = await axios.put(SourceJson.Bands.JoinBands + "/" + group + "/user/" + user);
    return response;
  }catch (err) {
    return `Axios Error ${err}`
  }
}

/**
 * Открытие группы и проверка состоит ли пользователь в данной группе
 * @param user 
 * @returns 
 */
export async function Open(user) {
  try {
    const response = await axios.get(SourceJson.Bands.GetUserBands + "/" + user + "/user/bands");
    return response;
  }catch (err) {
    return `Axios Error ${err}`
  }
}

/**
 * Массив групп к которому присоединился пользователь
 * @param user 
 * @param index 
 * @param size 
 * @returns 
 */
export async function MyJoinGroup(user, index, size) {
  try {
    const response = await axios.get(SourceJson.GetUserBands + user + "/user/bands?PageIndex=" + index + "&PageSize=" + size);
    return response;
  }catch (err) {
    return `Axios Error ${err}`
  }
}

/**
 * Массив плейлистов
 * No Delete
 * @returns 
 */
/*export async function Playlist() {
  const response = await axios.get(SourceJson.Public.playlist);
  return response;
}*/