class CardItem extends HTMLElement {
  static get observedAttributes() {
    return [
      "id",
      "pictureid",
      "name",
      "city",
      "rating",
      "description",
      "index",
    ];
  }


  constructor() {
    super();


    // Properti internal diinisialisasi dengan nilai kosong
    this._id = '';
    this._pictureId = '';
    this._name = '';
    this._city = '';
    this._rating = '';
    this._description = '';
    this._index = 0;
  }


  connectedCallback() {
    // Nilai properti diatur ketika elemen sudah siap di DOM
    this._id = this.getAttribute("id");
    this._pictureId = this.getAttribute("pictureid");
    this._name = this.getAttribute("name");
    this._city = this.getAttribute("city");
    this._rating = this.getAttribute("rating");
    this._description = this.getAttribute("description");
    this._index = parseInt(this.getAttribute("index") || 0);


    // Panggil render() setelah nilai atribut diinisialisasi
    this.render();
  }


  attributeChangedCallback(name, oldValue, newValue) {
    // Perbarui properti internal saat atribut berubah
    const attributeToPropertyMap = {
      'id': '_id',
      'pictureid': '_pictureId',
      'name': '_name',
      'city': '_city',
      'rating': '_rating',
      'description': '_description',
      'index': '_index'
    };


    if (name in attributeToPropertyMap) {
      this[attributeToPropertyMap[name]] = name === 'index' ? parseInt(newValue) : newValue;


      // Render ulang jika elemen sudah tersambung ke DOM
      if (this.isConnected) {
        this.render();
      }
    }
  }


  render() {
    // Gunakan properti internal yang sudah diperbarui untuk rendering
    this.innerHTML = `
      <div id="${this._id}" class="card-item__container">
          <img src="${this._pictureId}" alt='Gambar dari restoran ${this._name}'>
          <h1 class="card-item__name">${this._name}</h1>
          <h2 class="card-item__city">${this._city}</h2>
          <h3 class="card-item__rating">${this._rating}</h3>
          <p class="card-item__description">${this._description}</p>
      </div>
    `;
  }
}


customElements.define("card-item", CardItem);