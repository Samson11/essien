class MainPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <main class="main">
                <s-home></s-home>
                <s-about></s-about>
                <!--<s-skills></s-skills>-->
                <!--<s-qualifications></s-qualifications>-->
                <!--<s-services></s-services>-->
                <s-portfolio></s-portfolio>
                <s-projects></s-projects>
                <s-testimonial></s-testimonial>
                <s-contact></s-contact>
                <s-footer></s-footer>
                <s-scroll></s-scroll>
            </main>
        `;
    }
}

customElements.define('s-main', MainPage)