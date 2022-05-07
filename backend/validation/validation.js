const emailRe =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const passwordRe = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

export const validateLogin = (email, password, res) => {
  if (email.length === 0) {
    res.status(401);
    throw new Error("* = required fields!");
  } else {
    if (!String(email).toLowerCase().match(emailRe)) {
      res.status(401);
      throw new Error("Invalid email address!");
    }
  }

  if (password.length === 0) {
    res.status(401);
    throw new Error("* = required fields!");
  }
};

export const validateRegister = (email, password, res) => {
  if (email.length === 0) {
    res.status(401);
    throw new Error("* = required fields!");
  } else {
    if (!String(email).toLowerCase().match(emailRe)) {
      res.status(401);
      throw new Error("Invalid email address!");
    }
  }

  if (password.length === 0) {
    res.status(401);
    throw new Error("* = required fields!");
  } else {
    if (!password.match(passwordRe)) {
      res.status(401);
      throw new Error(
        "Password length must be greater than 8 characters and has to contain lowercase, UPPERCASE, and at least one special character."
      );
    }
  }
};
