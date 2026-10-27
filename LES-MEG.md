# Slik driver du strykeduett.no

En steg-for-steg-guide til deg som skal ta over nettsiden til Duo Lekri. Du trenger ingen erfaring med koding. Det meste av selve endringene kan du be Claude om å gjøre. Denne guiden lærer deg verktøyene rundt: hvor filene ligger, hvordan du ser endringene, hvordan du publiserer dem og hvordan du tar sikkerhetskopi.

---

## Innhold

1. [Slik henger det sammen](#1-slik-henger-det-sammen)
2. [Engangsoppsett: last ned og logg inn](#2-engangsoppsett-last-ned-og-logg-inn)
3. [Hent nettsiden til din Mac](#3-hent-nettsiden-til-din-mac)
4. [VS Code: der du ser og endrer filene](#4-vs-code-der-du-ser-og-endrer-filene)
5. [Gjøre endringer med Claude](#5-gjøre-endringer-med-claude)
6. [Se endringene før de går live](#6-se-endringene-før-de-går-live)
7. [Publisere til strykeduett.no](#7-publisere-til-strykeduettno)
8. [Ta sikkerhetskopi i GitHub](#8-ta-sikkerhetskopi-i-github)
9. [Hvor ligger hva?](#9-hvor-ligger-hva)
10. [Skjemaet, e-post og domenet](#10-skjemaet-e-post-og-domenet)
11. [Regler som sparer deg for trøbbel](#11-regler-som-sparer-deg-for-trøbbel)
12. [Når noe går galt](#12-når-noe-går-galt)
13. [Huskeliste for selve overtakelsen](#13-huskeliste-for-selve-overtakelsen)

---

## 1. Slik henger det sammen

Nettsiden er en mappe med vanlige filer på Mac-en din. Rundt den finnes fem tjenester, og hver av dem har én jobb:

| Tjeneste | Hva den gjør | Hvor ofte du bruker den |
| --- | --- | --- |
| **VS Code** | Programmet der du åpner mappen, ser filene og gjør endringer | Hver gang du endrer noe |
| **Firebase** | Google-tjenesten som viser nettsiden på internett | Når du publiserer |
| **GitHub** | Sikkerhetskopi av alle filene og alle tidligere versjoner | Etter hver publisering |
| **Domene.no** | Der adressen strykeduett.no og e-posten lekri@strykeduett.no er registrert. Du eier domenet selv. | Sjelden (fornyelse én gang i året) |
| **Formspree** | Sender bookingskjemaene til e-posten deres. Skjemaet ligger på din egen Formspree-konto. | Når du vil se eller finne igjen en forespørsel |

Arbeidsflyten er alltid den samme:

```
Endre filene  →  Se resultatet lokalt  →  Publiser med Firebase  →  Sikkerhetskopier i GitHub
```

Det viktigste å forstå: **endringer du gjør i filene vises ikke på strykeduett.no før du publiserer.** Du kan altså prøve deg fram så mye du vil uten at noen ser det.

---

## 2. Engangsoppsett: last ned og logg inn

Dette gjør du bare én gang. Sett av omtrent en halvtime.

### 2.1 Kontoer du trenger

- **En Google-konto.** Den brukes til Firebase og Google Search Console. En vanlig Gmail-konto holder.
- **En GitHub-konto.** Lag den gratis på [github.com](https://github.com). Gi brukernavnet ditt til Isak, så får du tilgang til nettsidefilene.

### 2.2 Programmer du skal laste ned

**VS Code** (gratis)
1. Gå til [code.visualstudio.com](https://code.visualstudio.com) og trykk på den store nedlastingsknappen.
2. Åpne den nedlastede filen og dra **Visual Studio Code** inn i **Programmer**.
3. Åpne programmet én gang. Sier Mac-en at det er lastet ned fra internett, trykker du **Åpne**.

**GitHub Desktop** (gratis)
1. Gå til [desktop.github.com](https://desktop.github.com) og last ned.
2. Flytt programmet til **Programmer** og åpne det.
3. Logg inn med GitHub-kontoen din når du blir spurt.

**Firebase-verktøyet** (gratis)

Dette er et lite program uten vinduer, som du bruker fra Terminal for å publisere.

1. Åpne **Terminal**. Trykk Cmd + mellomrom, skriv `Terminal` og trykk Enter.
2. Lim inn denne linjen og trykk Enter:
   ```
   curl -sL https://firebase.tools | bash
   ```
   Den kan be om Mac-passordet ditt. Når du skriver passordet, vises ingenting på skjermen. Det er normalt. Skriv det og trykk Enter.
3. Når den er ferdig, logger du inn:
   ```
   firebase login
   ```
   Nettleseren åpnes. Logg inn med Google-kontoen din og godta. Terminalen skriver da `Success! Logged in as …`.

> **Merk:** Isak må først ha lagt deg til i Firebase-prosjektet (se [punkt 13](#13-huskeliste-for-selve-overtakelsen)). Ellers får du ikke publisert, selv om innloggingen går gjennom.

### 2.3 Claude

Du bruker Claude-appen på Mac-en, slik Isak har gjort. Du kan be Claude om hjelp med absolutt alt i denne guiden, også om noe av dette blir vanskelig underveis.

---

## 3. Hent nettsiden til din Mac

Når Isak har gitt deg tilgang på GitHub:

1. Åpne **GitHub Desktop**.
2. Velg **File → Clone Repository…**.
3. Finn **Strykeduett** i listen og velg det.
4. Under **Local Path** trykker du **Choose…** og velger **hjemmemappen din**. Det er mappen med hus-ikonet og navnet ditt. Trykk **Cmd + Shift + H** i Finder for å komme dit.
5. Trykk **Clone**.

Nå har du mappen **Strykeduett** i hjemmemappen din, med alle filene og hele historikken.

> **Viktig:** Ikke legg mappen i iCloud Drive, Dokumenter, Skrivebord, Dropbox eller OneDrive. Disse synkroniserer filene i bakgrunnen, og det kan ødelegge koblingen til GitHub. Hjemmemappen synkroniseres ikke, og er derfor det tryggeste stedet.

---

## 4. VS Code: der du ser og endrer filene

### 4.1 Åpne mappen

1. Åpne VS Code.
2. Velg **File → Open Folder…**.
3. Velg mappen **Strykeduett** i hjemmemappen din og trykk **Open**.
4. Spør VS Code om du stoler på forfatteren av filene, trykker du **Yes, I trust the authors**.

Neste gang husker VS Code mappen. Den ligger under **File → Open Recent**.

### 4.2 Slik ser VS Code ut

- **Venstre side, Explorer** (det øverste ikonet, som ser ut som to ark): lista over alle filene. Klikk på en fil for å åpne den.
- **Midten:** filen du har åpnet. Her kan du skrive og endre tekst, akkurat som i et vanlig tekstprogram.
- **Nederst, Terminal:** her skriver du kommandoene for å publisere. Åpne den med **Terminal → New Terminal** i menyen øverst. Den åpner seg automatisk i riktig mappe, så du slipper å navigere.

### 4.3 Det du trenger å kunne

| Gjøre | Snarvei |
| --- | --- |
| Lagre filen | **Cmd + S** |
| Angre | **Cmd + Z** |
| Søke etter tekst i filen du har åpen | **Cmd + F** |
| Søke etter tekst i alle filene | **Cmd + Shift + F** |
| Åpne en fil etter navn | **Cmd + P**, og skriv filnavnet |

Et hvitt prikk-symbol på fanen øverst betyr at filen har endringer som ikke er lagret. Trykk Cmd + S.

### 4.4 Ting du ikke skal trykke på

VS Code har et ikon for **Source Control** (et ikon som ligner en gaffel med tre prikker). Hvis den foreslår **Initialize Repository** eller **Publish to GitHub**, skal du **ikke** trykke på noen av dem. Det betyr bare at VS Code har åpnet feil mappe. Lukk vinduet og åpne Strykeduett-mappen på nytt som beskrevet i 4.1. Sikkerhetskopien tar du i GitHub Desktop (se punkt 8).

---

## 5. Gjøre endringer med Claude

Det enkleste er å la Claude gjøre selve endringene.

1. Åpne Claude-appen og start en ny samtale.
2. Gi Claude tilgang til mappen: velg **Strykeduett** i hjemmemappen din når appen spør, eller legg til mappen i samtalen.
3. Forklar hva du vil endre, gjerne med et skjermbilde. For eksempel:
   - «Bytt ut den andre tilbakemeldingen med denne: …»
   - «Legg til en ny video på Om oss: https://youtu.be/…»
   - «Teksten om Kristin skal byttes til dette: …»
   - «Dette ser rart ut på mobil, kan du fikse det?» (med skjermbilde)
4. Si gjerne **«bare lagre lokalt, ikke noe mer»**. Da vet Claude at du vil se på endringen før noe publiseres.

Claude endrer filene direkte i mappen. Du ser endringene i VS Code og i nettleseren (se punkt 6).

**Tips:** Er du ikke fornøyd, si det rett ut, for eksempel «nei, ta det tilbake». Du kan også be om flere forslag å velge mellom.

---

## 6. Se endringene før de går live

### 6.1 På Mac-en

1. Åpne Strykeduett-mappen i **Finder**.
2. Dobbeltklikk på **index.html**. Nettsiden åpnes i nettleseren.
3. Etter at du eller Claude har endret noe, trykker du **Cmd + Shift + R** i nettleseren for å laste inn siden på nytt.

Dette fungerer for alt, **bortsett fra videoene**. De viser «Feil 153» når siden er åpnet fra Mac-en. Det er normalt, og de virker når siden er på nett.

### 6.2 Se mobilvisningen på Mac-en

1. Åpne siden i **Chrome**.
2. Trykk **Cmd + Option + I** for å åpne utviklerverktøyene.
3. Trykk **Cmd + Shift + M**. Siden vises nå som på en mobil.
4. Velg en telefon, for eksempel iPhone, i menyen øverst.

### 6.3 Se det på din egen telefon, før noen andre gjør det

Dette lager en hemmelig testlenke som varer i 7 dager. Den ekte siden blir ikke rørt.

1. Åpne terminalen i VS Code (**Terminal → New Terminal**).
2. Skriv:
   ```
   firebase hosting:channel:deploy test
   ```
3. Etter litt skriver den en lenke som ser omtrent slik ut: `https://duolekri--test-xxxxxx.web.app`. Åpne den på telefonen.

Her virker også videoene. Ser du ikke den siste endringen, kan du åpne lenken i en **privat fane** i Safari.

---

## 7. Publisere til strykeduett.no

Når du er fornøyd:

1. Lagre alle filene (Cmd + S).
2. Åpne terminalen i VS Code (**Terminal → New Terminal**).
3. Skriv:
   ```
   firebase deploy --only hosting
   ```
4. Vent til det står **Deploy complete!**. Det tar sjelden mer enn et halvt minutt.
5. Åpne [strykeduett.no](https://strykeduett.no) og trykk **Cmd + Shift + R** for å se den nye versjonen.

Bruker du vanlig Terminal i stedet for den i VS Code, må du først gå inn i mappen:
```
cd ~/Strykeduett
firebase deploy --only hosting
```

**Angre en publisering:** I [Firebase-konsollen](https://console.firebase.google.com) går du til prosjektet **duolekri → Hosting**. Under «Release history» finner du alle tidligere publiseringer. Ved hver av dem kan du trykke på de tre prikkene og velge **Rollback** for å gå tilbake til den versjonen.

---

## 8. Ta sikkerhetskopi i GitHub

Gjør dette hver gang du har publisert.

1. Åpne **GitHub Desktop**. Sjekk at det står **Strykeduett** øverst til venstre.
2. Til venstre ser du lista over filer som er endret. Klikk på en fil for å se hva som er endret: rødt er fjernet, grønt er lagt til.
3. Nederst til venstre skriver du en kort beskrivelse i **Summary**-feltet, for eksempel `Ny tilbakemelding fra bryllup`.
4. Trykk **Commit to main**.
5. Trykk **Push origin** øverst.

Nå er alt lagret på GitHub. Går Mac-en i stykker, kan du hente alt tilbake (se punkt 3).

**Finne en gammel versjon:** Fanen **History** i GitHub Desktop viser alle tidligere endringer med dato og beskrivelse.

---

## 9. Hvor ligger hva?

Nyttig når du vil vite hvor noe står, eller vil fortelle Claude nøyaktig hva du mener.

### Sidene

| Fil | Hva den inneholder |
| --- | --- |
| `index.html` | **Forsiden**: bildet av dere, introteksten, tilbakemeldingene og knappene under «Book oss til» |
| `om-oss.html` | **Om oss**: teksten øverst, de to videoene, NTNU Kammerprisen med juryens begrunnelse, og profilene til Lea og Kristin |
| `book-oss.html` | **Book oss**: valg av anledning, skjemaet og tilbakemeldingene |
| `404.html` | Siden som vises hvis noen skriver feil adresse |

### Felles for alle sidene

| Fil | Hva den inneholder |
| --- | --- |
| `felles.js` | **Menyen og bunnteksten.** Helt øverst, under `KONTAKTINFO`, står e-posten, Instagram og telefonnumrene og e-postene deres. Endrer du dem her, endres de på alle sidene. |
| `stil.css` | **Utseendet**: farger, skrift, avstander og mobilvisning. Fargene står helt øverst under `:root`. |
| `skjema.js` | **Bookingskjemaene**: hvilke spørsmål som stilles for hver anledning (bryllup, dåp, begravelse osv.) |

### Bilder

| Fil | Hvor den brukes |
| --- | --- |
| `hero-duo.jpg` | Det store bildet på forsiden |
| `lea.jpg`, `kristin.jpg` | Profilbildene på Om oss |
| `pris-2.jpg` | Bildet fra Frimurerlogen i prisseksjonen |
| `delingsbilde.jpg` | Bildet som vises når noen deler lenken på Facebook, Messenger og lignende |
| `Logo/monogram.png` | Monogrammet øverst i menyen og i videoboksene |
| `Logo/skrift.png` | «DUO LEKRI»-logoen på forsiden |
| `favicon…` | Det lille ikonet i nettleserfanen |

Fotokredittene står i teksten rett under bildene (søk etter `Foto:`).

### Ting som står to steder

- **Tilbakemeldingene** står både i `index.html` og i `book-oss.html`. Endrer du dem, må begge filene endres.

### Filer du normalt ikke rører

| Fil | Hva den er |
| --- | --- |
| `firebase.json`, `.firebaserc` | Oppsettet for publisering |
| `robots.txt`, `sitemap.xml` | Informasjon til Google |
| `kontakt.html`, `anledninger.html`, `repertoar.html` | Gamle adresser som sender folk videre til Book oss |
| `README.md`, `LES-MEG.md` | Beskrivelser og denne guiden. De publiseres ikke. |

---

## 10. Skjemaet, e-post og domenet

### Bookingskjemaet (Formspree)

Når noen sender en forespørsel på Book oss, går den gjennom [Formspree](https://formspree.io) og videre til e-posten deres. Skjemaet ligger på **din egen Formspree-konto**, så du styrer det selv.

- Logg inn på [formspree.io](https://formspree.io) for å se alle forespørslene under **Submissions**. Kommer en e-post ikke fram, kan du finne forespørselen der.
- Vil du endre hvilken e-post forespørslene sendes til, gjør du det i innstillingene for skjemaet i Formspree. Nettsiden trenger ikke endres.
- Gratisversjonen tar imot **50 forespørsler i måneden**. Det holder godt for de fleste. Blir det for lite, kan du oppgradere i Formspree.
- Adressen til skjemaet står i `book-oss.html`. Søk etter `formspree.io/f/`. Den trenger du bare hvis du en gang lager et nytt skjema. Da gir du Claude den nye adressen og ber den bytte.

### Domenet strykeduett.no

**Du eier domenet selv**, og det er registrert hos **Domene.no**. Det må fornyes hvert år, og påminnelsen og fakturaen kommer til deg. Pass på at kontaktinformasjonen i kundeområdet hos Domene.no er oppdatert, så du ikke går glipp av fornyelsen. Utløper domenet, slutter både nettsiden og e-posten å virke.

### E-posten lekri@strykeduett.no

E-postkontoen hører til domenet hos **Domene.no**. Du logger inn på webmailen og administrerer kontoen via kundeområdet ditt der.

> **Ikke rør DNS-innstillingene** hos Domene.no (det som heter Zone Editor, eller A, MX og TXT). De kobler domenet til Firebase og sørger for at e-posten virker. En feil der kan gjøre at siden eller e-posten slutter å fungere.

### Instagram og YouTube

- Instagram-adressen står i `felles.js`, under `KONTAKTINFO`.
- Videoene på Om oss er YouTube-videoer. Vil du bytte en video, sender du Claude den nye YouTube-lenken og sier hvilken video den skal erstatte.

### Google Search Console

[Google Search Console](https://search.google.com/search-console) viser hvordan nettsiden gjør det i Google-søk: hvor mange som finner den, og hva de søker etter. Du trenger ikke gjøre noe der, men det er gøy å følge med.

---

## 11. Regler som sparer deg for trøbbel

1. **Hold mappen i hjemmemappen.** Ikke i iCloud, Dokumenter, Skrivebord, Dropbox eller OneDrive.
2. **Store og små bokstaver i filnavn betyr noe.** `Lea.jpg` og `lea.jpg` er to forskjellige filer på nettet, selv om Mac-en behandler dem likt.
3. **Ikke gi filer nye navn eller flytt dem** uten at du ber Claude om det. Sidene leter etter filene på et bestemt sted, og da forsvinner bildet eller logoen.
4. **Se på endringen før du publiserer.** Bruk testlenken (6.3) hvis det gjelder mobil.
5. **Publiser alltid med `firebase deploy --only hosting`** fra Strykeduett-mappen. Da publiseres hele siden riktig.
6. **Ta sikkerhetskopi i GitHub Desktop** etter hver publisering.
7. **Ikke trykk «Initialize Repository» eller «Publish to GitHub» i VS Code.**

---

## 12. Når noe går galt

| Problem | Løsning |
| --- | --- |
| Jeg ser ikke endringen min | Lagret du filen (Cmd + S)? Trykk **Cmd + Shift + R** i nettleseren. På telefon kan du bruke en privat fane. |
| Endringen synes på Mac-en, men ikke på strykeduett.no | Du har ikke publisert ennå. Se punkt 7. |
| Videoene viser «Feil 153» | Normalt når siden er åpnet fra Mac-en. Virker på nett. |
| `firebase: command not found` | Firebase-verktøyet er ikke installert. Se 2.2. |
| `Failed to authenticate` eller lignende ved publisering | Kjør `firebase login` på nytt. Virker det fortsatt ikke, mangler du tilgang til prosjektet. Spør Isak. |
| `Not in a Firebase app directory` | Terminalen er i feil mappe. Bruk terminalen i VS Code, eller skriv `cd ~/Strykeduett` først. |
| Et bilde eller en logo er borte | Sjekk at filnavnet stemmer nøyaktig, med store og små bokstaver. Spør Claude om å sjekke. |
| Noe ble helt feil etter publisering | Gå tilbake til forrige versjon med **Rollback** i Firebase (se slutten av punkt 7). Fiks det i ro og mak etterpå. |
| GitHub Desktop finner ikke mappen | Velg **Locate…** og pek på Strykeduett i hjemmemappen. |
| Ingenting av dette hjelper | Ta skjermbilde av feilmeldingen og vis den til Claude. |

---

## 13. Huskeliste for selve overtakelsen

Dette gjør dere sammen, én gang.

**Isak gjør:**

- [ ] **GitHub:** Gå til repoet `isakhus/Strykeduett` → **Settings → Collaborators → Add people**, og legg henne til. Skal hun eie repoet helt: **Settings → General → Danger Zone → Transfer ownership**.
- [ ] **Firebase:** I [Firebase-konsollen](https://console.firebase.google.com), velg prosjektet **duolekri** → tannhjulet → **Project settings → Users and permissions → Add member**. Skriv inn Google-kontoen hennes og velg rollen **Owner**.
- [ ] **Google Search Console:** **Innstillinger → Brukere og tillatelser → Legg til bruker**, med tillatelsen **Full**.
**Allerede i orden:**

- [x] **Domene.no:** Hun eier domenet strykeduett.no og e-posten selv.
- [x] **Formspree:** Skjemaet ligger på hennes egen Formspree-konto.

**Hun gjør:**

- [ ] Lag Google-konto og GitHub-konto (hvis hun ikke har).
- [ ] Logg inn hos Domene.no og Formspree, og sjekk at kontaktinformasjonen er riktig.
- [ ] Last ned VS Code, GitHub Desktop og Firebase-verktøyet (punkt 2).
- [ ] Kjør `firebase login`.
- [ ] Hent mappen med GitHub Desktop (punkt 3).
- [ ] Åpne mappen i VS Code (punkt 4).
- [ ] Gjør en liten testendring, for eksempel ett ord i en tekst, og prøv hele runden: se lokalt → testlenke → publiser → sikkerhetskopier. Da har hun gjort alt én gang med noen ved siden av seg.

Når dette er gjort, kan hun drive siden helt på egen hånd.
