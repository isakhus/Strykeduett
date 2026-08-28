/* =====================================================================
   DUO LEKRI — SKJEMA PER ANLEDNING
   Denne filen styrer hva bookingskjemaet på «Book oss» viser for hver
   anledning (bryllup, dåp, event osv.), og hvilke låter man kan krysse av.

   ── SLIK REDIGERER DU ──────────────────────────────────────────────
   • Sanglister:  finn listen under SANGLISTER og legg til / fjern linjer.
                  Hver låt står i anførselstegn med komma etter.
   • Hvilke felt et skjema har: finn anledningen under SKJEMAER og endre
                  verdiene (true = vis, false = skjul).
   Du trenger ikke røre resten av filen.
   ===================================================================== */

/* ---------- 1) SANGLISTER (avkryssbare låter) ---------- */
var SANGLISTER = {

  bryllup: [
    'Canon in D',
    "Can't help falling in love",
    'Can you feel the love tonight',
    'Heartstrings av Rolf Løvland',
    'A thousand years',
    'Slipping through my fingers',
    "Married life (fra filmen 'Se opp')",
    'River flows in you',
    'Yellow av Coldplay',
    'A Whole new world',
    'Rewrite the stars fra The Greatest Showman',
    'So easy to fall in love',
    'Jesu joy of mans desiring',
    "Gabriel's oboe",
    'Just the way you are av Bruno Mars',
    "Hymne à l'amour",
    'Bruremarsj fra Lødingen',
    'Bryllupsmarsj (Øre)',
    'Stay with me / Wildest dreams'
  ],

  event: [
    'Mamma mia av ABBA',
    'Let it be av The Beatles',
    'Yesterday av The Beatles',
    'Sixty-Four av The Beatles',
    'Glière – 8 pieces',
    'Fly me to the moon',
    'Heartstrings av Rolf Løvland',
    'A thousand years',
    'Slipping through my fingers av ABBA',
    'River flows in you',
    'Yellow av Coldplay',
    'A Whole new world',
    'Carmen av Bizet',
    'Rewrite the stars fra The Greatest Showman',
    'So easy to fall in love',
    'Just the way you are av Bruno Mars',
    "Hymne à l'amour",
    'Stay with me / Wildest dreams'
  ],

  begravelse: [
    'Air av Bach',
    "Gabriel's oboe",
    'Gje meg handa di, ven',
    'Heartstrings av Rolf Løvland',
    'Song from a secret garden av Rolf Løvland',
    'I ensomme stunde',
    'Velsignelsesbønn / Velsemøys sang av Halvorsen',
    'Ave Verum Corpus',
    'God morgen, min kjære',
    'Himmelhøge sti',
    'Ut mot havet av Edvard Fliflet Bræin',
    'Har du fyr'
  ],

  julebord: [
    'Carol of the Bells',
    'O Holy Night',
    'Nordnorsk julesalme',
    'Mitt hjerte alltid vanker',
    'Silent Night',
    'White Christmas',
    'Let It Snow',
    'In the Bleak Midwinter'
  ],

  daap: [
    'River flows in you',
    'Heartstrings av Rolf Løvland',
    'Song for a New Beginning',
    'Slipping through my fingers',
    'Rewrite the stars fra The Greatest Showman',
    'A thousand years',
    'Air av Bach',
    "Gabriel's oboe"
  ]

};

/* ---------- 2) SKJEMAER (hva hver anledning viser) ----------
   omTittel        : overskrift for «Om …»-delen
   ute             : true = vis «ute eller inne?» med værnotis
   antall          : true = vis «forventet antall gjester»
   musikalskInnslag: false = vis Ja/Nei-spørsmål om musikalsk innslag
   sanger          : navnet på sanglisten over (eller null for ingen)
   andreOnsker     : etikett for tekstboksen med egne låtønsker (eller null)
   taffel          : spørsmål om bakgrunnsmusikk/taffel (eller null)
*/
var SKJEMAER = {

  'Bryllup': {
    omTittel: 'Om bryllupet',
    ute: true, antall: true, musikalskInnslag: false,
    sanger: 'bryllup',
    andreOnsker: 'Har dere noen spesifikke ønsker om andre låter?',
    taffel: 'Ønsker dere taffel (bakgrunnsmusikk) før/etter vielsen eller under middagen? Spesifiser gjerne når og omtrent hvor lenge.'
  },

  'Dåp': {
    omTittel: 'Om dåpen',
    ute: false, antall: true, musikalskInnslag: false,
    sanger: 'daap',
    andreOnsker: 'Har dere noen spesifikke ønsker om andre låter?',
    taffel: 'Ønsker dere taffel (bakgrunnsmusikk) før eller etter? Spesifiser gjerne når og omtrent hvor lenge.'
  },

  'Event': {
    omTittel: 'Om arrangementet',
    ute: true, antall: true, musikalskInnslag: false,
    sanger: 'event',
    andreOnsker: 'Har dere noen spesifikke ønsker om andre låter?',
    taffel: 'Ønsker dere taffel (bakgrunnsmusikk) før/etter eller under arrangementet? Spesifiser gjerne når og omtrent hvor lenge.'
  },

  'Konferanse': {
    omTittel: 'Om arrangementet',
    ute: true, antall: true, musikalskInnslag: false,
    sanger: 'event',
    andreOnsker: 'Har dere noen spesifikke ønsker om andre låter?',
    taffel: 'Ønsker dere taffel (bakgrunnsmusikk) før/etter eller under arrangementet? Spesifiser gjerne når og omtrent hvor lenge.'
  },

  'Arrangement': {
    omTittel: 'Om arrangementet',
    ute: true, antall: true, musikalskInnslag: false,
    sanger: 'event',
    andreOnsker: 'Har dere noen spesifikke ønsker om andre låter?',
    taffel: 'Ønsker dere taffel (bakgrunnsmusikk) før/etter eller under arrangementet? Spesifiser gjerne når og omtrent hvor lenge.'
  },

  'Konsert': {
    omTittel: 'Om arrangementet',
    ute: true, antall: true, musikalskInnslag: false,
    sanger: null,
    andreOnsker: 'Har dere noen spesifikke ønsker om låter?',
    taffel: null
  },

  'Begravelse / minnestund': {
    omTittel: 'Om begravelsen/minnestunden',
    ute: false, antall: false, musikalskInnslag: false,
    sanger: 'begravelse',
    andreOnsker: 'Har dere noen spesifikke ønsker om andre låter?',
    taffel: 'Ønsker dere taffel (bakgrunnsmusikk) før eller etter? Spesifiser gjerne når og omtrent hvor lenge.'
  },

  'Julebord': {
    omTittel: 'Om arrangementet',
    ute: false, antall: true, musikalskInnslag: false,
    sanger: 'julebord',
    andreOnsker: 'Har dere noen spesifikke ønsker om andre låter?',
    taffel: 'Ønsker dere taffel (bakgrunnsmusikk) før eller etter? Spesifiser gjerne når og omtrent hvor lenge.'
  },

  'Annet': {
    omTittel: 'Om anledningen',
    ute: false, antall: true, musikalskInnslag: false,
    sanger: null,
    andreOnsker: 'Fortell oss om anledningen og eventuelle musikkønsker.',
    taffel: null
  }

};

/* Værnotis ved utendørs spilling (vises når «Ute» er aktuelt) */
var VAERNOTIS = 'Ved utendørs spilling informerer vi om risikoen ved dårlig vær, siden strykeinstrumentene ikke tåler vann. Ved nedbør må vi stå under tak der regnet ikke når oss. Så lenge det er i orden, spiller vi gjerne utendørs.';


/* =====================================================================
   Under her ligger selve motoren som bygger skjemaet. Du trenger
   normalt ikke å endre noe herfra og ned.
   ===================================================================== */
(function(){

  // Trygg innsetting av tekst i HTML
  function esc(s){
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  function felt(label, inner){
    return '<div class="field"><label>' + esc(label) + '</label>' + inner + '</div>';
  }
  function tekstFelt(label, name, opts){
    opts = opts || {};
    var attr = 'name="' + esc(name) + '" type="' + (opts.type || 'text') + '"' +
               (opts.id ? ' id="' + esc(opts.id) + '"' : '') +
               (opts.placeholder ? ' placeholder="' + esc(opts.placeholder) + '"' : '') +
               (opts.required ? ' required' : '');
    var star = opts.required ? ' <span class="req" aria-hidden="true">*</span>' : '';
    var feil = opts.errorText ? '<p class="field-error" hidden>' + esc(opts.errorText) + '</p>' : '';
    return '<div class="field"><label>' + esc(label) + star + '</label>' +
           '<input ' + attr + ' />' + feil + '</div>';
  }
  function tekstOmrade(label, name){
    return felt(label, '<textarea name="' + esc(name) + '" placeholder="Skriv her …"></textarea>');
  }
  function jaNei(label, name){
    return '<div class="field"><label>' + esc(label) + '</label>' +
      '<div class="opt-row">' +
        '<label class="opt"><input type="radio" name="' + esc(name) + '" value="Ja"> Ja</label>' +
        '<label class="opt"><input type="radio" name="' + esc(name) + '" value="Nei"> Nei</label>' +
      '</div></div>';
  }
  function radioSett(label, name, valg){
    var opts = valg.map(function(v){
      return '<label class="opt"><input type="radio" name="' + esc(name) + '" value="' + esc(v) + '"> ' + esc(v) + '</label>';
    }).join('');
    return '<div class="field"><label>' + esc(label) + '</label><div class="opt-row">' + opts + '</div></div>';
  }
  function uteInne(){
    return '<div class="field"><label>Skal det være ute eller inne?</label>' +
      '<div class="opt-row">' +
        '<label class="opt"><input type="radio" name="Ute eller inne" value="Ute"> Ute</label>' +
        '<label class="opt"><input type="radio" name="Ute eller inne" value="Inne"> Inne</label>' +
      '</div>' +
      '<p class="form-note">' + esc(VAERNOTIS) + '</p></div>';
  }
  function sjekkbokser(label, sanger){
    var bokser = sanger.map(function(s){
      // «[]» på navnet gjør at Formspree samler alle avkryssede låter i én liste
      return '<label class="opt opt-check"><input type="checkbox" name="Ønskede låter[]" value="' +
             esc(s) + '"> ' + esc(s) + '</label>';
    }).join('');
    return '<div class="field"><label>' + esc(label) + '</label>' +
           '<div class="check-grid">' + bokser + '</div></div>';
  }
  function seksjon(tittel){
    return '<p class="form-eyebrow">' + esc(tittel) + '</p>';
  }
  // Flervalg (huk av så mange man vil) — brukes til bryllupsvielsen
  function flervalg(label, name, valg){
    var b = valg.map(function(v){
      return '<label class="opt opt-check"><input type="checkbox" name="' + esc(name) + '[]" value="' +
             esc(v) + '"> ' + esc(v) + '</label>';
    }).join('');
    return '<div class="field"><label>' + esc(label) + '</label>' +
           '<div class="check-grid">' + b + '</div></div>';
  }
  // Tallboks med opp/ned-piler (0–20) for antall musikkinnslag (alle unntatt bryllup)
  function antallInnslag(){
    return '<div class="field"><label>Hvor mange musikkinnslag ønsker dere?</label>' +
           '<input type="number" name="Antall musikkinnslag" min="0" max="100" step="1" ' +
           'inputmode="numeric" placeholder="0" class="antall-input" /></div>';
  }

  // Bygg hele skjemaet for en gitt anledning
  function byggSkjema(navn){
    var k = Object.prototype.hasOwnProperty.call(SKJEMAER, navn) ? SKJEMAER[navn] : SKJEMAER['Annet'];
    var h = '';

    // Kundeinformasjon
    h += seksjon('Kundeinformasjon');
    h += tekstFelt('Fullt navn', 'Fullt navn');
    h += '<div class="form-row">' +
           tekstFelt('Telefon', 'Telefon', { type: 'tel', placeholder: 'f.eks. 400 00 000' }) +
           tekstFelt('E-post', 'E-post', { type: 'email', required: true, id: 'epostFelt', errorText: 'E-post er obligatorisk skrivefelt' }) +
         '</div>';
    h += tekstFelt('Adresse', 'Adresse', { placeholder: 'Gate, postnummer og sted' });
    h += radioSett('Ønsker du bekreftelse på at forespørselen er mottatt?', 'Bekreftelse ønskes', ['På mail', 'På tlf', 'Trenger ikke']);

    // Om anledningen
    h += seksjon(k.omTittel);
    h += '<div class="form-row">' +
           tekstFelt('Dato', 'Dato', { placeholder: 'f.eks. 12. juni 2027' }) +
           tekstFelt('Sted', 'Sted', { placeholder: 'By eller lokale' }) +
         '</div>';
    if (k.ute)    h += uteInne();
    if (k.antall) h += tekstFelt('Forventet antall gjester', 'Antall gjester', { placeholder: 'f.eks. 80' });

    // Musikk
    h += seksjon('Musikk');
    if (navn === 'Bryllup') {
      h += flervalg('Hva ønsker dere under vielsen?', 'Under vielsen',
            ['Inngangsmusikk', '1–3 musikkinnslag', 'Utgangsmusikk']);
    } else {
      h += antallInnslag();
    }
    h += tekstOmrade('Ønsker dere bakgrunnsmusikk (taffel) før eller etter? Spesifiser gjerne når og omtrent hvor lenge.', 'Bakgrunnsmusikk (taffel)');
    h += tekstOmrade('Har du noen spørsmål? Skriv dem gjerne her', 'Spørsmål');

    return h;
  }

  // ---------- Koble til siden ----------
  document.addEventListener('DOMContentLoaded', function(){
    var picker   = document.getElementById('occasionPicker');
    var section  = document.getElementById('bookingSection');
    var heading  = document.getElementById('bookingHeading');
    var felter   = document.getElementById('formFields');
    var dropdown = document.getElementById('anledning');
    var openBtn  = document.getElementById('openFormBtn');
    if (!section || !felter) return;

    var knapper = picker ? picker.querySelectorAll('.occ-btn') : [];
    var openSection = openBtn ? openBtn.closest('section') : null;

    function skjulKnapp(){ if (openSection) openSection.style.display = 'none'; }

    function oppdaterTittel(occ){
      heading.textContent = (!occ || occ === 'Annet') ? 'Book oss' : 'Book oss til ' + occ.toLowerCase();
    }
    function velg(occ, scroll){
      if (dropdown) dropdown.value = occ;
      knapper.forEach(function(b){ b.classList.toggle('selected', b.getAttribute('data-occ') === occ); });
      felter.innerHTML = byggSkjema(occ);
      oppdaterTittel(occ);
      section.hidden = false;
      // Tvinger mobilnettlesere til å tegne opp det nye innholdet med én gang
      void section.offsetHeight;
      skjulKnapp();
      if (scroll) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    knapper.forEach(function(btn){
      btn.addEventListener('click', function(){ velg(btn.getAttribute('data-occ'), true); });
    });
    if (dropdown){
      dropdown.addEventListener('change', function(){ if (dropdown.value) velg(dropdown.value, false); });
    }
    if (openBtn){
      openBtn.addEventListener('click', function(){
        // Ingen anledning valgt ennå → send brukeren opp til valgene i stedet for
        // å åpne et tomt skjema (som ikke alltid tegnes opp riktig på mobil).
        if (!dropdown || !dropdown.value){
          if (picker){
            picker.scrollIntoView({ behavior: 'smooth', block: 'center' });
            picker.classList.add('blink');
            setTimeout(function(){ picker.classList.remove('blink'); }, 1600);
          }
          return;
        }
        section.hidden = false;
        skjulKnapp();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    // Kom man fra forsiden med ?anledning=... → åpne riktig skjema automatisk
    try {
      var forhaandsvalgt = new URLSearchParams(window.location.search).get('anledning');
      if (forhaandsvalgt && Object.prototype.hasOwnProperty.call(SKJEMAER, forhaandsvalgt)) {
        velg(forhaandsvalgt, true);
      }
    } catch (e) {}

    // Fjern rød feilmarkering på e-post så snart man begynner å skrive
    if (felter){
      felter.addEventListener('input', function(e){
        if (e.target && e.target.id === 'epostFelt'){
          e.target.classList.remove('invalid');
          var f = e.target.parentNode.querySelector('.field-error');
          if (f) f.hidden = true;
        }
      });
    }

    // ---------- Innsending med bekreftelse på skjermen ----------
    var form = document.getElementById('bookingForm');
    var note = document.getElementById('formNote');
    function visMelding(tekst, type){
      if (!note) return;
      note.style.display = 'block';
      note.textContent = tekst;
      note.style.color = (type === 'ok') ? '#2f7d4f'
                       : (type === 'error') ? '#b0413e'
                       : 'var(--blue-deep)';
    }
    if (form){
      form.addEventListener('submit', function(ev){
        ev.preventDefault();
        var action = form.getAttribute('action');

        // Obligatorisk e-post — rød ramme + melding hvis tom
        var epostInput = document.getElementById('epostFelt');
        var epostFeil = epostInput ? epostInput.parentNode.querySelector('.field-error') : null;
        if (epostInput && !epostInput.value.trim()){
          epostInput.classList.add('invalid');
          if (epostFeil) epostFeil.hidden = false;
          epostInput.focus();
          return;
        }
        if (epostInput){
          epostInput.classList.remove('invalid');
          if (epostFeil) epostFeil.hidden = true;
        }

        // Ikke koblet til e-post ennå
        if (action.indexOf('dinID') !== -1){
          visMelding('Takk! Skjemaet er ikke koblet til e-post ennå — se instruksjonen i koden for å aktivere sending.', 'info');
          return;
        }

        // Send til Formspree i bakgrunnen, vis bekreftelse uten å forlate siden
        var data = new FormData(form);
        var epost = data.get('E-post');
        if (epost) data.set('_replyto', epost);          // svar går rett til kunden
        var btn = form.querySelector('button[type="submit"]');
        if (btn) btn.disabled = true;
        visMelding('Sender forespørselen …', 'info');

        fetch(action, { method:'POST', body:data, headers:{ 'Accept':'application/json' } })
          .then(function(r){
            if (r.ok){
              form.reset();
              felter.innerHTML = '';
              visMelding('Takk! Forespørselen er sendt, og vi tar kontakt med deg så snart vi kan.', 'ok');
            } else {
              visMelding('Beklager, noe gikk galt under sendingen. Prøv igjen, eller send oss en e-post direkte.', 'error');
              if (btn) btn.disabled = false;
            }
          })
          .catch(function(){
            visMelding('Beklager, noe gikk galt under sendingen. Prøv igjen, eller send oss en e-post direkte.', 'error');
            if (btn) btn.disabled = false;
          });
      });
    }
  });

})();
