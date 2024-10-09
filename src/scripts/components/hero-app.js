class HeroApp extends HTMLElement {
    constructor() {
      super();
  
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="hero-img">
        <img src="./images/heros/hero-image_2.jpg" alt="hero-image-1">
        <div class="hero-text">
        Enjoy deliciousness that <br>
        can captivate your taste buds!. <br>

        
        </div>
       </div>
          
          
          
          `;
    }
  }
  
  customElements.define("hero-app", HeroApp);
  