class Portfolio extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <section class="portfolio section" id="portfolio">
        <h2 class="section__title">Portfolio</h2>
        <span class="section__subtitle">Most recent Work</span>
    
        <div class="portfolio__container container swiper-container">
          <div class="swiper-wrapper">
            <div class="portfolio__content grid swiper-slide">
              <img src="./img/essien1.jpeg" alt="" class="portfolio__img">
    
              <div class="portfolio__data">
                <h3 class="portfolio__title">Interior Decoration</h3>
                <p class="portfolio__description">Interior Decoration Design on Figma</p>
                <a href="https://www.youtube.com/channel/UCOxbcakysLMm7PSIU096cuA" class="button button--flex button--small portfolio__button">
                  Visit
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
    
            <div class="portfolio__content grid swiper-slide">
              <img src="./img/essien2.jpeg" alt="" class="portfolio__img">
    
              <div class="portfolio__data">
                <h3 class="portfolio__title">Home</h3>
                <p class="portfolio__description">Home Decoration Design on Figma
                  </p>
                <a href="#" class="button button--flex button--small portfolio__button">
                  Demo
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
    
            <div class="portfolio__content grid swiper-slide">
              <img src="./img/essien3.jpeg" alt="" class="portfolio__img">
    
              <div class="portfolio__data">
                <h3 class="portfolio__title">Furniture</h3>
                <p class="portfolio__description">Furniture Design on Figma
                  </p>
                <a href="https://www.figma.com/file/umy9L0wBMVL7Z2Rv4pP1ho/Furniture-website" class="button button--flex button--small portfolio__button">
                  Visit
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
    
          </div>
    
          <div class="swiper-button-next">
            <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-button-prev">
            <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>    
        `;
    }
}

customElements.define('s-portfolio', Portfolio)