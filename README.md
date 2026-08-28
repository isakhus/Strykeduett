# Duo Lekri — strykeduett.no

En minimalistisk bookingnettside for **Duo Lekri**, en Trondheim-basert strykeduett bestående av fiolin og cello. Duoen spiller i bryllup, dåp, begravelser og ved andre arrangementer. Nettsiden er laget med statisk HTML, CSS og JavaScript, uten noe byggesteg, og er publisert med Firebase Hosting.

**Nettside:** [strykeduett.no](https://strykeduett.no)

## Teknologier

* Vanlig HTML, CSS og ren JavaScript – uten rammeverk eller pakkebygger
* Skrifttyper: Cormorant Garamond og Jost fra Google Fonts
* Innsending av bookingskjema via [Formspree](https://formspree.io)
* Hosting: [Firebase Hosting](https://firebase.google.com/docs/hosting) (prosjektet `duolekri`)

## Struktur

| Fil                                                  | Formål                                                                                                                                                                                                           |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.html`                                         | Forside – toppseksjon, introduksjon og valg av anledning under «Book oss til»                                                                                                                                    |
| `book-oss.html`                                      | Bookingside – velg en anledning og få opp skjemaet som passer                                                                                                                                                    |
| `om-oss.html`                                        | Om oss-side – presentasjon av de to musikerne                                                                                                                                                                    |
| `skjema.js`                                          | Skjemainnstillinger for hver anledning: hvilke felt som skal vises, og sanglister som kan krysses av                                                                                                             |
| `felles.js`                                          | Bygger felles navigasjonsmeny, bunntekst og kontaktinformasjon på alle sidene                                                                                                                                    |
| `stil.css`                                           | Felles design for hele nettsiden – farger, typografi og oppsett                                                                                                                                                  |
| `404.html`                                           | Side som vises når en side ikke blir funnet                                                                                                                                                                      |
| `kontakt.html`, `anledninger.html`, `repertoar.html` | Eldre sider som videresendes til `book-oss.html` – se `firebase.json`                                                                                                                                            |
| `firebase.json`, `.firebaserc`                       | Oppsett for Firebase Hosting, inkludert videresendinger, hurtigbufferoverskrifter og publiseringsmål                                                                                                             |
| `LES-MEG.md`                                         | En norskspråklig veiledning for eieren av nettsiden. Den forklarer hvordan man redigerer tekst, bilder, farger og feltene i bookingskjemaet, samt hvordan nettsiden publiseres. Start her ved innholdsendringer. |

Alle sidene bruker design og funksjonalitet fra `stil.css` og `felles.js`. Filene må derfor ligge i samme mappe for at nettsiden skal fungere riktig, enten den åpnes lokalt eller er publisert.

## Lokal utvikling

Det kreves ikke noe byggesteg. Mappen kan kjøres som et statisk nettsted og åpnes i en nettleser, for eksempel:

```bash
npx serve .

# eller

python3 -m http.server 8000
```

## Publisering

Nettsiden publiseres ved hjelp av Firebase CLI:

```bash
firebase deploy
```

`firebase.json` sørger for at filer som kun brukes i kildekoden, som `LES-MEG.md` og bilder i full oppløsning, ikke tas med i den publiserte versjonen. Filen konfigurerer også hurtigbufferoverskrifter og videresendinger fra de eldre sidene.

## Redigering av innhold

For ikke-tekniske endringer – som å bytte bilder, redigere biografier, oppdatere sanglistene eller endre farger – se [`LES-MEG.md`](LES-MEG.md). Veiledningen er skrevet på norsk og tilpasset eieren av nettsiden.
