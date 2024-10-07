class CardItem extends HTMLElement {
    static observedAtributes = [
        'index',
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
      this._index = parseInt(this.getAttribute("index"));

  
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="item">
      <div id=${this._id} class="card-item__container">
          <img src="${this._pictureId}" alt='Ini adalah gambar dari restoran +${this._name}'>
          <h1 class="card-item__name">${this._name}</h1>
          <h2 class="card-item__city">${this._city}</h2>
          <h3 class="card-item__rating">${this._rating}</h3>
          <p class="card-item__description">${this._description}</p>
      </div>
  </div>
          
          
          
          `;
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
  }
  
  customElements.define("card-item", CardItem);
  