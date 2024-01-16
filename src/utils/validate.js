export const validateForm = (email, password, signUp, name = "") => {
  const isEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(password);

  if (!isEmail) return "Email Id is not valid";
  if (!isPassword) return "password is not valid";
  if (signUp) {
    const isName = /^(?=.{3,})[A-Za-z]+(?:\s[A-Za-z]+)*$/g.test(name);
    if (!isName) return "name is not valid";
  }
  return null;
};
