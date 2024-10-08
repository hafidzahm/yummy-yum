class CardItem extends HTMLElement {
  static observedAttributes = [
    "id",
    "pictureId",
    "name",
    "city",
    "rating",
    "description",
    "index",
  ];

  constructor() {
    super();

    this._id = this.getAttribute("id");
    this._pictureId = this.getAttribute("pictureId");
    this._name = this.getAttribute("name");
    this._city = this.getAttribute("city");
    this._rating = this.getAttribute("rating");
    this._decription = this.getAttribute("description");
    this._index = parseInt(this.getAttribute("index"));
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

      <div id=${this.getAttribute("id")} class="card-item__container">
          <img src="${this.getAttribute("pictureId")}" alt='Ini adalah gambar dari restoran ${this.getAttribute("name")}'>
          <h1 class="card-item__name">${this.getAttribute("name")}</h1>
          <h2 class="card-item__city">${this.getAttribute("city")}</h2>
          <h3 class="card-item__rating">${this.getAttribute("rating")}</h3>
          <p class="card-item__description">${this.getAttribute("description")}</p>
      </div>
          
          
          
          `;
  }
}

customElements.define("card-item", CardItem);
