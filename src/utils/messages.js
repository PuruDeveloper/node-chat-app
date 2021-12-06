const { format } = require("date-fns");

const generateMessage = (username, text) => {
  return {
    username,
    text: text,
    createdAt: format(new Date(), "Pp"),
  };
};

const generateLocationMessage = (username, url) => {
  return {
    username,
    location: url,
    createdAt: format(new Date(), "Pp"),
  };
};

module.exports = {
  generateMessage,
  generateLocationMessage,
};
