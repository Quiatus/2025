const CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LENGTH = 10

export function generateRandomString() {
  let result = '';
  
  for (let i = 0; i < LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * CHARSET.length);
    result += CHARSET[randomIndex];
  }
  
  return result;
};
