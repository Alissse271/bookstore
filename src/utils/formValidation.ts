const emailValidation = () => {
  return {
    required: "*email is required",
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
      message: "Enter a valid email",
    },
    maxLength: {
      value: 30,
      message: "*max 30 characters",
    },
  };
};
const nameValidation = () => {
  return {
    required: "*name is required",
    pattern: { value: /^[a-zA-ZА-ЯЁа-яё\s]*$/, message: "Enter a valid name" },
    maxLength: {
      value: 15,
      message: "*max 15 characters",
    },
  };
};
const passwordValidation = () => {
  return {
    required: "*password is required",
    minLength: {
      value: 8,
      message: "*min 8 characters",
    },
  };
};
export { emailValidation, nameValidation, passwordValidation };
