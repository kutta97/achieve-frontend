export const setStorage = (key: string, value: string) => {
  if (typeof window === 'undefined') {
    localStorage.setItem(key, value);
  }
};

export const getStorage = (key: string) => {
  if (typeof window === 'undefined') {
    return null;
  }
  return localStorage.getItem(key);
};
