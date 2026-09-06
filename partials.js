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
  <footer id="contact">
    <div class="footer-inner">
      <!-- CTA testuale principale -->
      <div class="contact-cta">
        <p class="contact-cta-label" id="contact-cta-text"></p>
        <p class="contact-cta-sub"   id="contact-cta-sub"></p>
        <a class="contact-email" id="contact-email" href="#"></a>
      </div>

      <!-- Modulo di contatto -->
      <div class="contact-form-wrap" id="contact-form-wrap">
        <h3 class="contact-form-title" id="contact-form-title"></h3>
        <form class="contact-form" id="contact-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <input type="text"  id="form-name"    name="name"    class="form-input" />
            </div>
            <div class="form-group">
              <input type="email" id="form-email"   name="email"   class="form-input" />
            </div>
          </div>
          <div class="form-group">
            <textarea id="form-message" name="message" class="form-input form-textarea"></textarea>
          </div>
          <button type="submit" class="btn-primary form-submit" id="form-submit"></button>
        </form>
        <div class="form-success" id="form-success"></div>
      </div>

      <!-- Divisore -->
      <div class="footer-divider"></div>

      <!-- Social links (generati da app.js) + copyright -->
      <div class="footer-bottom">
        <div class="social-links" id="social-links"></div>
        <p class="footer-copy" id="footer-copy"></p>
      </div>
    </div>
  </footer>
  `

};
