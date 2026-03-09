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
  heroSubPhrase: "I compose original scores, and provide sound design and mixing for film, video games, and digital media. Each project is a unique sound experience",

  // Pulsante hero — il click scorrerà alla sezione portfolio
  heroCTA: "Listen",

  // ---------------------------------------------------------------------------
  //  SEZIONE "CHI SONO"
  // ---------------------------------------------------------------------------
  // Puoi aggiungere anche un video YouTube: inserisci soltanto l'ID (la parte
  // dopo "watch?v=") in youtubeId. Lascia il campo vuoto o rimuovilo per non
  // mostrare alcun video.
  about: {
    bio: "I hold a Summa Cum Laude degree in Classical Guitar from Italy and have been recognized as a multi-award winner in international competitions. While my roots are in performance, my true calling has always been composing for film and video games.\n\n I am currently furthering my craft at Berklee Online College of Music, blending classical mastery with modern scoring. I’m driven by the challenge of creating immersive soundtracks and SFX that bring digital worlds to life.",
    // Inserisci il percorso alla tua foto profilo (es. "assets/foto-profilo.jpg")
    // Puoi usare anche un URL esterno: "https://esempio.com/mia-foto.jpg"
    photo: "",
    photoAlt: "Foto profilo di Jacopo Romano",
    // ID YouTube (facoltativo): ad esempio "dQw4w9WgXcQ" senza parametri
    youtubeId: "Ln4F0ZXcEkw?si=1LlwRcH2U_q8ZQvS"
  },

  // ---------------------------------------------------------------------------
  //  PORTFOLIO AUDIO & VIDEO — I TUOI BRANI/PROGETTI
  //  Per tracce audio: inserisci audioFile e coverImage
  //  Per video YouTube: inserisci youtubeId (l'ID dopo watch?v= nell'URL)
  //    es. https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtubeId: "dQw4w9WgXcQ"
  //  Puoi mescolare tracce audio e video nello stesso elenco.
  // ---------------------------------------------------------------------------
  tracks: [
    {
      title: "Cave Ambient",
      description: "Videogame track",
      genre: "Ambient",
      audioFile: "assets/audio/Cave Ambient.wav",
      coverImage: "assets/covers/cover-01.jpg"
    },
    {
      title: "Before Battle",
      description: "Videogame/Film track",
      genre: "Epic / Action",
      audioFile: "assets/audio/Beforebattle.wav",
      coverImage: "assets/covers/cover-02.jpg"
    },
    {
      title: "The Beloved Queen",
      description: "Videogame/Film Character Track",
      genre: "Nostalgic / Emotional",
      audioFile: "assets/audio/The Beloved Queen.wav",
      coverImage: "assets/covers/cover-03.jpg"
    },
    {
      title: "Junkienator - Main Theme",
      description: "by Interactive Dreams Studio",
      genre: "Video Game / Indie",
      youtubeId: "QVDxEfidNCY?si=_gAYnZBSOBdW"   // ← the ID from the YouTube URL
    },
    {
      title: "Junkienator - Main Theme Night Version",
      description: "by Interactive Dreams Studio",
      genre: "Video Game / Indie",
      youtubeId: "WhOPONmTk0A?si=fju-4UbPsfvkclPT"   // ← the ID from the YouTube URL
    },
    {
      title: "Junkienator - Nightmare Background",
      description: "by Interactive Dreams Studio",
      genre: "Video Game / Indie",
      youtubeId: "6wbEaCcpn6w?si=FUhgZeMpmP_eUBNW"   // ← the ID from the YouTube URL
    },
    {
      title: "Junkienator - Retrospective",
      description: "by Interactive Dreams Studio",
      genre: "Video Game / Indie",
      youtubeId: "6rnC_N6J9xs?si=HB4RlzaDAHk-6Kpc"   // ← the ID from the YouTube URL
    },
    {
      title: "Junkienator - End Credits",
      description: "by Interactive Dreams Studio",
      genre: "Video Game / Indie",
      youtubeId: "9J54M4jMkVw?si=saH2WlxQJhL98h3K"   // ← the ID from the YouTube URL
    },
    {
      title: "The Origin of Jack Frost",
      description: "Original Rescore",
      genre: "Film/Cinematic",
      youtubeId: "gBx2n78ctaU?si=mYAvffmQzC866ZUr"   // ← the ID from the YouTube URL
    }

  ],

  // ---------------------------------------------------------------------------
  //  SERVIZI OFFERTI
  //  Modifica titolo, icona (emoji) e descrizione di ogni servizio.
  // ---------------------------------------------------------------------------
  services: [
    {
      icon: "🎬",
      title: "Video Composition",
      description: "Original soundtracks for films, documentaries, TV series and shorts. Every note serving the visual narrative."
    },
    {
      icon: "🎮",
      title: "Music for Video Games",
      description: "Adaptive scores and memorable themes for games of every genre. From indie projects to AAA titles, implementation with FMOD and WWise."
    },
    {
      icon: "🔊",
      title: "Sound Design",
      description: "Creation of sound effects, ambiences and audio textures that bring worlds and characters to life."
    },
    {
      icon: "🎚️",
      title: "Mixing & Mastering",
      description: "Professional mix polishing and mastering to ensure maximum impact on any audio system."
    },
    {
      icon: "📢",
      title: "Sonic Branding for Brands",
      description: "Jingles, sonic branding and music for advertising that make a brand instantly recognizable."
    },
    {
      icon: "🎵",
      title: "Music Production",
      description: "Arranging and full production of original tracks for artists, podcasts and digital content."
    }
  ],

  // ---------------------------------------------------------------------------
  //  CONTATTI E SOCIAL
  //  Inserisci la tua email e i tuoi profili social.
  //  Lascia una stringa vuota "" per nascondere un'icona social.
  // ---------------------------------------------------------------------------
  contact: {
    email: "",
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
    linkedin:   "",                                            // Lascia vuoto per nasconderlo
    youtube:    "https://www.youtube.com/@jacoporomano7062"                                            // Lascia vuoto per nasconderlo
  },

  // ---------------------------------------------------------------------------
  //  TESTI NAVIGAZIONE
  // ---------------------------------------------------------------------------
  nav: {
    portfolio: "Portfolio",
    about:     "About Me",
    services:  "Services",
    contact:   "Contact"
  },

  // ---------------------------------------------------------------------------
  //  ETICHETTE SEZIONI — label sopra i titoli di ogni sezione
  // ---------------------------------------------------------------------------
  labels: {
    portfolioLabel: "Listen",
    portfolioTitle: "Portfolio",
    aboutLabel:     "Bio",
    servicesLabel:  "What I Offer",
    servicesTitle:  "Services"
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
    hero:      "assets/Foto/sfondo.jpg",   // Sfondo sezione Hero      (es. "assets/bg-hero.jpg")
    heroX:     "35%", // Opzionale: asse X (es. "40%" o "center")
    heroY:     "25%", // Opzionale: verticale posizione immagine
    heroXMobile: "30%", // Opzionale: asse X per mobile
    heroYMobile: "15%", // Opzionale: verticale posizione per mobile
    portfolio: "",   // Sfondo sezione Portfolio
    about:     "",   // Sfondo sezione Chi Sono
    services:  "",   // Sfondo sezione Servizi
    contact:   ""    // Sfondo sezione Contatti/Footer
  }

};
