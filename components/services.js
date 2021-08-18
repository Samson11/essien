class Services extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="services section" id="services">
        <h2 class="section__title">Services</h2>
        <span class="section__subtitle">What i offer</span>
  
        <div class="services__container container grid">
          <div class="services__content">
            <div>
              <i class="uil uil-web-grid services__icon"></i>
              <h3 class="services__title">Ui/UX <br> Designer</h3>
              <span class="button button--flex button--small button--link services__button">
                View more
                <i class="uil uil-arrow-right button__icon"></i>
              </span>
  
              <div class="services__modal">
                <div class="services__modal-content">
                  <h4 class="services__modal-title">Ui/ Ux <br> Designer</h4>
                  <i class="uil uil-times services__modal-close"></i>
  
                  <ul class="services__modal-services grid">
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>I develop the User Interface.</p>
                    </li>
  
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Web page development.</p>
                    </li>
  
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>I create ux element interactions.</p>
                    </li>
  
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>I position your company's brand.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <div class="services__content">
            <div>
              <i class="uil uil-arrow services__icon"></i>
              <h3 class="services__title">Frontend <br> Developer</h3>
              <span class="button button--flex button--small button--link services__button">
                View more
                <i class="uil uil-arrow-right button__icon"></i>
              </span>
  
              <div class="services__modal">
                <div class="services__modal-content">
                  <h4 class="services__modal-title">Frontend <br> Developer</h4>
                  <i class="uil uil-times services__modal-close"></i>
  
                  <ul class="services__modal-services grid">
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>I develop the User Interface.</p>
                    </li>
  
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>Web page development.</p>
                    </li>
  
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>I create ux element interactions.</p>
                    </li>
  
                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p>I position your company's brand.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        `;
    }
}

customElements.define('s-services', Services)