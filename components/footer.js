class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="footer">
        <div class="footer__bg">
          <div class="footer__container container grid">
            <div>
              <h1 class="footer__title">Essien</h1>
              <span class="footer__subtitle">UI / UX Designer</span>
            </div>
    
            <ul class="footer__links">
              <li>
                <a href="#services" class="footer__link">Services</a>
              </li>
    
              <li>
                <a href="#portfolio" class="footer__link">Portfolio</a>
              </li>
    
              <li>
                <a href="#contact" class="footer__link">Contact</a>
              </li>
            </ul>
    
            <div class="footer__socials">
              <a href="" target="_blank" class="footer__social">
                <i class="uil uil-facebook-f"></i>
              </a>
    
              <a href="" target="_blank" class="footer__social">
                <i class="uil uil-instagram"></i>
              </a>
    
              <a href="" target="_blank" class="footer__social">
                <i class="uil uil-twitter-alt"></i>
              </a>
            </div>
          </div>
    
          <p class="footer__copy">&#169; Essien. All rights reserved</p>
        </div>
      </footer>
        `;
    }
}

customElements.define('s-footer', Footer);