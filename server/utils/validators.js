// for now, `u_id` can be an email or a username
const validateLoginData = (u_id, pass) => {
  if (!u_id || !pass || typeof u_id !== "string" || typeof pass !== "string") {
    return false;
  }

  const userName_regex = new RegExp(/^[a-zA-Z0-9_-]{3,16}$/u, "u");
  const email_regex = new RegExp(/^.+@.+$/u, "u");

  return userName_regex.test(u_id) || email_regex.test(u_id);
};

exports.validateLoginData = validateLoginData;
