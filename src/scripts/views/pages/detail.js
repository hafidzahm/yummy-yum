import RestaurantSources from '../../data/restaurant-sources';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSources.detailRestaurant(url.id);
    console.log(detail);
    // TODO: tampilkan detail di dalam DOM
  },
};

export default Detail;