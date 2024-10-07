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

      this._id = this.getAttribute('id')
      this._pictureId = this.getAttribute('pictureId')
      this._name = this.getAttribute('name')
      this._city = this.getAttribute('city')
      this._rating = this.getAttribute('rating')
      this._decription = this.getAttribute('description')

  
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
  