export default function footerComponent() {
  class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <footer class="footer">
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </footer>
    `;
    }
  }

  customElements.define('footer-component', Footer);
};
