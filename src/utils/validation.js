export const loginDataValidation = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
// export const loginFormNameValidation = (name) => {
//   const isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/.test(name);
//   if (!isNameValid) return "Please input valid  name";

//   return null;
// };