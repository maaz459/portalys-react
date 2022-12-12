export const saveToken = (token, type, time, setCookie) => {
  let expires = new Date();
  console.log(expires.getTime());
  expires.setTime(expires.getTime() + time * 1000);
  setCookie(type, token, {
    path: "/",
    expires,
  });
};
