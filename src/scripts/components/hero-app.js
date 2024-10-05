class HeroApp extends HTMLElement {
    constructor() {
      super();
  
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="hero-img">
        <img src="./images/heros/hero-image_2.jpg" alt="hero-image-1">
       </div>
          
          
          
          `;
    }
  }
  
  customElements.define("hero-app", HeroApp);
  