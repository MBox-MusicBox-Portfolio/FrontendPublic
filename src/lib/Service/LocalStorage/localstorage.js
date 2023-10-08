
export function SetItem(key,value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function RemoveItem(key) {
    localStorage.removeItem(key);
}

export function GetItem(key) {
    var value = localStorage.getItem(key);
    if (value !== null) {
        return value;
    }
    return null;
}