import axios from 'axios';
import SourceJson from '../assets/jsons/Source.json';

function formatHttpError(err) {
  // TODO: consider get rid of it and on http error show toast with error details
  return `Axios Error: ${err}`;
}

export class HttpClient {
  /**
   * Регистрация пользователя
   * @param username
   * @param email
   * @param password
   * @returns
   */
  static async signUpUser(username, email, password) {
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
  static async authenticateUser(email, password) {
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
  static async getGroupList(index, size) {
    try {
      return await axios.get(SourceJson.Bands.GetBands + '?PageIndex=' + index + '&PageSize=' + size);
    } catch (err) {
      return formatHttpError(err);
    }
  }

  static async getGroup(id) {
    try {
      return await axios.get(SourceJson.Bands.GetBands + '?Id=' + id);
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
  static async joinUserToGroup(user, group) {
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
  static async openUserGroup(user) {
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
  static async getJoinedGroups(user, index, size) {
    try {
      return await axios.get(
        SourceJson.Bands.GetUserBands + user + '/user/bands?PageIndex=' + index + '&PageSize=' + size,
      );
    } catch (err) {
      return formatHttpError(err);
    }
  }

  // TODO: add request for playlist
}
