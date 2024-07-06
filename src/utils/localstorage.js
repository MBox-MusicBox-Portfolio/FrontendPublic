
export function SetItem(key,value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function RemoveItem(key) {
    localStorage.removeItem(key);
}

export function GetItem(key) {
    return localStorage.getItem(key) ?? null;
}