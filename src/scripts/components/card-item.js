class CardItem extends HTMLElement {
    static observedAtributes = [
        'id',
        'pictureId',
        'name',
        'city',
        'rating',
        'description',
    ];
    constructor() {
      super();

      this._id = 'id',
      this._pictureId = 'src/scripts/components/hero-app.js',
      this._city = 'city',
      this._rating = 'rating',
      this._decription = 'description'

  
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="item">
      <div id=${this.id} class="card-item__container">
          <img src="${this.pictureId}" alt='Ini adalah gambar dari restoran +${this.name}'>
          <h1 class="card-item__name">${this.name}</h1>
          <h2 class="card-item__city">${this.city}</h2>
          <h3 class="card-item__rating">${this.rating}</h3>
          <p class="card-item__description">${this.description}</p>
      </div>
  </div>
          
          
          
          `;
    }
  }
  
  customElements.define("card-item", CardItem);
  