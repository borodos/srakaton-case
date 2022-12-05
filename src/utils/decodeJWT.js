export const decodeJWT = (token) => {
  if (token) {
    const userDataFromToken = token.match(/(.*)\.(.*)\.(.*)/);
    if (userDataFromToken) {
      return JSON.parse(atob(userDataFromToken[2]));
    }
  }
  return {};
};
