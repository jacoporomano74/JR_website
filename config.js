// =============================================================================
//  CONFIG.JS — IL TUO FILE DI CONFIGURAZIONE PERSONALE
//  Modifica solo questo file per aggiornare tutti i contenuti del sito.
//  Non toccare app.js o index.html se non sai cosa stai facendo.
// =============================================================================

const siteData = {

  // ---------------------------------------------------------------------------
  //  INFORMAZIONI PERSONALI
  // ---------------------------------------------------------------------------
  name: "Jacopo Romano",         // Il tuo nome (appare nel navbar e nell'hero)
  tagline: "Composer & Sound Designer",  // La tua qualifica
  heroPhrase: "Jacopo Romano",  // Frase grande nell'hero
  heroSubPhrase: "Composer & Technical Sound Designer — Games and Film",

  // Pulsante hero — il click scorrerà alla sezione portfolio
  heroCTA: "Listen",

  // ---------------------------------------------------------------------------
  //  SEZIONE "CHI SONO"
  // ---------------------------------------------------------------------------
  // Puoi aggiungere anche un video YouTube: inserisci soltanto l'ID (la parte
  // dopo "watch?v=") in youtubeId. Lascia il campo vuoto o rimuovilo per non
  // mostrare alcun video.
  about: {
    bio: "I compose music and design sound for film and games — and for games I also handle implementation in FMOD and Wwise.\n\nI come from classical guitar and classical composition — a Summa Cum Laude degree in Italy, first prizes in international competitions, and years of concert work as a soloist and with orchestras, which I still perform today. I'm now specialising in game audio at Berklee Online, working in FMOD, Wwise and Unity.\n\nFilms and games with scores that give you chills are what made me want to do this. Pirates of the Caribbean, Interstellar, Hollow Knight, Red Dead Redemption 2, Bloodborne — music carrying as much of the story as the writing does. That's the work I want to make.\n\nClassical training taught me to stay with something difficult until it's right, and to perform under pressure. Film scoring and game audio ask for the same things, with a different set of tools.",




    // Inserisci il percorso alla tua foto profilo (es. "assets/foto-profilo.jpg")
    // Puoi usare anche un URL esterno: "https://esempio.com/mia-foto.jpg"
    photo: "",
    photoAlt: "Foto profilo di Jacopo Romano",
    // ID YouTube (facoltativo): ad esempio "dQw4w9WgXcQ" senza parametri
    youtubeId: "Ln4F0ZXcEkw?si=1LlwRcH2U_q8ZQvS",
    // Galleria di immagini sotto il video
    gallery: [
      "assets/Foto/fotojj.jpg",
      "assets/Foto/WhatsApp Image 2020-06-08 at 08.59.05.jpeg",
      "assets/Foto/54068868409_7e1ff7839c_o.jpg",
      "assets/Foto/hero_mobile.jpg",
      "assets/Foto/54065914121_d6825ce74e_o.jpg"
    ]
  },

  // ---------------------------------------------------------------------------
  //  TESTIMONIALS / RECENSIONI
  //  Aggiungi le recensioni delle persone con cui hai collaborato.
  // ---------------------------------------------------------------------------
  testimonials: [
    {
      section: "film",
      name: "Malachi Del Rosario",
      role: "Composer",
      quote: "Jacopo is an exceptionally efficient composer whose communication remains clear and punctual—even across time zones. We collaborated as co-composers on a film project, consistently exchanging thoughtful feedback and creative ideas that elevated the work. He demonstrates remarkable flexibility, both musically and logistically, and, most importantly, he delivers high-quality results ahead of deadlines."
    },
    {
      section: "game",
      name: "Luca Chiaiese",
      role: "Game Director, Independent Developer",
      quote: "Meeting Jacopo was a stroke of luck. He immediately connected with our vision, demonstrating incredible talent and enriching our game with his music. He constantly surprised us by capturing the exact mood we needed for every moment. Masterfully spanning various genres, he didn’t just accompany the production: his compositions even inspired us to rework and improve several scenes in the game."
    },
    {
      section: "game",
      name: "Roberto Domenella",
      role: "Game Director at Interactive Dreams Studio",
      quote: "We hired Jacopo for our game, Junkienator. Jacopo immediately proved to be extremely professional. He quickly understood the musical direction of the game and delivered a soundtrack that shaped and completed our product. Without him, our game would have been incomplete. We were incredibly lucky to have met such a talented composer by chance, someone who had the patience to dedicate even more time to us than necessary to create an exceptional product that fully met our needs."
    },
    {
      section: "game",
      name: "MangoWorks",
      role: "Creative Director, Independent Developer",
      quote: "My experience working with Jacopo was great as he would listen to feedback and provide updates on projects regularly, this was also accompanied by musical talent and expertise as well as the amazing and fitting music for our game, it also helped that he was able to do sfx that matched the style of sounds and consistency we were looking for!"
    }
  ],

  // ---------------------------------------------------------------------------
  //  PROGETTI DI VIDEOGIOCHI — una scheda per progetto, con le sue tracce
  //  Ogni progetto ha i suoi metadati di produzione (role/year/developer/...)
  //  e un elenco di tracce, ciascuna con il proprio youtubeId.
  //  thumbnailYoutubeId: l'ID del video usato per la thumbnail di copertina
  //  della card (placeholder finché non esiste un'immagine key-art dedicata).
  // ---------------------------------------------------------------------------
  gameProjects: [
    {
      title: "Fishy Business",
      developer: "MangoWorks",
      role: "Composer & Sound Designer",
      year: "2026",
      platforms: "Browser (itch.io)",
      engine: "HTML5",
      audio: "",
      url: "https://mangoworks.itch.io/fishy-business",
      thumbnailYoutubeId: "jeqwj_z4U_I",
      tracks: [
        { title: "Main Theme", youtubeId: "jeqwj_z4U_I?si=PfWNty2PTMgbrsLl" },
        { title: "Remixed Main Theme", youtubeId: "a8CZZ5c31Vs?si=ncWnbe_N2vci-QbX" },
        { title: "Menu Theme", youtubeId: "F4DLGYXamZ8?si=Ou7UdQYJfBuK1TmI" }
      ]
    },
    {
      title: "Cardboard Cars",
      developer: "MangoWorks",
      role: "Composer & Sound Designer",
      year: "2026",
      platforms: "Browser (itch.io)",
      engine: "HTML5",
      audio: "",
      url: "https://mangoworks.itch.io/cardboard-cars",
      thumbnailYoutubeId: "nkE4sYFZH58",
      tracks: [
        { title: "Main Theme", youtubeId: "nkE4sYFZH58?si=z3lmk1_VbY4PDyqv" },
        { title: "Menu Theme", youtubeId: "lXB5cy6MCtc?si=hUjVLtmL_zb_MmsL" }
      ]
    },
    {
      title: "Junkienator",
      developer: "Interactive Dreams Studio",
      role: "Composer",
      year: "2025",
      platforms: "PC (Steam)",
      engine: "Unity",
      audio: "Unity native audio",
      url: "https://store.steampowered.com/app/2080700/Junkienator/",
      thumbnailYoutubeId: "QVDxEfidNCY",
      tracks: [
        { title: "Main Theme", youtubeId: "QVDxEfidNCY?si=_gAYnZBSOBdW" },
        { title: "Main Theme Night Version", youtubeId: "WhOPONmTk0A?si=fju-4UbPsfvkclPT" },
        { title: "Nightmare Background", youtubeId: "6wbEaCcpn6w?si=FUhgZeMpmP_eUBNW" },
        { title: "Retrospective", youtubeId: "6rnC_N6J9xs?si=HB4RlzaDAHk-6Kpc" },
        { title: "End Credits", youtubeId: "9J54M4jMkVw?si=saH2WlxQJhL98h3K" }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  //  PROGETTI CINEMATOGRAFICI — una scheda per progetto, stessa struttura di
  //  gameProjects: metadati di produzione (role/year/director/type/notes) e un
  //  elenco di tracce (di solito una sola: il video del film).
  //  thumbnailYoutubeId: l'ID del video usato per la thumbnail di copertina.
  // ---------------------------------------------------------------------------
  filmProjects: [
    {
      title: "Survivors",
      role: "Co-composer",
      year: "2026",
      director: "Christopher Hill",
      type: "Short film",
      notes: "Co-composed with Malachi Del Rosario",
      thumbnailYoutubeId: "h4bmee1Hw0k",
      tracks: [
        { title: "Survivors", youtubeId: "h4bmee1Hw0k?si=L0y-RITclLsEBzxH" }
      ]
    },
    {
      title: "Saturday Morning",
      role: "Composer",
      year: "2026",
      director: "Olivia Mundy",
      type: "Short film",
      thumbnailYoutubeId: "XDOG2Xbm3jU",
      tracks: [
        { title: "Saturday Morning", youtubeId: "XDOG2Xbm3jU?si=RfgL-IZlfKHvLt-y" }
      ]
    },
    {
      title: "The Origin of Jack Frost",
      role: "Composer",
      year: "",
      director: "",
      type: "Original rescore — personal project, not a commissioned score",
      thumbnailYoutubeId: "gBx2n78ctaU",
      tracks: [
        { title: "The Origin of Jack Frost", youtubeId: "gBx2n78ctaU?si=mYAvffmQzC866ZUr" }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  //  PORTFOLIO AUDIO & VIDEO — DEMO
  //  Per tracce audio: inserisci audioFile e coverImage
  //  Per video YouTube: inserisci youtubeId (l'ID dopo watch?v= nell'URL)
  //    es. https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtubeId: "dQw4w9WgXcQ"
  //  Puoi mescolare tracce audio e video nello stesso elenco.
  //  (Le tracce dei progetti di videogiochi vivono in gameProjects, quelle dei
  //  progetti cinematografici in filmProjects, sopra.)
  // ---------------------------------------------------------------------------
  tracks: [
    {
      section: "demo",
      title: "Riot Challenge Finalist",
      description: "Videogame/Film Character Track",
      genre: "Nostalgic / Emotional",
      audioFile: "assets/audio/RiotChallengeFinalist.wav",
      coverImage: "assets/covers/cover-03.jpg"
    },
    {
      section: "demo",
      title: "Cave Ambient",
      description: "Videogame track",
      genre: "Ambient",
      audioFile: "assets/audio/Cave Ambient.wav",
      coverImage: "assets/covers/cover-01.jpg"
    },
    {
      section: "demo",
      title: "Before Battle",
      description: "Videogame/Film track",
      genre: "Epic / Action",
      audioFile: "assets/audio/Beforebattle.wav",
      coverImage: "assets/covers/cover-02.jpg"
    },
    {
      section: "demo",
      title: "The Beloved Queen",
      description: "Videogame/Film Character Track",
      genre: "Nostalgic / Emotional",
      audioFile: "assets/audio/The Beloved Queen.wav",
      coverImage: "assets/covers/cover-03.jpg"
    }


  ],

  // ---------------------------------------------------------------------------
  //  SERVIZI OFFERTI
  //  Modifica titolo, icona (emoji) e descrizione di ogni servizio.
  // ---------------------------------------------------------------------------
  services: [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h4"/><path d="M8 10v4"/><path d="M15 13h.01"/><path d="M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>',
      title: "Music for Video Games",
      description: "Adaptive scores and memorable themes for games of every genre, implementation with FMOD and Wwise."
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10v4"/><path d="M6 6v12"/><path d="M10 3v18"/><path d="M14 8v8"/><path d="M18 5v14"/><path d="M22 10v4"/></svg>',
      title: "Sound Design",
      description: "Creation of sound effects, ambiences and audio textures that bring worlds and characters to life."
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 5.5"/><path d="m12.4 3.4 3.1 5.5"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>',
      title: "Video Composition",
      description: "Original soundtracks for films, documentaries, TV series and shorts. Every note serving the visual narrative."
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="4" x2="14" y2="4"/><line x1="10" y1="4" x2="3" y2="4"/><line x1="21" y1="12" x2="12" y2="12"/><line x1="8" y1="12" x2="3" y2="12"/><line x1="21" y1="20" x2="16" y2="20"/><line x1="12" y1="20" x2="3" y2="20"/><line x1="14" y1="2" x2="14" y2="6"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="16" y1="18" x2="16" y2="22"/></svg>',
      title: "Mixing & Mastering",
      description: "Professional mix polishing and mastering to ensure maximum impact on any audio system."
    }
  ],

  // ---------------------------------------------------------------------------
  //  CONTATTI E SOCIAL
  //  Inserisci la tua email e i tuoi profili social.
  //  Lascia una stringa vuota "" per nascondere un'icona social.
  // ---------------------------------------------------------------------------
  contact: {
    email: "jacoporomano74@gmail.com",
    ctaText: "Got a project in mind?",
    ctaSubText: "Reach out — I'd love to hear about it."
  },

  // ---------------------------------------------------------------------------
  //  MODULO DI CONTATTO — visibile nella sezione footer/contatti
  //  Imposta show: false per nascondere il form
  // ---------------------------------------------------------------------------
  contactForm: {
    show:               true,
    // Crea un account su https://formspree.io, crea un form e incolla qui l'ID
    // (quello dopo /f/ nell'URL del form, es. "xaabbccdd")
    // Lascia "" per disabilitare l'invio reale (solo demo)
    formspreeId:        "mlgwknyq",
    title:              "Send a Message",
    namePlaceholder:    "Your name",
    emailPlaceholder:   "Your email",
    messagePlaceholder: "Tell me about your project...",
    submitText:         "Send Message",
    sendingText:        "Sending...",
    successMessage:     "Thanks! I'll get back to you as soon as possible.",
    errorMessage:       "Something went wrong. Please try again or send a direct email."
  },

  social: {
    spotify:    "",                                            // Lascia vuoto per nasconderlo
    soundcloud: "",                                            // Lascia vuoto per nasconderlo
    instagram:  "https://www.instagram.com/jacoporomano74/",         // URL profilo Instagram
    linkedin:   "https://www.linkedin.com/in/jacopo-romano-composer-sounddesigner/", // URL profilo LinkedIn
    youtube:    "https://www.youtube.com/@jacoporomano7062"                                            // Lascia vuoto per nasconderlo
  },

  // ---------------------------------------------------------------------------
  //  TESTI NAVIGAZIONE
  // ---------------------------------------------------------------------------
  // nav.testimonials/services non esistono più come voci di menu a sé:
  // il loro contenuto ora vive dentro games.html / film.html / about.html.
  nav: {
    games:   "Games",
    film:    "Film",
    about:   "About Me",
    contact: "Contact"
  },

  // ---------------------------------------------------------------------------
  //  ETICHETTE SEZIONI — label sopra i titoli di ogni sezione
  // ---------------------------------------------------------------------------
  labels: {
    testimonialsLabel: "Reviews",
    testimonialsTitle: "Testimonials",
    portfolioLabel: "Listen",
    portfolioTitle: "Portfolio",
    aboutLabel:     "Bio",
    servicesLabel:  "What I Offer",
    servicesTitle:  "Services",
    // Blocco separato in fondo a games.html per le tracce senza un progetto associato
    demosLabel: "Listen",
    demosTitle: "Concept & Demos"
  },

  // ---------------------------------------------------------------------------
  //  COPYRIGHT (anno aggiornato automaticamente da app.js)
  // ---------------------------------------------------------------------------
  copyrightName: "Jacopo Romano",

  // ---------------------------------------------------------------------------
  //  IMMAGINI DI SFONDO SEZIONI
  //  Inserisci il percorso all'immagine (es. "assets/bg-hero.jpg")
  //  oppure un URL esterno. Lascia "" per usare il colore di default.
  //  Per l'hero puoi anche specificare offset orizzontale/verticale
  //  - entrambe accettano percentuali oppure pixel
  //    backgrounds.heroX = "40%";       // sposta orizzontalmente
  //    backgrounds.heroY = "60%";       // sposta verticalmente
  //  e sono disponibili versioni separate per mobile:
  //    backgrounds.heroXMobile = "30%";
  //    backgrounds.heroYMobile = "50%";
  // ---------------------------------------------------------------------------
  backgrounds: {
    // L'hero ora è split-screen: la foto è un <img> in index.html, non uno sfondo.
    hero:      "",   // Sfondo sezione Hero      (es. "assets/bg-hero.jpg")
    heroX:     "50%", // Opzionale: asse X (es. "40%" o "center")
    heroY:     "40%", // Opzionale: verticale posizione immagine
    heroXMobile: "30%", // Opzionale: asse X per mobile
    heroYMobile: "15%", // Opzionale: verticale posizione per mobile
    portfolio: "",   // Sfondo sezione Portfolio
    about:     "",   // Sfondo sezione Chi Sono
    services:  "",   // Sfondo sezione Servizi
    contact:   ""    // Sfondo sezione Contatti/Footer
  }

};
