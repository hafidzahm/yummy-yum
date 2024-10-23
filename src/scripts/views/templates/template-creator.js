import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) => `
`

const createRestaurantItemTemplate = (restaurants) => `
<div id="${restaurants.id}" class="card-item__container">
          <img id="card-img" src="${CONFIG.BASE_URL_IMG + restaurants.pictureId} " alt='Gambar dari restoran ${restaurants.name}'>
          <h1 class="card-item__name" id="card-item__name"><a href="#/detail/${restaurants.id}">${restaurants.name}</a></h1>

          <div class="card-item__info">

          <h2 class="card-item__rating" id="card-item__rating">
          <img id="icon-rating" src=${CONFIG.RATING_ICON} alt="icon-rating">
          ${restaurants.rating}</h2>

          <h3 class="card-item__city" id="card-item__city">
          <img id="icon-city" src=${CONFIG.LOCATION_ICON} alt="icon-city">
          ${restaurants.city}</h3>

          
          </div>

          <p class="card-item__description" id="card-item__description">${restaurants.description}</p>
      </div>
`;
export { createRestaurantItemTemplate };