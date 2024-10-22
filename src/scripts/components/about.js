class AboutUs extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="about-container">
    <h1 id="about-title">About Us</h1>
    <div id="about-desc">
        <img id="about-img" src="./images/heros/hero-image_1.jpg" alt="about-image">
        <div id="about-prg">
            <p id='about-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores fugiat hic eum, 
                aliquam porro similique consequuntur! 
                Consectetur velit doloribus optio dignissimos repellat suscipit itaque autem, 
                ullam sint praesentium odio?</p>
        </div>
    </div>
</div>
  
      
          `;
  }
}

customElements.define('about-us', AboutUs);
