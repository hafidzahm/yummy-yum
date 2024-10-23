import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSources {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async smallRestoImgResolution(pictureId) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_IMG_SMALL_RESOLUTION(pictureId));
    console.log(response);
    return response.json();
  }


}

export default RestaurantSources;