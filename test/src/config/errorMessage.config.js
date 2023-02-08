const UNAUTHORIZED_REQUEST_ERROR = {
  message: 'Unauthorized error'
};
const INTERNAL_SERVER_ERROR = {
  message: 'Internal Server Error'
};
const BAD_REQUEST_ERROR = {
  message: 'Bad Request Error'
};
const REQUEST_VALIDATION_ERROR = {
  message: 'Request Parameters Validation Error'
};

const USER_NOT_FOUND_ERROR = {
  message: 'User Not Found Error'
};

const USERNAME_ALREADY_USED_ERROR = {
  message: 'Username Already Exist!'
};

const PHONE_NUMBER_ALREADY_USED_ERROR = {
  message: 'Phone Number Already Exist!'
};

const LESS_THAN_TODAY_DATE = {
  message: "Can't update or create previous result."
};
const ID_NOT_FOUND_ERROR = {
  message: 'Id does not exist!'
};

const WRONG_PASSWORD_ERROR = {
  message: 'Password or Username is wrong'
};

const ID_ALREADY_USED_ERROR = {
  message: "Id Already Exist!"
};


module.exports = {
  INTERNAL_SERVER_ERROR,
  BAD_REQUEST_ERROR,
  REQUEST_VALIDATION_ERROR,
  UNAUTHORIZED_REQUEST_ERROR,
  USER_NOT_FOUND_ERROR,
  USERNAME_ALREADY_USED_ERROR,
  LESS_THAN_TODAY_DATE,
  ID_NOT_FOUND_ERROR,
  WRONG_PASSWORD_ERROR,
  ID_ALREADY_USED_ERROR,
  PHONE_NUMBER_ALREADY_USED_ERROR
};
