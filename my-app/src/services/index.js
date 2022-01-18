const getIsSignIn = () => {
  const userName = localStorage.getItem('userName');
  return !!userName;
};
export default getIsSignIn;
