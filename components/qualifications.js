class Qualifications extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="qualification section">
        <h2 class="section__title">Qualification</h2>
        <span class="section__subtitle">My Personal journey</span>
  
        <div class="qualification__container container">
          <div class="qualification__tabs">
            <div class="qualification__button button--flex qualification__active" data-target="#education">
              <i class="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
  
            <div class="qualification__button button--flex" data-target="#work">
              <i class="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>
          </div>
  
          <div class="qualification__sections">
            <div class="qualification__content qualification__active" data-content id="education">
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">Computer Scientist</h3>
                  <span class="qualification__subtitle">Bells University of Technology</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2018-2023
                  </div>
                </div>
  
                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>
              </div>
            </div>
  
            <div class="qualification__content" data-content id="work">
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">Vue.js Frontend Developer</h3>
                  <span class="qualification__subtitle">Fiverr</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2021-till date
                  </div>
                </div>
  
                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        `;
    }
}

customElements.define('s-qualifications', Qualifications);