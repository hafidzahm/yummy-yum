class HeaderApp extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `

    <div class="topnav">
    <div class="brand-name">
    <img id="brand-logo" src="./images/heros/brand.png" alt="yummy-logo">
    </div>
    <a href="https://github.com/hafidzahm">ABOUT US</a>
    <a href="#">FAVOURITE</a>
    <a href="#home">HOME</a>

  </div> 

        
        
        
        `;
  }
}

customElements.define("header-app", HeaderApp);
