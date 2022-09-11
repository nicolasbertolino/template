/* Components */
import footerComponent from "../components/footer-component.js";
import headerComponent from "../components/header-component.js";

/* Scripts */
import footer from "scripts/footer.js";
import header from "scripts/header.js";

document.addEventListener("DOMContentLoaded", function() {
  footer();
  footerComponent();
  header();
  headerComponent();
});
