/* =============================================================================
   APP.JS — Logica del sito
   Legge i dati da config.js (siteData) e popola l'HTML dinamicamente.
   Non modificare questo file: tutte le personalizzazioni vanno in config.js.
   ============================================================================= */

// --- Aspetta che il DOM sia pronto prima di fare qualsiasi cosa ------------- //
document.addEventListener('DOMContentLoaded', () => {

  // Riferimento all'oggetto globale definito in config.js
  if (typeof siteData === 'undefined') {
    console.error('ERROR: config.js not found or siteData is not defined.');
    return;
  }

  initAll();

  // *** fallback: pause quando un iframe YouTube riceve focus ***
  window.addEventListener('focusin', (e) => {
    const el = e.target;
    if (el.tagName === 'IFRAME' && el.src && el.src.includes('youtube.com')) {
      console.log('iframe gained focus, stopping media');
      stopAllMedia();
    }
  });
});

/**
 * Callback della YouTube API quando è pronta
 */
window.onYouTubeIframeAPIReady = function() {
  // Inizializza tutti i player YouTube registrati
  youtubePlayersList.forEach((item, index) => {
    if (!item.player && item.videoId) {
      const player = new YT.Player(item.elementId, {
        videoId: item.videoId,
        events: {
          'onStateChange': onYoutubePlayerStateChange
        }
      });
      youtubePlayersList[index].player = player;
    }
  });
};

/**
 * Callback quando lo stato del player YouTube cambia
 * States: -1=unstarted, 0=ended, 1=playing, 2=paused, 3=buffering, 5=video cued
 */
function onYoutubePlayerStateChange(event) {
  console.log('YT state change', event.data, event.target);
  if (event.data === 1) {
    // Video is playing - stop all audio
    stopAllAudio();
    // also stop any other YouTube video that might be playing
    youtubePlayersList.forEach(entry => {
      const player = entry.player;
      if (player && player !== event.target && typeof player.pauseVideo === 'function') {
        player.pauseVideo();
      }
    });
  }
}

/**
 * Ferma solo gli audio
 */
function stopAllAudio() {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    if (currentPlayBtn) {
      currentPlayBtn.classList.remove('playing');
      currentPlayBtn.setAttribute('aria-label', currentPlayBtn._trackTitle);
    }
    currentAudio = null;
    currentPlayBtn = null;
  }
}

// =============================================================================
//  FUNZIONE PRINCIPALE
// =============================================================================
function initAll() {
  populateMeta();
  populateNavbar();
  populateSectionLabels();
  populateHero();
  populatePortfolio();
  populateAbout();
  populateServices();
  populateContact();
  applyBackgrounds();
  initNavbarScroll();
  initHeroBlur();
  initHeroControls();
  initHamburger();
  initPageIntro();
  initScrollReveal();
}

/**
 * Page intro: staggered appearance for hero texts on first load
 */
function initPageIntro() {
  // Only activate intro when page is at the top
  if (window.scrollY > 48) return;

  const ids = ['hero-tagline', 'hero-phrase', 'hero-subphrase', 'hero-cta'];
  const els = ids.map(id => document.getElementById(id)).filter(Boolean);
  if (!els.length) return;

  const baseDelay = 300; // ms before first item
  const step = 160; // stagger per item

  // Mark these elements to WAIT for the user's click before showing.
  els.forEach((el, i) => {
    el.dataset.waitIntro = 'true';
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${baseDelay + i * step}ms`);
  });

  // One-time click handler: when the user clicks the page, play the intro.
  const onFirstClick = () => {
    pageIntroPlayed = true;
    els.forEach((el, i) => {
      // remove the wait flag so observer won't block
      delete el.dataset.waitIntro;
      setTimeout(() => el.classList.add('visible'), baseDelay + i * step);
    });
  };

  // Attach a one-time click so users can trigger immediately
  document.addEventListener('click', () => {
    if (!pageIntroPlayed) {
      // cancel auto timer if present
      if (autoIntroTimer) clearTimeout(autoIntroTimer);
      onFirstClick();
    }
  }, { once: true });

  // Auto-start intro after a short timeout so it appears without requiring click
  const autoStartDelay = 300; // ms until we start the intro automatically
  let autoIntroTimer = setTimeout(() => {
    if (!pageIntroPlayed) onFirstClick();
  }, autoStartDelay);
}

// =============================================================================
//  META — Titolo pagina
// =============================================================================
function populateMeta() {
  document.title = `${siteData.name} — ${siteData.tagline}`;
}

// =============================================================================
//  NAVBAR
// =============================================================================
function populateNavbar() {
  setText('nav-logo', siteData.name);
  setText('nav-link-portfolio', siteData.nav.portfolio);
  setText('nav-link-about',     siteData.nav.about);
  setText('nav-link-services',  siteData.nav.services);
  setText('nav-link-contact',   siteData.nav.contact);
}

// =============================================================================
//  SECTION LABELS
// =============================================================================
function populateSectionLabels() {
  const lbl = siteData.labels || {};
  setText('portfolio-label', lbl.portfolioLabel || 'Listen');
  setText('portfolio-title', lbl.portfolioTitle || 'Portfolio');
  setText('about-label',     lbl.aboutLabel     || 'Bio');
  setText('services-label',  lbl.servicesLabel  || 'What I Offer');
  setText('services-title',  lbl.servicesTitle  || 'Services');
}

// Navbar diventa opaca al scroll
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // stato iniziale
}

// sfoca progressivamente lo sfondo dell'hero quando si scrolla
function initHeroBlur() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const maxBlur = 6; // px
  const scrollRange = window.innerHeight; // blur fully by the viewport height

  const onScroll = () => {
    const y = Math.min(window.scrollY, scrollRange);
    const amount = (y / scrollRange) * maxBlur;
    hero.style.setProperty('--hero-blur', amount + 'px');
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// create interactive controls for adjusting hero background offsets
function initHeroControls() {
  if (!siteData.debugHeroControls) return;
  const hero = document.getElementById('hero');
  if (!hero) return;

  const panel = document.createElement('div');
  panel.className = 'hero-control-panel';
  panel.innerHTML = `
    <h4>Hero background</h4>
    <label>X: <input type="range" min="0" max="100" value="${hero.style.getPropertyValue('--hero-bg-x')||50}" data-axis="x"></label>
    <label>Y: <input type="range" min="0" max="100" value="${hero.style.getPropertyValue('--hero-bg-y')||50}" data-axis="y"></label>
    <small>mobile:<br>
      X <input type="range" min="0" max="100" value="${hero.style.getPropertyValue('--hero-bg-x-mobile')||hero.style.getPropertyValue('--hero-bg-x')||50}" data-axis="x-mobile"><br>
      Y <input type="range" min="0" max="100" value="${hero.style.getPropertyValue('--hero-bg-y-mobile')||hero.style.getPropertyValue('--hero-bg-y')||50}" data-axis="y-mobile">
    </small>
  `;

  document.body.appendChild(panel);

  panel.querySelectorAll('input[type=range]').forEach(input => {
    input.addEventListener('input', () => {
      const axis = input.getAttribute('data-axis');
      hero.style.setProperty(`--hero-bg-${axis}`, input.value + '%');
    });
  });
}

// Hamburger menu per mobile
function initHamburger() {
  const btn   = document.getElementById('nav-hamburger');
  const links = document.getElementById('nav-links');

  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Chiudi menu al click su un link
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
    });
  });
}

// =============================================================================
//  HERO SECTION
// =============================================================================
function populateHero() {
  setText('hero-tagline',   siteData.tagline);
  setText('hero-phrase',    siteData.heroPhrase);
  setText('hero-subphrase', siteData.heroSubPhrase);
  setText('hero-cta',       siteData.heroCTA);
}

// =============================================================================
//  PORTFOLIO AUDIO
// =============================================================================

// Tiene traccia dell'eventuale audio attualmente in riproduzione
let currentAudio   = null;
let currentPlayBtn = null;

// Tiene traccia di tutti i player YouTube
const youtubePlayersList = [];

// Flag: whether the page intro (hero stagger) has been played
let pageIntroPlayed = false;

/**
 * Ferma tutti gli audio e video attualmente in riproduzione
 */
function stopAllMedia() {
  // Ferma tutti gli audio
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    if (currentPlayBtn) {
      currentPlayBtn.classList.remove('playing');
      currentPlayBtn.setAttribute('aria-label', currentPlayBtn._trackTitle);
    }
    currentAudio = null;
    currentPlayBtn = null;
  }
  
  // Ferma tutti i video YouTube conosciuti
  youtubePlayersList.forEach(entry => {
    const player = entry.player;
    if (player && typeof player.pauseVideo === 'function') {
      player.pauseVideo();
    }
  });
  
  // fallback: invia messaggio postMessage a eventuali iframe YouTube non gestiti
  document.querySelectorAll('iframe').forEach(iframe => {
    if (iframe.src && iframe.src.includes('youtube.com/embed')) {
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'pauseVideo',
        args: []
      }), '*');
    }
  });
}

/**
 * Ferma solo i video YouTube
 */
function stopAllYoutubeVideos() {
  youtubePlayersList.forEach(entry => {
    const player = entry.player;
    if (player && typeof player.pauseVideo === 'function') {
      player.pauseVideo();
    }
  });
}

function populatePortfolio() {
  const grid = document.getElementById('tracks-grid');
  if (!grid) return;

  siteData.tracks.forEach((track, index) => {
    const card = buildTrackCard(track, index);
    grid.appendChild(card);
  });
}

function buildTrackCard(track, index) {
  const card = el('div', 'track-card reveal');
  if (index % 3 === 1) card.classList.add('reveal-delay-1');
  if (index % 3 === 2) card.classList.add('reveal-delay-2');

  // --- YouTube video card ---
  if (track.youtubeId) {
    card.classList.add('track-card--video');

    const embedWrap = el('div', 'track-youtube-wrap');
    
    // Estrai solo l'ID video (rimuovi i parametri dopo ?)
    const videoId = track.youtubeId.split('?')[0];
    const iframeId = `youtube-iframe-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;

    // Crea iframe con enablejsapi per poterlo poi controllare
    const iframe = document.createElement('iframe');
    iframe.id = iframeId;
    iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
    iframe.setAttribute('allowfullscreen','');
    iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('loading','lazy');
    iframe.setAttribute('title', track.title);
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    embedWrap.appendChild(iframe);
    card.appendChild(embedWrap);

    // When iframe is clicked (user starts playback) always pause other media
    embedWrap.addEventListener('click', () => {
      stopAllMedia();
    });

    // registra iframe per inizializzazione
    youtubePlayersList.push({
      elementId: iframeId,
      videoId: videoId,
      player: null
    });

    // se API già pronta, crea player immediatamente
    if (window.YT && window.YT.Player) {
      const player = new YT.Player(iframeId, {
        events: {
          'onStateChange': onYoutubePlayerStateChange
        }
      });
      youtubePlayersList[youtubePlayersList.length-1].player = player;
    }

    const body = el('div', 'track-body');
    if (track.genre) {
      const genre = el('p', 'track-genre');
      genre.textContent = track.genre;
      body.appendChild(genre);
    }
    const title = el('h3', 'track-title');
    title.textContent = track.title;
    body.appendChild(title);
    if (track.description) {
      const desc = el('p', 'track-description');
      desc.textContent = track.description;
      body.appendChild(desc);
    }
    card.appendChild(body);
    return card;
  }

  // --- Audio card (original) ---

  let overlayBtn = null;

  // ----- COVER IMAGE (solo se è presente e si tratta di audio + vogliamo mostrarla) -----
  // Per le tracce "audio only" (senza youtubeId) non disegniamo la copertina,
  // quindi anche se config.coverImage è specificata viene ignorata. Questo
  // mantiene l'aspetto minimale richiesto dall'utente.

  if (track.coverImage && track.youtubeId) {
    // nel caso improbabile in cui un audio abbia anche un youtubeId lasciare la
    // cover (anche se questa combinazione non viene usata normalmente).
    const coverWrap = el('div', 'track-cover');

    const img = el('img');
    img.src     = track.coverImage;
    img.alt     = `Cover — ${track.title}`;
    img.loading = 'lazy';
    coverWrap.appendChild(img);

    // Overlay play al hover sulla cover
    const overlay = el('div', 'track-play-overlay');
    overlayBtn = el('button', 'overlay-play-btn');
    overlayBtn.innerHTML = svgPlay();
    overlayBtn.setAttribute('aria-label', `Play ${track.title}`);
    overlay.appendChild(overlayBtn);
    coverWrap.appendChild(overlay);

    card.appendChild(coverWrap);
  }

  // ----- CORPO CARD -----
  const body = el('div', 'track-body');

  if (track.genre) {
    const genre = el('p', 'track-genre');
    genre.textContent = track.genre;
    body.appendChild(genre);
  }

  const title = el('h3', 'track-title');
  title.textContent = track.title;
  body.appendChild(title);

  if (track.description) {
    const desc = el('p', 'track-description');
    desc.textContent = track.description;
    body.appendChild(desc);
  }

  // ----- PLAYER AUDIO -----
  const player   = buildAudioPlayer(track, overlayBtn);
  body.appendChild(player);

  card.appendChild(body);

  // Kick off waveform pre-fetch after card is in DOM
  requestAnimationFrame(() => loadWaveformData(track.audioFile));

  return card;
}

function buildAudioPlayer(track, overlayBtn) {
  const playerWrap = el('div', 'audio-player');

  // Elemento Audio HTML5
  const audio = new Audio();
  audio.preload = 'none';
  audio.src     = track.audioFile;

  // Waveform data per questa traccia (caricato async)
  let waveformData = null;

  // Struttura controlli
  const controls      = el('div', 'player-controls');
  const playBtn       = el('button', 'play-btn');
  playBtn.setAttribute('aria-label', `Play ${track.title}`);
  playBtn.innerHTML   = svgPlay() + svgPause();

  // Canvas waveform (sostituisce la barra piatta)
  const waveCanvas    = el('canvas', 'waveform-canvas');
  waveCanvas.setAttribute('aria-label', 'Audio progress');

  const times         = el('div', 'player-times');
  const timeCurrent   = el('span', 'time-current');
  const timeDuration  = el('span', 'time-duration');
  timeCurrent.textContent  = '0:00';
  timeDuration.textContent = '–:––';
  times.appendChild(timeCurrent);
  times.appendChild(timeDuration);

  const progressWrap  = el('div', 'player-progress-wrap');
  progressWrap.appendChild(waveCanvas);

  controls.appendChild(playBtn);
  controls.appendChild(progressWrap);
  playerWrap.appendChild(controls);
  playerWrap.appendChild(times);

  // Messaggio errore
  const errorMsg = el('p', 'audio-error');
  errorMsg.textContent = 'Audio file not found. Check the path in config.js.';
  playerWrap.appendChild(errorMsg);

  // draw the initial (empty) waveform once the canvas is in the DOM
  function redraw(progress) {
    drawWaveform(waveCanvas, waveformData, progress);
  }

  // Load waveform data and repaint
  loadWaveformData(track.audioFile).then(data => {
    waveformData = data;
    const progress = audio.duration ? audio.currentTime / audio.duration : 0;
    redraw(progress);
  });

  // Initial paint (placeholder)
  requestAnimationFrame(() => redraw(0));

  // ----- EVENTI AUDIO -----
  function togglePlay() {
    if (audio.paused) {
      // Stop any other audio before playing this one
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentPlayBtn) {
          currentPlayBtn.classList.remove('playing');
          currentPlayBtn.setAttribute('aria-label', currentPlayBtn._trackTitle);
        }
      }
      
      // Stop all media (YouTube via API or postMessage fallback)
      stopAllMedia();
      
      audio.play().catch(() => { errorMsg.style.display = 'block'; });
      currentAudio   = audio;
      currentPlayBtn = playBtn;
      playBtn._trackTitle = `Play ${track.title}`;
    } else {
      audio.pause();
    }
  }

  playBtn.addEventListener('click', togglePlay);
  if (overlayBtn) {
    overlayBtn.addEventListener('click', togglePlay);
  }

  audio.addEventListener('play', () => {
    playBtn.classList.add('playing');
    playBtn.setAttribute('aria-label', `Pause ${track.title}`);
  });

  audio.addEventListener('pause', () => {
    playBtn.classList.remove('playing');
    playBtn.setAttribute('aria-label', `Play ${track.title}`);
  });

  audio.addEventListener('ended', () => {
    playBtn.classList.remove('playing');
    redraw(0);
    timeCurrent.textContent = '0:00';
  });

  audio.addEventListener('loadedmetadata', () => {
    timeDuration.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    redraw(audio.currentTime / audio.duration);
    timeCurrent.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener('error', () => { errorMsg.style.display = 'block'; });

  // Seek: clic sul canvas
  waveCanvas.addEventListener('click', (e) => {
    if (!audio.duration) return;
    const rect = waveCanvas.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  });

  // Ridisegna se la finestra cambia dimensione
  window.addEventListener('resize', () => {
    const progress = audio.duration ? audio.currentTime / audio.duration : 0;
    redraw(progress);
  }, { passive: true });

  return playerWrap;
}

// =============================================================================
//  ABOUT SECTION
// =============================================================================
function populateAbout() {
  const photo = document.getElementById('about-photo');
  const bio   = document.getElementById('about-bio');

  setText('about-name', siteData.name);

  if (photo) {
    photo.src = siteData.about.photo;
    photo.alt = siteData.about.photoAlt || siteData.name;
  }

  if (bio && siteData.about.bio) {
    // Ogni paragrafo separato da \n\n diventa un <p>
    bio.innerHTML = siteData.about.bio
      .split('\n\n')
      .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  // *** video YouTube (facoltativo) ***
  const videoContainer = document.getElementById('about-video');
  if (videoContainer && siteData.about.youtubeId) {
    // Estrai solo l'ID video (rimuovi i parametri dopo ?)
    const videoId = siteData.about.youtubeId.split('?')[0];
    const iframeId = `youtube-iframe-about-${Date.now()}`;
    
    const iframe = document.createElement('iframe');
    iframe.id = iframeId;
    iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
    iframe.setAttribute('allowfullscreen','');
    iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('loading','lazy');
    iframe.setAttribute('title', siteData.name + ' video');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    
    videoContainer.appendChild(iframe);
    
    // whenever about-video is clicked, pause other media too
    videoContainer.addEventListener('click', () => {
      stopAllMedia();
    });
    
    youtubePlayersList.push({
      elementId: iframeId,
      videoId: videoId,
      player: null
    });
    
    if (window.YT && window.YT.Player) {
      const player = new YT.Player(iframeId, {
        events: {
          'onStateChange': onYoutubePlayerStateChange
        }
      });
      youtubePlayersList[youtubePlayersList.length-1].player = player;
    }
  }
}

// =============================================================================
//  SERVIZI
// =============================================================================
function populateServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  siteData.services.forEach((service, i) => {
    const card = el('div', `service-card reveal`);
    if (i % 3 === 1) card.classList.add('reveal-delay-1');
    if (i % 3 === 2) card.classList.add('reveal-delay-2');

    card.innerHTML = `
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
    `;
    grid.appendChild(card);
  });
}

// =============================================================================
//  FOOTER / CONTATTI
// =============================================================================
function populateContact() {
  const { contact, social, name, contactForm } = siteData;

  setText('contact-cta-text', contact.ctaText);
  setText('contact-cta-sub',  contact.ctaSubText);

  const emailEl = document.getElementById('contact-email');
  if (emailEl) {
    emailEl.textContent = contact.email;
    emailEl.href        = `mailto:${contact.email}`;
  }

  // --- Contact form ---
  const formWrap = document.getElementById('contact-form-wrap');
  if (formWrap) {
    if (!contactForm || !contactForm.show) {
      formWrap.style.display = 'none';
    } else {
      setText('contact-form-title', contactForm.title || 'Send a Message');
      const nameEl = document.getElementById('form-name');
      const mailEl = document.getElementById('form-email');
      const msgEl  = document.getElementById('form-message');
      if (nameEl) nameEl.placeholder = contactForm.namePlaceholder    || 'Your name';
      if (mailEl) mailEl.placeholder = contactForm.emailPlaceholder   || 'Your email';
      if (msgEl)  msgEl.placeholder  = contactForm.messagePlaceholder || 'Your message...';
      setText('form-submit', contactForm.submitText || 'Send Message');

      const form      = document.getElementById('contact-form');
      const submitBtn = document.getElementById('form-submit');
      const success   = document.getElementById('form-success');
      if (form && success) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();

          const id = (contactForm.formspreeId || '').trim();

          // No real ID — demo mode
          if (!id) {
            form.style.display    = 'none';
            success.textContent   = contactForm.successMessage || 'Message sent!';
            success.style.display = 'block';
            return;
          }

          // Disable button & show sending state
          submitBtn.disabled    = true;
          submitBtn.textContent = contactForm.sendingText || 'Sending...';

          try {
            const res = await fetch(`https://formspree.io/f/${id}`, {
              method:  'POST',
              headers: { 'Accept': 'application/json' },
              body:    new FormData(form)
            });

            if (res.ok) {
              form.style.display    = 'none';
              success.textContent   = contactForm.successMessage || 'Message sent!';
              success.style.display = 'block';
            } else {
              throw new Error('server error');
            }
          } catch {
            submitBtn.disabled    = false;
            submitBtn.textContent = contactForm.submitText || 'Send Message';
            // Show inline error below the button
            let errEl = form.querySelector('.form-send-error');
            if (!errEl) {
              errEl = document.createElement('p');
              errEl.className = 'form-send-error';
              form.appendChild(errEl);
            }
            errEl.textContent = contactForm.errorMessage || 'Something went wrong. Please try again.';
          }
        });
      }
    }
  }

  // Social links
  const socialWrap = document.getElementById('social-links');
  if (socialWrap) {
    const socialIcons = {
      spotify:    { label: 'Spotify',    svg: svgSpotify() },
      soundcloud: { label: 'SoundCloud', svg: svgSoundcloud() },
      instagram:  { label: 'Instagram',  svg: svgInstagram() },
      linkedin:   { label: 'LinkedIn',   svg: svgLinkedin() },
      youtube:    { label: 'YouTube',    svg: svgYoutube() }
    };

    Object.entries(social).forEach(([platform, url]) => {
      if (!url || !socialIcons[platform]) return;
      const a = el('a', 'social-link');
      a.href             = url;
      a.target           = '_blank';
      a.rel              = 'noopener noreferrer';
      a.setAttribute('aria-label', socialIcons[platform].label);
      a.innerHTML        = socialIcons[platform].svg;
      socialWrap.appendChild(a);
    });
  }

  // Copyright
  const year = new Date().getFullYear();
  setText('footer-copy', `© ${year} ${siteData.copyrightName} — All rights reserved`);
}

// =============================================================================
//  SCROLL REVEAL — Animazione entrata elementi
// =============================================================================
function initScrollReveal() {
  // Ensure hero texts and about paragraphs are part of the reveal set
  const heroIds = ['hero-tagline', 'hero-phrase', 'hero-subphrase', 'hero-cta'];
  heroIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${i * 120}ms`);
    }
  });

  const aboutBio = document.getElementById('about-bio');
  if (aboutBio) {
    Array.from(aboutBio.children).forEach((p, i) => {
      p.classList.add('reveal');
      p.style.setProperty('--reveal-delay', `${i * 80}ms`);
    });
  }

  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    // Fallback per browser vecchi: mostra tutto subito
    items.forEach(el => el.classList.add('visible'));
    return;
  }

  // Replay animations when element comes into view (both directions)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        // If this element was marked to wait for the page intro, skip until
        // the intro has been played by the user's click.
        if (el.dataset && el.dataset.waitIntro === 'true' && !pageIntroPlayed) {
          return;
        }

        // Add visible so CSS animation runs. Removing on exit lets it replay.
        el.classList.add('visible');
        // Special case: if element has an ongoing CSS animation we want to restart,
        // force reflow by toggling inline animation when necessary (e.g. scroll-line)
        if (el.classList.contains('scroll-line')) {
          el.style.animation = 'none';
          // next frame restore to restart
          requestAnimationFrame(() => { el.style.animation = ''; });
        }
      } else {
        // Remove class so animation can replay when re-entering viewport
        el.classList.remove('visible');
        if (el.classList.contains('scroll-line')) {
          el.style.animation = 'none';
        }
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10px 0px' });

  items.forEach(item => observer.observe(item));
}

// =============================================================================
//  SECTION BACKGROUND IMAGES
// =============================================================================
function applyBackgrounds() {
  const bg = siteData.backgrounds;
  if (!bg) return;
  const map = {
    hero:      document.getElementById('hero'),
    portfolio: document.getElementById('portfolio'),
    about:     document.getElementById('about'),
    services:  document.getElementById('services'),
    contact:   document.getElementById('contact')
  };
  Object.entries(bg).forEach(([key, url]) => {
    if (!url || !map[key]) return;
    if (key === 'hero') {
      // hero uses ::before with CSS variables for image and positioning
      map[key].style.setProperty('--hero-bg', `url('${url}')`);
      // support optional offsets configuration
      if (bg.heroY) map[key].style.setProperty('--hero-bg-y', bg.heroY);
      if (bg.heroX) map[key].style.setProperty('--hero-bg-x', bg.heroX);
      if (bg.heroYMobile) map[key].style.setProperty('--hero-bg-y-mobile', bg.heroYMobile);
      if (bg.heroXMobile) map[key].style.setProperty('--hero-bg-x-mobile', bg.heroXMobile);
    } else {
      map[key].style.backgroundImage    = `url('${url}')`;
      map[key].style.backgroundSize     = 'cover';
      map[key].style.backgroundPosition = 'center';
      map[key].style.backgroundRepeat   = 'no-repeat';
    }
    map[key].classList.add('has-bg-image');
  });
}

// =============================================================================
//  WAVEFORM ENGINE
// =============================================================================

/** Cache: audioSrc → Float32Array di ampiezza normalizzata */
const waveformCache = new Map();

async function loadWaveformData(audioSrc) {
  if (waveformCache.has(audioSrc)) return waveformCache.get(audioSrc);
  try {
    const res = await fetch(audioSrc);
    if (!res.ok) throw new Error('fetch failed');
    const buf     = await res.arrayBuffer();
    const actx    = new (window.AudioContext || window.webkitAudioContext)();
    const decoded = await actx.decodeAudioData(buf);
    actx.close();
    const raw   = decoded.getChannelData(0);
    const N     = 80;
    const block = Math.floor(raw.length / N);
    const data  = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      let rms = 0;
      for (let j = 0; j < block; j++) rms += raw[i * block + j] ** 2;
      data[i] = Math.sqrt(rms / block);
    }
    const maxV = Math.max(...data);
    if (maxV > 0) for (let i = 0; i < N; i++) data[i] /= maxV;
    waveformCache.set(audioSrc, data);
    return data;
  } catch { return null; }
}

function drawWaveform(canvas, data, progress) {
  const dpr = window.devicePixelRatio || 1;
  const W   = canvas.offsetWidth  || 200;
  const H   = canvas.offsetHeight || 48;

  if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
  }

  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);

  const N    = data ? data.length : 80;
  const step = W / N;
  const barW = Math.max(1.5, step * 0.55);
  const playedIdx = Math.floor(progress * N);

  for (let i = 0; i < N; i++) {
    // Placeholder: gentle sine wave while real data loads
    const amp  = data ? data[i] : (0.2 + 0.15 * Math.abs(Math.sin(i * 0.35)));
    const barH = Math.max(2, amp * H * 0.85);
    const x    = i * step + (step - barW) / 2;
    const y    = (H - barH) / 2;

    ctx.fillStyle = i < playedIdx
      ? 'rgba(200, 169, 110, 1)'
      : 'rgba(255, 255, 255, 0.13)';

    ctx.beginPath();
    const r = Math.min(barW / 2, 2);
    if (ctx.roundRect) ctx.roundRect(x, y, barW, barH, r);
    else               ctx.rect(x, y, barW, barH);
    ctx.fill();
  }
}

// =============================================================================
//  UTILITY FUNCTIONS
// =============================================================================

/** Crea un elemento HTML con classe opzionale */
function el(tag, className) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  return element;
}

/** Imposta testo di un elemento tramite ID */
function setText(id, text) {
  const element = document.getElementById(id);
  if (element && text !== undefined) element.textContent = text;
}

/** Formatta secondi in MM:SS */
function formatTime(seconds) {
  if (isNaN(seconds) || !isFinite(seconds)) return '–:––';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

// =============================================================================
//  SVG ICONS (inline, nessuna dipendenza esterna)
// =============================================================================

function svgPlay() {
  return `<svg class="icon-play" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5.14v14l11-7-11-7z"/>
  </svg>`;
}

function svgPause() {
  return `<svg class="icon-pause" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 5h4v14H6zM14 5h4v14h-4z"/>
  </svg>`;
}

function svgSpotify() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.307c-.215.354-.676.463-1.028.247-2.817-1.722-6.362-2.112-10.538-1.157-.402.092-.804-.16-.896-.562-.092-.402.16-.804.562-.896 4.568-1.044 8.487-.594 11.65 1.337.353.216.462.676.25 1.031zm1.471-3.27c-.27.438-.84.576-1.277.307-3.225-1.982-8.137-2.556-11.950-1.398-.494.15-1.015-.131-1.164-.624-.15-.493.131-1.015.624-1.164 4.358-1.32 9.775-.68 13.46 1.603.437.269.575.84.307 1.276zm.127-3.405C15.79 8.47 9.962 8.27 6.674 9.254c-.593.18-1.219-.154-1.399-.747-.18-.593.154-1.219.747-1.399 3.788-1.15 10.083-.927 14.063 1.6.534.328.699 1.024.371 1.558-.328.534-1.024.699-1.342.366z"/>
  </svg>`;
}

function svgSoundcloud() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.56 8.87V17h8.76c1.47-.07 2.68-1.28 2.68-2.75 0-1.52-1.23-2.75-2.75-2.75-.13 0-.26.01-.38.03-.1-2.28-1.96-4.1-4.26-4.1-1.75 0-3.25 1.04-4.05 2.54zM0 15.25c0 .97.78 1.75 1.75 1.75S3.5 16.22 3.5 15.25v-4.5C3.5 9.78 2.72 9 1.75 9S0 9.78 0 10.75v4.5zm4.34 1.5c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75V8.75C7.84 7.78 7.06 7 6.09 7S4.34 7.78 4.34 8.75v8zm3.53.5c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75V9.75C11.37 8.78 10.59 8 9.62 8S7.87 8.78 7.87 9.75v7.5z"/>
  </svg>`;
}

function svgInstagram() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>`;
}

function svgLinkedin() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`;
}

function svgYoutube() {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>`;
}
