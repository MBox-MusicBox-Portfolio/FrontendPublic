export class LocalStorage {
  static JWTKey = 'JWTKey';

  static SetItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static RemoveItem(key) {
    localStorage.removeItem(key);
  }

  static GetItem(key) {
    return localStorage.getItem(key) ?? null;
  }
}
