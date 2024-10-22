class MainPage extends HTMLElement {
  constructor() {
    super();


    this.render();

  }

  render() {
    this.innerHTML = `
        <div>
        <h1>HELLO</h1>
    </div>
    
        
        
        
        
        
        `;
  }
}

customElements.define('main-page', MainPage);

