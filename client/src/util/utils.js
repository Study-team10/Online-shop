export const isObject = obj => {
  if (obj !== null && typeof obj == "object") {
    return true;
  }
  return false;
};

const decodeJwt = token => {
  if (!token) {
    return null;
  }
  console.log(token);
  let jwt = token.split(".")[1];
  if (jwt) {
    jwt = jwt.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(jwt));
  }
  return false;
};

export const getRole = data => {
  const decodedToken = decodeJwt(data);
  if (!decodedToken) {
    return null;
  }
  return decodedToken.role;
};

export const getId = data => {
  const decodedToken = decodeJwt(data);
  if (!decodedToken) {
    return null;
  }
  return decodedToken.id;
};

export const getStep = data => {
  const decodedToken = decodeJwt(data);
  if (!decodedToken) {
    return null;
  }
  return decodedToken.step;
};

export const getEmail = data => {
  const decodedToken = decodeJwt(data);
  if (!decodedToken) {
    return null;
  }
  return decodedToken.email;
};

export function setNestedObjectValues(
  object,
  value,
  visited = new WeakMap(),
  response = {}
) {
  for (let k of Object.keys(object)) {
    const val = object[k];
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }
  return response;
}
