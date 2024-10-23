import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div id="detail_restaurant">
<section id="${restaurant.id}" class="section__info">
  <div class="info__name">
    <h1 id="info__name">${restaurant.name}</h1>
  </div>
  <div class="info__group">
   <div class="info__picture">
      <img src="${CONFIG.BASE_URL_IMG + restaurant.pictureId}" alt="Ini adalah gambar dari restoran ${restaurant.name}">
   </div>
   <div class="info__rating">
    <h2 id="info__rating">⭐${restaurant.rating} / 5</h2>
   </div>
   <div class="info__address">
    <h2 id="info__address">${restaurant.address}, ${restaurant.city}</h2>
   </div>
   <div class="info__description">
    <h2 id="info__description">${restaurant.description}</h2>
   </div>
  </div>
</section>

<section class="section__menus">
  <div class="section__title">Daftar Menu</div>

  <div class="section__foods">
    <div class="section__title">
      <h1 class="title__food">Makanan</h1>
    </div>
    <div class="food__container">
                ${restaurant.menus.foods
    .map(
      (food) => `
                    <p class="details-menu-foods">${food.name}</p>`,
    )
    .join('')}
    </div>
  </div>

  <div class="section__drinks">
    <div class="section__title">
      <h1 class="title__drinks">Makanan</h1>
    </div>
    <div class="drinks__container">
    ${restaurant.menus.drinks
    .map(
      (drink) => `
          <p class="details-menu-drinks">${drink.name}</p>`,
    )
    .join('')}
    </div>
  </div>

</section>

<section class="section__reviews">
  <div class="section__title">Ulasan Kustomer</div>
  <div id="array[0]" class="reviews__container">
  ${restaurant.customerReviews
    .map(
      (review) => `
    <h1>${review.name}</h1>
    <h2>${review.review}</h2>
    <h3>${review.date}</h3>
    `,
    )                  .join('')}
  </div>
</section>
</div>
`;

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
export { createRestaurantItemTemplate, createRestaurantDetailTemplate };