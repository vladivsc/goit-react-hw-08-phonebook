export const getContacts = ({ contacts }) => contacts.items;

export const getFilter = ({ filter }) => filter;

export const isUserLogin = ({ auth }) => auth.isLogin;

export const getUser = ({ auth }) => auth.user;

export const selectAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
