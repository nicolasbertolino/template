export default function header() {
  class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <header class="header">
        <div class="header__logo">Logo</div>
        <nav class="header__nav">
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;
    }
  }

  customElements.define('header-component', Header);
};
