class Testimonial extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="testimonial section">
        <h2 class="section__title">Testimonial</h2>
        <span class="section__subtitle">My clients saying</span>
    
        <div class="testimonial__container container swiper-container">
          <div class="swiper-wrapper">
            <div class="testimonial__content swiper-slide">
              <div class="testimonial__data">
                <div class="testimonial__header">
                  <img src="img/testimonial1.jpg" alt="" class="testimonial__img">
    
                  <div>
                    <h3 class="testimonial__name">Sara Smith</h3>
                    <span class="testimonial__client">Client</span>
                  </div>
                </div>
    
                <div>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                </div>
              </div>
    
              <p class="testimonial__description">
                I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
              </p>
            </div>
    
            <div class="testimonial__content swiper-slide">
              <div class="testimonial__data">
                <div class="testimonial__header">
                  <img src="img/testimonial2.jpg" alt="" class="testimonial__img">
    
                  <div>
                    <h3 class="testimonial__name">Matt Robinson</h3>
                    <span class="testimonial__client">Client</span>
                  </div>
                </div>
    
                <div>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                </div>
              </div>
    
              <p class="testimonial__description">
                I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
              </p>
            </div>
    
            <div class="testimonial__content swiper-slide">
              <div class="testimonial__data">
                <div class="testimonial__header">
                  <img src="img/testimonial3.jpg" alt="" class="testimonial__img">
    
                  <div>
                    <h3 class="testimonial__name">Raul Harris</h3>
                    <span class="testimonial__client">Client</span>
                  </div>
                </div>
    
                <div>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                  <i class="uil uil-star testimonial__icon-star"></i>
                </div>
              </div>
    
              <p class="testimonial__description">
                I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
              </p>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-testimonial"></div>
        </div>
      </section>
        `;
    }
}

customElements.define('s-testimonial', Testimonial)