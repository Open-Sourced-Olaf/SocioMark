const ENV = process.env.NODE_ENV;
let BASE_URL;

switch (ENV) {
  case "production":
    BASE_URL = "https://sociomark-backend.herokuapp.com";
    break;
  default:
    BASE_URL = "http://localhost:8000";
    break;
}

export const LOGIN_URL = `${BASE_URL}/user/login`;
export const REGISTER_URL = `${BASE_URL}/user/register`;
export const CURRENT_USER_URL = `${BASE_URL}/user/current_user`;
export const POST_CREATE_URL = `${BASE_URL}/post/create`;
export const POST_GET_ALL_URL = `${BASE_URL}/post/all`;
export const POST_COMMENT_URL = `${BASE_URL}/post/comment`;
export const POST_UNCOMMENT_URL = `${BASE_URL}/post/uncomment`;