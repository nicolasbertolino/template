function init() {
  const template = document.createElement('template');
  template.innerHTML = `
    <footer class="footer">
      <ul>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="services.html">Services</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </footer>
  `;

  class FooterView extends HTMLElement {
    connectedCallback() {
      this.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define('footer-view', FooterView);
}

export default { init }
