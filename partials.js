/* =============================================================================
   PARTIALS.JS — Markup condiviso tra tutte le pagine (navbar e footer).
   Un'unica fonte per nav e footer così restano identici su ogni pagina.
   Iniettato da app.js dentro i placeholder <div id="site-nav">/<div id="site-footer">.
   ============================================================================= */

const PARTIALS = {

  nav: `
  <nav id="navbar">
    <div class="nav-inner">
      <!-- Logo / Nome (popolato da app.js) -->
      <a href="index.html" class="nav-logo" id="nav-logo"></a>

      <!-- Hamburger per mobile -->
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>

      <!-- Link di navigazione (popolati da app.js) -->
      <ul class="nav-links" id="nav-links">
        <li class="nav-mobile-home"><a href="index.html" class="nav-link nav-link-home">Jacopo Romano</a></li>
        <li><a href="games.html"   class="nav-link" id="nav-link-games"></a></li>
        <li><a href="film.html"    class="nav-link" id="nav-link-film"></a></li>
        <li><a href="about.html"   class="nav-link" id="nav-link-about"></a></li>
        <li><a href="contact.html" class="nav-link nav-link-cta" id="nav-link-contact"></a></li>
      </ul>
    </div>
  </nav>
  `,

  footer: `
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- Divisore -->
      <div class="footer-divider"></div>

      <!-- Social links (generati da app.js) + email (generata da app.js) + copyright -->
      <div class="footer-bottom">
        <div class="social-links" id="social-links"></div>
        <a href="mailto:" class="footer-contact-link" id="footer-email-link"></a>
        <p class="footer-copy" id="footer-copy"></p>
      </div>
    </div>
  </footer>
  `

};
