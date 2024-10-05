class HeaderApp extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="header">
      <div class="header__inner">
      <h1 class="header__title">YUMMY YUM!</h1>
      </div>

    </div>
        
        
        
        `;
  }
}

customElements.define("header-app", HeaderApp);
