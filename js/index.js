/* Components */
import footerComponent from "../views/components/footer-component.js";
import headerComponent from "../views/components/header-component.js";

/* Scripts */
import footer from "./scripts/footer.js";
import header from "./scripts/header.js";
import main from "./scripts/main.js";

document.addEventListener("DOMContentLoaded", function() {
  footer();
  footerComponent();
  header();
  headerComponent();
  main();
});
