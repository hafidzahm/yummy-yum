class NavBar extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `

        <nav id="drawer" class="nav">
        <ul class="nav_list">
          <li class="nav__item"><a href="#">Home</a></li>
          <li class="nav__item"><a href="#">Favorite</a></li>
          <li class="nav__item"><a href="#">About Us</a></li>
        </ul>
      </nav>
        
        
        
        
        
        `;
  }
}

customElements.define("nav-bar", NavBar);
