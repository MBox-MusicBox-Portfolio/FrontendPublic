import axios from 'axios';
import jwt_decode from 'jwt-decode';
import SourceJson from '../jsons/Source.json';

function formatHttpError(err) {
  return `Axios Error: ${err}`;
}

export async function decodeJwt(token) {
  const decoded = jwt_decode(token);
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
    return await axios // new Date
      .post(SourceJson.Auth.register, {
        Name: username,
        Email: email,
        Password: password,
      });
  } catch (err) {
    return formatHttpError(err);
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
    return await axios.post(SourceJson.Auth.login, {
      Email: email,
      Password: password,
    });
  } catch (err) {
    return formatHttpError(err);
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
    return await axios.get(SourceJson.Bands.GetBands + '?PageIndex=' + index + '&PageSize=' + size);
  } catch (err) {
    return formatHttpError(err);
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
    return await axios.put(SourceJson.Bands.JoinBands + '/' + group + '/user/' + user);
  } catch (err) {
    return formatHttpError(err);
  }
}

/**
 * Открытие группы и проверка состоит ли пользователь в данной группе
 * @param user
 * @returns
 */
export async function Open(user) {
  try {
    return await axios.get(SourceJson.Bands.GetUserBands + '/' + user + '/user/bands');
  } catch (err) {
    return formatHttpError(err);
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
    return await axios.get(SourceJson.GetUserBands + user + '/user/bands?PageIndex=' + index + '&PageSize=' + size);
  } catch (err) {
    return formatHttpError(err);
  }
}

// TODO: add request for playlist
