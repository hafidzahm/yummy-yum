import RestaurantSources from '../../data/restaurant-sources';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `    
    <div id="detail_restaurant"></div>
    <footer class="container-footer">
    HUNGRY? Lets YUMMY YUM! 
    </footer>

      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const details = await RestaurantSources.detailRestaurant(url.id);
    console.table(details);
    // console.table(...details.menus.drinks);
    // TODO: tampilkan detail di dalam DOM
    const detailContainer = document.querySelector('#detail_restaurant');

    try {
      detailContainer.innerHTML += createRestaurantDetailTemplate(details);
      console.log('try detail');
    } catch (err) {
      console.error(err);
    }
  },
};

export default Detail;