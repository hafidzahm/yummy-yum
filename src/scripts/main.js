const RENDER_EVENT = 'RENDER_EVENT';
// import data from '../public/data/DATA.json';
// test

const main = () => {
  // function getAllData() {
  //   try {
  //     const DATA = data.restaurants.map((cardItem) => {
  //       return cardItem;
  //     });
  //     console.log("TESTING", DATA);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // function createCardElement(cardItem) {
  //   const cardElement = document.createElement('card-item');

  //   cardElement.setAttribute('id', cardItem.id);
  //   cardElement.setAttribute('pictureId', cardItem.pictureId);
  //   cardElement.setAttribute('name', cardItem.name);
  //   cardElement.setAttribute('city', cardItem.city);
  //   cardElement.setAttribute('rating', cardItem.rating);
  //   cardElement.setAttribute('description', cardItem.description);

  //   return cardElement;

  // }
  // document.addEventListener(RENDER_EVENT, async () => {
  //   const cardList = document.getElementById('card-lists');
  //   cardList.innerHTML = '';

  //   try {
  //     const DATA = data.restaurants.map((restaurant) => restaurant);
  //     for (const cardItem of DATA) {
  //       const cardElement = createCardElement(cardItem);
  //       cardList.append(cardElement);
  //     }
  //   } catch (err) {
  //     console.warn('ERROR AT GETTING DATA: ', err);
  //   }
  // });

  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', openNav);

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', closeNav);

  function openNav() {
    console.log('ererererer');
    document.getElementById('side-nav').style.width = '300px';
    // document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById('side-nav').style.width = '0';
  }

  document.addEventListener('DOMContentLoaded', async () => {
    document.dispatchEvent(new Event(RENDER_EVENT));
  });

  // getAllData()
};

export default main;
