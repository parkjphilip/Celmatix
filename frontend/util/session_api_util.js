export const login = (user) => {
  return $.ajax({
    method: 'post',
    url: '/api/session',
    data: {
      user: {
        email: user.email,
        password: user.password
      }
    }
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'post',
    url: '/api/users',
    data: {
      user: {
        email: user.email,
        password: user.password
      }
    }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/api/session'
  });
};