class HeaderApp extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `

    <div class="nav-container">
    <img id="nav-img" src="./images/heros/brand.png" alt="hero-image-1" />
    <nav>
      <ul>
          <li><a href="#root">HOME</a></li>
          <li><a href="#">FAVOURITE</a></li>
          <li><a href="https://github.com/hafidzahm">ABOUT US</a></li>
      </ul>
    </nav>
  </div>

        
        
        
        `;
  }
}

customElements.define("header-app", HeaderApp);
