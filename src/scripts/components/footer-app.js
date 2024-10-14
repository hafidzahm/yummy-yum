class FooterApp extends HTMLElement {
    constructor() {
      super();
  
      this.render();
    }
  
    render() {
      this.innerHTML = `

      <div class="container-footer">
Copyright © 2024 - HUNGRY? Lets YUMMY YUM!
</div>
            
          
          `;
    }
  }
  
  customElements.define("footer-app", FooterApp);
  