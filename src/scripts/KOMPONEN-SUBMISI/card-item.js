class CardItem extends HTMLElement {
  static get observedAttributes() {
    return [
      'id',
      'pictureid',
      'name',
      'city',
      'rating',
      'description',
      'index',
    ];
  }

  constructor() {
    super();

    // Properti internal diinisialisasi dengan nilai kosong
    this._id = '';
    this._pictureId = '';
    this._name = '';
    this._city = '';
    this._cityIcon = '';
    this._rating = '';
    this._ratingImg = '';
    this._description = '';
    // this._moreIcon = '';
    this._index = 0;
  }

  connectedCallback() {
    // Nilai properti diatur ketika elemen sudah siap di DOM
    this._id = this.getAttribute('id');
    this._pictureId = this.getAttribute('pictureid');
    this._name = this.getAttribute('name');
    this._city = this.getAttribute('city');
    this._cityIcon = './images/heros/location.png';
    this._rating = this.getAttribute('rating');
    this._ratingIcon = './images/heros/rating.png';
    this._description = this.getAttribute('description');
    // this._moreIcon = "./images/heros/more.png"
    this._index = parseInt(this.getAttribute('index') || 0);

    // Panggil render() setelah nilai atribut diinisialisasi
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Perbarui properti internal saat atribut berubah
    const attributeToPropertyMap = {
      id: '_id',
      pictureid: '_pictureId',
      name: '_name',
      city: '_city',
      rating: '_rating',
      description: '_description',
      index: '_index',
    };

    if (name in attributeToPropertyMap) {
      this[attributeToPropertyMap[name]] =
        name === 'index' ? parseInt(newValue) : newValue;

      // Render ulang jika elemen sudah tersambung ke DOM
      if (this.isConnected) {
        this.render();
      }
    }
  }

  render() {
    // Gunakan properti internal yang sudah diperbarui untuk rendering
    this.innerHTML = `
      
    `;
  }
}

customElements.define('card-item', CardItem);
