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
  heroPhrase: "Musica che racconta storie.",  // Frase grande nell'hero
  heroSubPhrase: "Compongo colonne sonore originali, sound design e mixing per cinema, videogiochi e media digitali. Ogni progetto è un'esperienza sonica unica.",

  // Pulsante hero — il click scorrerà alla sezione portfolio
  heroCTA: "Ascolta i miei lavori",

  // ---------------------------------------------------------------------------
  //  SEZIONE "CHI SONO"
  // ---------------------------------------------------------------------------
  about: {
    bio: "Sono un compositore e sound designer con oltre 10 anni di esperienza nel creare paesaggi sonori per media audiovisivi. Ho collaborato con registi, sviluppatori di videogiochi e brand internazionali, portando ogni progetto a un livello emotivo più profondo attraverso la musica.\n\nLa mia filosofia creativa unisce composizione orchestrale classica con suoni elettronici contemporanei, creando un linguaggio sonoro riconoscibile e versatile.",
    // Inserisci il percorso alla tua foto profilo (es. "assets/foto-profilo.jpg")
    // Puoi usare anche un URL esterno: "https://esempio.com/mia-foto.jpg"
    photo: "assets/profile.jpg",
    photoAlt: "Foto profilo di Jacopo Romano"
  },

  // ---------------------------------------------------------------------------
  //  PORTFOLIO AUDIO — I TUOI BRANI/PROGETTI
  //  Aggiungi o rimuovi blocchi { } per aggiungere o togliere tracce.
  //  audioFile: percorso al file MP3/WAV (es. "assets/audio/mio-brano.mp3")
  //  coverImage: percorso all'immagine copertina (es. "assets/covers/copertina1.jpg")
  // ---------------------------------------------------------------------------
  tracks: [
    {
      title: "Echoes of the Void",
      description: "Colonna sonora orchestrale per cortometraggio sci-fi. Un viaggio emotivo tra il silenzio dello spazio e la forza interiore del protagonista.",
      genre: "Orchestral / Cinematic",
      audioFile: "assets/audio/JR 1.wav",
      coverImage: "assets/covers/cover-01.jpg"
    },
    {
      title: "Neon Pulse",
      description: "Sound design e musica elettronica per un videogioco d'azione ambientato in una metropoli futuristica.",
      genre: "Electronic / Game",
      audioFile: "assets/audio/track-02.mp3",
      coverImage: "assets/covers/cover-02.jpg"
    },
    {
      title: "Foresta Incantata",
      description: "Composizione ambient per una serie documentaristica sulla natura. Trame sonore organiche e strumenti acustici.",
      genre: "Ambient / Documentary",
      audioFile: "assets/audio/track-03.mp3",
      coverImage: "assets/covers/cover-03.jpg"
    },
    {
      title: "Requiem for a Brand",
      description: "Jingle e identità sonora per campagna pubblicitaria internazionale. Dal concept alla produzione finale.",
      genre: "Commercial / Advertising",
      audioFile: "assets/audio/track-04.mp3",
      coverImage: "assets/covers/cover-04.jpg"
    },
    {
      title: "Inner Voices",
      description: "Colonna sonora per installazione artistica interattiva. Musica generativa che risponde ai movimenti del visitatore.",
      genre: "Experimental / Art",
      audioFile: "assets/audio/track-05.mp3",
      coverImage: "assets/covers/cover-05.jpg"
    },
    {
      title: "Storm Protocol",
      description: "Action cinematic per trailer istituzionale. Percussioni massive, ottoni e sound design integrati.",
      genre: "Trailer / Action",
      audioFile: "assets/audio/track-06.mp3",
      coverImage: "assets/covers/cover-06.jpg"
    }
  ],

  // ---------------------------------------------------------------------------
  //  SERVIZI OFFERTI
  //  Modifica titolo, icona (emoji) e descrizione di ogni servizio.
  // ---------------------------------------------------------------------------
  services: [
    {
      icon: "🎬",
      title: "Composizione per Video",
      description: "Colonne sonore originali per film, documentari, serie TV e cortometraggi. Ogni nota al servizio della narrazione visiva."
    },
    {
      icon: "🎮",
      title: "Musica per Videogiochi",
      description: "Score adattativi e temi memorabili per giochi di ogni genere. Dalla single-room indie al titolo AAA."
    },
    {
      icon: "🔊",
      title: "Sound Design",
      description: "Creazione di effetti sonori, ambienti e texture audio che danno vita a mondi e personaggi."
    },
    {
      icon: "🎚️",
      title: "Mixing & Mastering",
      description: "Rifinitura professionale del mix e mastering per garantire il massimo impatto su qualsiasi sistema audio."
    },
    {
      icon: "📢",
      title: "Identità Sonora per Brand",
      description: "Jingle, sonic branding e musica per pubblicità che rendono un brand immediatamente riconoscibile."
    },
    {
      icon: "🎵",
      title: "Produzione Musicale",
      description: "Arrangiamento e produzione completa di brani originali per artisti, podcast e contenuti digitali."
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
    successMessage:     "Thanks! I'll get back to you soon.",
    errorMessage:       "Something went wrong. Please try again or send a direct email."
  },

  social: {
    spotify:    "https://open.spotify.com/artist/TUO-ID",    // URL profilo Spotify
    soundcloud: "https://soundcloud.com/tuo-profilo",        // URL profilo SoundCloud
    instagram:  "https://instagram.com/tuo-profilo",         // URL profilo Instagram
    linkedin:   "https://linkedin.com/in/tuo-profilo",       // URL profilo LinkedIn
    youtube:    ""                                            // Lascia vuoto per nasconderlo
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
  // ---------------------------------------------------------------------------
  backgrounds: {
    hero:      "",   // Sfondo sezione Hero      (es. "assets/bg-hero.jpg")
    portfolio: "",   // Sfondo sezione Portfolio
    about:     "",   // Sfondo sezione Chi Sono
    services:  "",   // Sfondo sezione Servizi
    contact:   ""    // Sfondo sezione Contatti/Footer
  }

};
