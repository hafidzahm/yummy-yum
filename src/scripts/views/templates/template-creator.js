import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `

<section id="${restaurant.id}" class="section__info">
  <div class="info__name">
    <h1 id="info__name">${restaurant.name}</h1>
  </div>
  <div class="info__group">
   <div class="info__picture">
      <img src="${CONFIG.BASE_URL_IMG + restaurant.pictureId}" alt="Ini adalah gambar dari restoran ${restaurant.name}">
   </div>
   <div class="info__rating">
    <h1 id="info__rating">⭐${restaurant.rating} / 5</h2>
   </div>
   <div class="info__address">
    <h1 id="info__address">${restaurant.address}, ${restaurant.city}</h2>
   </div>
   <div class="info__description">
    <h1 id="info__description">${restaurant.description}</h2>
   </div>
  </div>
</section>

<section class="section__menus">
  <div class="section__title">
  <h1>Daftar Menu</h1>
  </div>

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
      <h1 class="title__drinks">Minuman</h1>
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
  <div class="section__title__review">
  <h1>Ulasan Kustomer</h1>
  </div>
  <div class="reviews__container">
  ${restaurant.customerReviews
    .map(
      (review) => `
      <div id="review__customer">
    <h1>${review.name}</h1>
    <h2>${review.review}</h2>
    <h3>${review.date}</h3>
    </div>
    `,
    )                  .join('')}
  </div>
</section>

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