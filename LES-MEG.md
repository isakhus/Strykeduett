# Strykeduett — nettside

En ferdig, moderne nettside for duoen som du eier selv. Nettsiden består nå av **flere sider**: en forside med et lite glimt av alt, og en egen detaljert side for hver kategori.

## Slik henger filene sammen

| Fil | Hva den er |
| --- | --- |
| `index.html` | Forsiden — hero, «Book oss til» |
| `book-oss.html` | Book oss — velg anledning, få opp riktig skjema |
| `skjema.js` | Innholdet i skjemaene: hvilke felt hver anledning har, og sanglistene man krysser av |
| `om-oss.html` | «Om oss» med Kristin (fiolin) og Lea (cello) |
| `stil.css` | Utseendet på **alle** sidene (farger, skrift, layout) |
| `felles.js` | Bygger meny, footer OG kontaktinfo på alle sidene |
| `Strykeduett.JPG` | Bildet på forsiden |
| `kontakt.html`, `anledninger.html`, `repertoar.html` | Gamle sider — sender nå automatisk videre til Book oss |

Duoen heter **Duo Lekri**; «Strykeduett.no» brukes som logo/wordmark øverst og domene. Menyen er **Om oss · Book oss**. Kontaktinfoen ligger i footeren (nederst på hver side). Booking skjer på Book oss-siden — det finnes bare **ett** skjema.

Alle filene må ligge i **samme mappe**. For å publisere drar du hele mappen (ikke bare én fil) til nettet — se punkt 6.

## 1. Bildene

- **Forsiden** bruker filen **`Strykeduett.JPG`**.
- **«Om oss»-siden** bruker to portretter: **`lea.jpg`** (Lea) og **`fiolinist.jpg`** (fiolinisten) — legg filene i samme mappe, så dukker portrettene opp i profilseksjonene. (Ikke lagt inn ennå viser en pen plassholder.)

Vil du bytte et bilde, lagre det nye med akkurat samme navn, eller endre `src="..."` i den aktuelle filen til det nye filnavnet. Pass på at store/små bokstaver stemmer nøyaktig — nettservere skiller på det.

## 2. Endre tekst

Åpne den aktuelle siden i en teksteditor (TextEdit, VS Code e.l.) og skriv over teksten. Nyttige steder:

- **Musikernes bio:** avsnittene i `om-oss.html` (Kristin på fiolin, Lea på cello).
- **Repertoar / anledninger:** rediger sanglistene og skjemaene i `skjema.js` (se punkt 4).
- **Introtekst:** hero-avsnittet i `index.html` og toppen av `om-oss.html`.

**Farger:** paletten (dus lyseblå) ligger øverst i `stil.css` under `:root`. Endrer du fargekodene der, endres hele nettstedet. Booking-skjemaet aktiveres — søk etter `formspree.io/f/dinID` i `book-oss.html` (se punkt 5).

## 3. Endre meny og kontaktinfo

Meny, footer og kontaktinfo bygges ett sted for hele nettstedet, i **`felles.js`** (øverst i filen):

- **Menypunkter:** rediger listen `sider`.
- **Kontaktinfo i footeren:** rediger `kontakt` — felles e-post (`epost`), og for hver musiker `navn`, `tlf` og `mail`. Endre gjerne `'000 00 000'` og `@strykeduett.no`-adressene til de ekte.

Endringer her slår automatisk gjennom på alle sidene.

## 4. Skjemaene per anledning (Book oss)

På Book oss-siden endrer skjemaet seg etter hvilken anledning man velger (bryllup, dåp, event osv.), og hver anledning har sine egne avkryssbare låter. Alt dette styres fra filen **`skjema.js`** — du redigerer bare de to øverste listene:

- **Bytte/legge til låter:** finn `SANGLISTER` øverst. Der ligger tre lister (`bryllup`, `event`, `begravelse`). Hver låt står i anførselstegn med komma etter. Legg til en linje, eller slett en du ikke vil ha.
- **Hva et skjema spør om:** finn `SKJEMAER`. For hver anledning kan du skru felt av/på ved å sette `true` eller `false` (f.eks. `antall: true` for «forventet antall gjester», `ute: true` for «ute eller inne?»).

Konferanse og Arrangement bruker samme skjema som Event. «Annet» gir et enkelt skjema uten avkrysning. Resten av filen (under «motoren») trenger du ikke å røre.

## 5. Aktiver bookingskjemaet (valgfritt, gratis)

Skjemaet på `book-oss.html` er klart, men trenger en gratis tjeneste for å sende e-post:

1. Gå til <https://formspree.io> og lag en gratis konto.
2. Opprett et skjema — du får en adresse som `https://formspree.io/f/abcmyz`.
3. I `book-oss.html`, søk etter `formspree.io/f/dinID` og bytt ut med din egen adresse.

Før dette er gjort viser skjemaet bare en vennlig «takk»-melding uten å sende noe.

## 6. Publiser gratis

- **Netlify Drop:** gå til <https://app.netlify.com/drop> og dra **hele mappen** inn i vinduet. Siden er live på sekunder, med en gratis nettadresse du kan dele.
- **Alternativt:** GitHub Pages, Cloudflare Pages eller Vercel — alle gratis for en statisk side som denne.

Vil du ha eget domene (f.eks. `strykeduett.no`), kan du koble det til i Netlify sine innstillinger.

## Farger og stil

Paletten (dus lyseblå) og skrifttypene ligger øverst i **`stil.css`** under `:root { ... }`. Endrer du fargekodene der, endres uttrykket på hele nettstedet.

> **Tips:** Fordi sidene henter meny, stil og bilde fra hverandre, bør du åpne dem via en nettleser mens alle filene ligger i samme mappe. Når du publiserer (punkt 6), tar du med hele mappen.
