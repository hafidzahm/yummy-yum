import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  RESTAURANT_IMG_SMALL_RESOLUTION: (pictureId) => `${CONFIG.BASE_URL_IMG}small/${pictureId}`,
  RESTAURANT_IMG_MEDIUM_RESOLUTION:(pictureId) => `${CONFIG.BASE_URL_IMG}medium/${pictureId}`,
  RESTAURANT_IMG_LARGE_RESOLUTION:(pictureId) => `${CONFIG.BASE_URL_IMG}large/${pictureId}`,


};

export default API_ENDPOINT;