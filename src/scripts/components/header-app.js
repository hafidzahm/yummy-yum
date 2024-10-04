class HeaderApp extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header-yummy">
    <img src='images/logo/logo-mobile.png' alt="yummy-logo" >
    </div>
        
        
        
        `;
  }
}

customElements.define("header-app", HeaderApp);
