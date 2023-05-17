function init() {
  const template = document.createElement('template');
  template.innerHTML = `
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

  class HeaderView extends HTMLElement {
    connectedCallback() {
      this.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define('header-view', HeaderView);
}

export default { init }