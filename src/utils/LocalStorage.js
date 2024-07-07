export class LocalStorage {
  static JWTKey = 'JWTKey';

  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

  static getItem(key) {
    return localStorage.getItem(key) ?? null;
  }
}
