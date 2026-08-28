/* =====================================================================
   DUO LEKRI (Strykeduett.no) — FELLES MENY, FOOTER OG SKRIPT
   Denne filen bygger navigasjonsmenyen og footeren på ALLE sidene.
   - Menypunkter: rediger listen "sider".
   - Kontaktinfo i footeren: rediger "kontakt" nedenfor (mail, telefon, navn).
   Endringer her slår gjennom på hele nettstedet.
   ===================================================================== */
(function(){
  // Menypunkter i menyen: [tekst, filnavn, kode].
  var sider = [
    ['Om oss',   'om-oss.html',   'om'],
    ['Book oss', 'book-oss.html', 'book']
  ];
  // Ekstra lenker som bare vises i footeren (ikke i toppmenyen)
  var footerEkstra = [];

  // ---------- KONTAKTINFO (vises i footeren) — REDIGER HER ----------
  var kontakt = {
    epost: 'lekri@strykeduett.no',           // felles e-post
    musikere: [
      { rolle: 'Fiolin', navn: 'Kristin', tlf: '406 42 234', mail: 'kristinengaas@gmail.com' },
      { rolle: 'Cello',  navn: 'Lea',     tlf: '979 10 137', mail: 'lea.hustad@icloud.com' }
    ]
  };

  var aktiv = document.body.getAttribute('data-side') || '';

  // ---------- Bygg navigasjon ----------
  var lenker = sider.map(function(s){
    var klasser = [];
    if(s[2] === 'book') klasser.push('cta');       // Book oss fremhevet
    if(s[2] === aktiv) klasser.push('active');
    var cls = klasser.length ? ' class="' + klasser.join(' ') + '"' : '';
    return '<a href="' + s[1] + '"' + cls + '>' + s[0] + '</a>';
  }).join('');

  var navHtml =
    '<header class="nav" id="nav">' +
      '<div class="wrap nav-inner">' +
        '<a href="index.html" class="brand">Duo Lekri</a>' +
        '<a href="index.html" class="nav-logo" aria-label="Duo Lekri"><img src="monogram.png" alt="Duo Lekri" /></a>' +
        '<nav class="nav-links" id="menu">' +
          lenker +
        '</nav>' +
        '<button class="burger" id="burger" aria-label="Meny"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</header>';

  // ---------- Bygg footer ----------
  var footLenker = sider.concat(footerEkstra).map(function(s){
    return '<a href="' + s[1] + '">' + s[0] + '</a>';
  }).join('');

  var musikerHtml = kontakt.musikere.map(function(m){
    return '<div class="foot-person">' +
      '<p class="foot-name"><strong>' + m.navn + '</strong> · <span class="foot-role">' + m.rolle + '</span></p>' +
      (m.tlf ? '<a href="tel:' + m.tlf.replace(/\s/g,'') + '">Tlf: ' + m.tlf + '</a>' : '') +
      (m.mail ? '<a href="mailto:' + m.mail + '">' + m.mail + '</a>' : '') +
      '</div>';
  }).join('');

  var footHtml =
    '<footer id="kontakt">' +
      '<div class="wrap">' +
        '<div class="foot-top">' +
          '<div class="foot-brand-col">' +
            '<div class="foot-brand">Strykeduett.no</div>' +
            '<p class="foot-tag">Duo Lekri · fiolin &amp; cello</p>' +
            '<nav class="foot-links">' + footLenker + '</nav>' +
          '</div>' +
          '<div class="foot-contact">' +
            '<h4>Ta kontakt med oss</h4>' +
            '<p class="foot-mail"><a href="mailto:' + kontakt.epost + '">' + kontakt.epost + '</a></p>' +
            '<div class="foot-people">' + musikerHtml + '</div>' +
          '</div>' +
        '</div>' +
        '<p class="foot-copy">© <span id="year"></span> Strykeduett.no · Duo Lekri</p>' +
      '</div>' +
    '</footer>';

  // ---------- Sett inn i sidene ----------
  var navMount = document.getElementById('site-nav');
  var footMount = document.getElementById('site-footer');
  if(navMount) navMount.outerHTML = navHtml;
  if(footMount) footMount.outerHTML = footHtml;

  // ---------- Årstall ----------
  var yr = document.getElementById('year');
  if(yr) yr.textContent = new Date().getFullYear();

  // ---------- E-post ved siden av anledningsvalget (Book oss) ----------
  var epostLenker = document.querySelectorAll('.js-epost');
  epostLenker.forEach(function(a){
    a.href = 'mailto:' + kontakt.epost;
    a.textContent = kontakt.epost;
  });

  // ---------- Navbar-skygge ved scroll ----------
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function(){
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ---------- Mobilmeny ----------
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if(burger && menu){
    burger.addEventListener('click', function(){ menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ menu.classList.remove('open'); });
    });
  }

  // ---------- Reveal-animasjon ved scroll ----------
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
