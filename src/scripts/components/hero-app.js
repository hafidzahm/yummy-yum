class HeroApp extends HTMLElement {
    constructor() {
      super();
  
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="hero-img" id="root">
        <img id="hero-img"src="./images/heros/hero-image_2.jpg" alt="hero-image-1">
        <div class="hero-text" id="hero-text">
        Enjoy deliciousness that <br>
        can captivate your taste buds! <br>

        
        </div>
       </div>
          
          
          
          `;
    }
  }
  
  customElements.define("hero-app", HeroApp);
  