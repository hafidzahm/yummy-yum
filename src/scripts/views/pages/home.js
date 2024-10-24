import RestaurantSources from '../../data/restaurant-sources';
import { createRestaurantItemTemplate } from '../templates/template-creator';
const Home = {
  async render() {
    return `
    <section class="hero-img" id="root">
    <img
      id="hero-img"
      src="./hero-image_2.jpg"
      alt="hero-image-1"
    />
    <div class="hero-text" id="hero-text">
      Enjoy deliciousness that <br />
      can captivate your taste buds! <br />
    </div>
  </section>
  <section id="about-container">
  <h1 id="about-title">About Us</h1>
  <div id="about-desc">
      <img id="about-img" src="./hero-image_1.jpg" alt="about-image">
      <div id="about-prg">
          <p id='about-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores fugiat hic eum, 
              aliquam porro similique consequuntur! 
              Consectetur velit doloribus optio dignissimos repellat suscipit itaque autem, 
              ullam sint praesentium odio?</p>
      </div>
  </div>
</section>

<section id="restaurant-list">

<div class="card-title">
  <h1 id="card-title__text">Our Restaurants</h1>
</div>

<div id="card-lists"></div>
</section>






      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    // const restaurants = await RestaurantSources.listRestaurant();
    // const img = await RestaurantSources.smallRestoImgResolution();
    // try {
    //   console.table(restaurants);
    //   console.log(img);
    // } catch (error) {
    //   console.error(error);
    // }
    // TODO: tampilkan restaurants di dalam DOM
    const restaurants = await RestaurantSources.listRestaurant();
    const restaurantsContainer = document.querySelector('#card-lists');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });


  },
};

export default Home;