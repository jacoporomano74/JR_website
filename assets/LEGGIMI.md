# CARTELLA ASSETS — Guida ai file

Questa cartella contiene tutti i tuoi file media (audio, immagini).
Di seguito trovi la struttura da rispettare.

---

## 📁 Struttura cartelle

```
assets/
├── audio/           → I tuoi file audio (MP3 o WAV)
├── covers/          → Le immagini copertina dei brani (JPG, PNG, WebP)
└── profile.jpg      → La tua foto profilo per la sezione "Chi sono"
```

---

## 🎵 File Audio (`assets/audio/`)

Inserisci qui i tuoi file MP3 o WAV.

Nel file `config.js`, per ogni traccia, imposta il campo `audioFile` con il percorso relativo.
Esempio:
```js
audioFile: "assets/audio/nome-del-file.mp3"
```

**Formato consigliato:** MP3 a 192 kbps o superiore.

---

## 🖼️ Immagini Copertina (`assets/covers/`)

Inserisci qui le immagini quadrate o rettangolari per ogni brano.

Nel file `config.js`, per ogni traccia, imposta il campo `coverImage`:
```js
coverImage: "assets/covers/nome-copertina.jpg"
```

**Dimensione consigliata:** almeno 600×400 pixel (oppure 600×600 per quadrata).

---

## 👤 Foto Profilo (`assets/profile.jpg`)

Inserisci qui la tua foto profilo. Puoi usare qualsiasi nome, basta aggiornare
il campo `photo` nella sezione `about` di `config.js`:
```js
about: {
  photo: "assets/profile.jpg",
  ...
}
```

**Dimensione consigliata:** almeno 600×750 pixel (formato ritratto).

---

## ⚠️ Note Importanti

- Se un file audio non è presente, il player mostrerà un messaggio di errore.
- Se un'immagine copertina non è presente, verrà mostrata un'icona musicale.
- I percorsi sono **relativi** alla posizione di `index.html`.
- Evita spazi e caratteri speciali nei nomi dei file. Usa `-` o `_`.

---

*Buon lavoro! 🎶*
