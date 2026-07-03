import { useEffect, useMemo, useState } from 'react'

const contact = {
  phone: '',
  email: '',
  instagram: 'https://www.instagram.com/simonastrungariu',
  introReel: 'https://www.instagram.com/reel/DZXW9QAgVWb/',
}

const content = {
  it: {
    language: 'Lingua', theme: 'Tema', italian: 'Italiano', romanian: 'Rumeno', light: 'Light', night: 'Night',
    nav: { home: 'Home', about: 'Chi sono', path: 'Percorso', reflections: 'Riflessioni', meditation: 'Meditazione', contact: 'Contatti' },
    title: 'Counseling Olistico', hero: 'Uno spazio per ascoltarti e ritrovare chiarezza',
    intro: 'Ci sono momenti in cui tutto sembra confuso. Pensieri, emozioni e reazioni si intrecciano, e diventa difficile orientarsi. Qui puoi fermarti, respirare e iniziare a fare chiarezza.',
    name: 'Simona Strungariu', role: 'Counselor Olistico e Facilitatrice Mindfulness',
    ctaPrimary: 'Inizia il percorso', ctaSecondary: 'Ascolta la meditazione',
    stats: ['Incontri online individuali', 'Spazio riservato e sicuro', 'Ascolto senza giudizio'],
    aboutTitle: 'Non hai bisogno di essere aggiustata, ma di essere ascoltata.',
    about: 'Per anni ho cercato risposte in percorsi diversi, esplorando il legame tra corpo, emozioni e mente. Ho scelto di diventare Counselor Olistico per offrire non una tecnica rigida, ma uno spazio in cui poterti sentire accolta nella tua interezza.',
    approachTitle: 'Il mio approccio',
    approach: 'Lavoro con ascolto, presenza, mindfulness, scrittura riflessiva, visualizzazioni guidate e domande evolutive. Ogni passo si adatta ai tuoi tempi.',
    pathTitle: 'Qui trovi uno spazio in cui:',
    points: ['essere ascoltata davvero, senza giudizio', 'dare voce a cio che senti dentro', 'ritrovare calma quando la mente e piena', 'osservare i tuoi schemi con piu consapevolezza', 'fare chiarezza passo dopo passo'],
    servicesTitle: 'Strumenti che possono accompagnarti',
    services: [
      ['Mindfulness', 'Per tornare al corpo, al respiro e al momento presente.'],
      ['Scrittura riflessiva', 'Per dare forma ai pensieri e osservare cio che emerge.'],
      ['Visualizzazioni guidate', 'Per creare immagini interiori di sicurezza, calma e direzione.'],
      ['Internal Family Systems', 'Per ascoltare le parti interne con curiosita e rispetto.'],
    ],
    workTitle: 'Come lavoro',
    work: 'Il percorso si svolge attraverso incontri individuali online, in uno spazio dedicato e riservato. Ogni incontro dura un ora e trenta minuti. L approccio si fonda su ascolto, presenza e rispetto dei tuoi tempi.',
    meditationTitle: 'Meditazione guidata - Ritorna al centro',
    meditationText: 'Apri uno spazio di ascolto con un paesaggio naturale e la meditazione guidata.',
    audioHint: 'Aggiungi il file audio in public/audio/meditation.mp3.',
    noteTitle: 'Nota importante',
    note: 'Il counseling olistico e un percorso di ascolto, crescita personale e sostegno al benessere emotivo. Non sostituisce psicoterapia, supporto medico o trattamento sanitario.',
    reflectionsTitle: 'Riflessioni e ispirazione',
    reflectionsText: 'Spunti brevi per tornare al corpo, ascoltare le emozioni e creare piu presenza nella quotidianita.',
    reflections: [['Ascolto', 'Quando smetti di giudicarti, puoi iniziare davvero ad ascoltarti.'], ['Presenza', 'Un respiro consapevole puo diventare un piccolo ritorno a casa.'], ['Chiarezza', 'Non serve capire tutto subito: a volte basta il prossimo passo.']],
    instagramCta: 'Vedi altri contenuti su Instagram',
    videoTitle: 'Conosci Simona',
    videoText: 'Un breve video di presentazione per ascoltare direttamente la sua voce e il suo modo di accompagnare.',
    watchVideo: 'Guarda il reel su Instagram',
    contactTitle: 'Inizia da qui',
    contactText: 'Ogni cambiamento inizia da un primo passo. Se senti il bisogno di chiarezza e supporto, prenota un primo incontro conoscitivo gratuito.',
    whatsapp: 'Scrivimi su WhatsApp', email: 'Contattami via mail', instagram: 'Seguimi su Instagram',
  },
  ro: {
    language: 'Limba', theme: 'Tema', italian: 'Italiana', romanian: 'Romana', light: 'Light', night: 'Night',
    nav: { home: 'Acasa', about: 'Despre', path: 'Parcurs', reflections: 'Reflectii', meditation: 'Meditatie', contact: 'Contact' },
    title: 'Consiliere Holistica', hero: 'Un spatiu in care sa te asculti si sa gasesti claritate',
    intro: 'Exista momente in care totul pare confuz. Gandurile, emotiile si reactiile se amesteca, iar orientarea devine dificila. Aici poti sa te opresti, sa respiri si sa incepi sa faci claritate.',
    name: 'Simona Strungariu', role: 'Counselor Holistic si Facilitator Mindfulness',
    ctaPrimary: 'Incepe parcursul', ctaSecondary: 'Asculta meditatia',
    stats: ['Intalniri online individuale', 'Spatiu sigur si confidential', 'Ascultare fara judecata'],
    aboutTitle: 'Nu ai nevoie sa fii reparata, ci sa fii ascultata.',
    about: 'De-a lungul anilor am cautat raspunsuri in parcursuri diferite, explorand legatura dintre corp, emotii si minte. Am ales sa devin counselor holistic pentru a oferi nu o tehnica rigida, ci un spatiu in care sa te simti primita in intregime.',
    approachTitle: 'Abordarea mea',
    approach: 'Lucrez cu ascultare, prezenta, mindfulness, scriere reflexiva, vizualizari ghidate si intrebari evolutive. Fiecare pas se adapteaza ritmului tau.',
    pathTitle: 'Aici gasesti un spatiu in care:',
    points: ['sa fii ascultata cu adevarat, fara judecata', 'sa dai voce lucrurilor pe care le simti in interior', 'sa regasesti calmul cand mintea este plina', 'sa observi tiparele tale cu mai multa constienta', 'sa faci claritate pas cu pas'],
    servicesTitle: 'Instrumente care te pot insoti',
    services: [
      ['Mindfulness', 'Pentru a reveni la corp, respiratie si momentul prezent.'],
      ['Scriere reflexiva', 'Pentru a da forma gandurilor si a observa ce apare.'],
      ['Vizualizari ghidate', 'Pentru a crea imagini interioare de siguranta, calm si directie.'],
      ['Internal Family Systems', 'Pentru a asculta partile interioare cu curiozitate si respect.'],
    ],
    workTitle: 'Cum lucrez',
    work: 'Parcursul are loc prin intalniri individuale online, intr-un spatiu dedicat si confidential. Fiecare intalnire dureaza o ora si treizeci de minute. Abordarea se bazeaza pe ascultare, prezenta si respect pentru ritmul tau.',
    meditationTitle: 'Meditatie ghidata - Intoarcere la centru',
    meditationText: 'Deschide un spatiu de ascultare cu o imagine naturala si meditatia ghidata.',
    audioHint: 'Adauga fisierul audio in public/audio/meditation.mp3.',
    noteTitle: 'Nota importanta',
    note: 'Consilierea holistica este un parcurs de ascultare, crestere personala si sustinere a starii de bine emotionale. Nu inlocuieste psihoterapia, sprijinul medical sau tratamentul sanitar.',
    reflectionsTitle: 'Reflectii si inspiratie',
    reflectionsText: 'Idei scurte pentru a reveni la corp, a asculta emotiile si a crea mai multa prezenta in viata de zi cu zi.',
    reflections: [['Ascultare', 'Cand incetezi sa te judeci, poti incepe cu adevarat sa te asculti.'], ['Prezenta', 'O respiratie constienta poate deveni o mica intoarcere acasa.'], ['Claritate', 'Nu trebuie sa intelegi totul imediat: uneori ajunge urmatorul pas.']],
    instagramCta: 'Vezi mai mult pe Instagram',
    videoTitle: 'Cunoaste-o pe Simona',
    videoText: 'Un scurt video de prezentare in care ii poti asculta vocea si felul in care isi descrie munca.',
    watchVideo: 'Vezi reel-ul pe Instagram',
    contactTitle: 'Incepe de aici',
    contactText: 'Fiecare schimbare incepe cu un prim pas. Daca simti nevoia de claritate si sustinere, programeaza o prima intalnire gratuita de cunoastere.',
    whatsapp: 'Scrie-mi pe WhatsApp', email: 'Contacteaza-ma pe email', instagram: 'Urmareste-ma pe Instagram',
  },
}

const pages = ['home', 'about', 'path', 'reflections', 'meditation', 'contact']

function App() {
  const [language, setLanguage] = useState('it')
  const [theme, setTheme] = useState('night')
  const [page, setPage] = useState('home')
  const t = content[language]

  useEffect(() => {
    document.body.dataset.theme = theme
    document.documentElement.lang = language
  }, [theme, language])

  const links = useMemo(() => ({
    whatsapp: contact.phone ? `https://wa.me/${contact.phone}` : '#',
    email: contact.email ? `mailto:${contact.email}` : '#',
    instagram: contact.instagram || '#',
    introReel: contact.introReel || '#',
  }), [])

  return (
    <div className="site-shell">
      <aside className="side-menu">
        <button className="brand-button" onClick={() => setPage('home')}>{t.title}</button>
        <nav>
          {pages.map(item => <button key={item} className={page === item ? 'active' : ''} onClick={() => setPage(item)}>{t.nav[item]}</button>)}
        </nav>
      </aside>

      <div className="page-area">
        <header className="topbar">
          <div className="mobile-nav">{pages.map(item => <button key={item} className={page === item ? 'active' : ''} onClick={() => setPage(item)}>{t.nav[item]}</button>)}</div>
          <Controls language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} t={t} />
        </header>

        {page === 'home' && <Home t={t} setPage={setPage} />}
        {page === 'about' && <About t={t} />}
        {page === 'path' && <PathPage t={t} />}
        {page === 'reflections' && <Reflections t={t} links={links} />} 
        {page === 'meditation' && <Meditation t={t} />}
        {page === 'contact' && <Contact t={t} links={links} />}
      </div>
    </div>
  )
}

function Controls({ language, setLanguage, theme, setTheme, t }) {
  return <div className="controls">
    <span>{t.language}</span>
    <button className={language === 'it' ? 'active' : ''} onClick={() => setLanguage('it')}>{t.italian}</button>
    <button className={language === 'ro' ? 'active' : ''} onClick={() => setLanguage('ro')}>{t.romanian}</button>
    <span>{t.theme}</span>
    <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}>{t.light}</button>
    <button className={theme === 'night' ? 'active' : ''} onClick={() => setTheme('night')}>{t.night}</button>
  </div>
}

function Home({ t, setPage }) {
  return <main>
    <section className="hero-section wide-card">
      <div><p className="pill">{t.title}</p><h1>{t.hero}</h1><p>{t.intro}</p><div className="hero-actions"><button className="button-link" onClick={() => setPage('contact')}>{t.ctaPrimary}</button><button className="button-link secondary" onClick={() => setPage('meditation')}>{t.ctaSecondary}</button></div></div>
      <figure className="profile-card large-profile"><img src="/counseling/simona-photo-flower.png" alt={t.name} /><figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption></figure>
    </section>
    <section className="stat-row">{t.stats.map(item => <article key={item}>{item}</article>)}</section>
    <IntroVideo t={t} links={{ introReel: contact.introReel }} />
    <section className="split-section"><article className="panel"><h2>{t.aboutTitle}</h2><p>{t.about}</p></article><img src="/counseling/hands-session.png" alt={t.aboutTitle} /></section>
  </main>
}

function IntroVideo({ t, links }) {
  return <section className="intro-video panel"><div><p className="pill">Instagram Reel</p><h2>{t.videoTitle}</h2><p>{t.videoText}</p><a href={links.introReel} className="button-link instagram" target="_blank" rel="noreferrer">{t.watchVideo}</a></div><div className="reel-frame"><iframe src="https://www.instagram.com/reel/DZXW9QAgVWb/embed" title={t.videoTitle} allowFullScreen loading="lazy"></iframe></div></section>
}

function About({ t }) {
  return <main className="page-stack"><section className="split-section about-layout"><figure className="profile-card"><img src="/counseling/simona-photo-flower.png" alt={t.name} /><figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption></figure><article className="panel"><p className="pill">{t.nav.about}</p><h1>{t.aboutTitle}</h1><p>{t.about}</p><h2>{t.approachTitle}</h2><p>{t.approach}</p></article></section></main>
}

function PathPage({ t }) {
  return <main className="page-stack"><section className="panel intro-panel"><p className="pill">{t.nav.path}</p><h1>{t.pathTitle}</h1><ul className="large-list">{t.points.map(point => <li key={point}>{point}</li>)}</ul></section><section className="service-grid">{t.services.map(([title, body]) => <article className="panel service-card" key={title}><h2>{title}</h2><p>{body}</p></article>)}</section><section className="split-section"><img src="/counseling/hands-session.png" alt={t.workTitle} /><article className="panel"><h2>{t.workTitle}</h2><p>{t.work}</p></article></section></main>
}

function Reflections({ t, links }) {
  return <main className="page-stack"><section className="panel intro-panel"><p className="pill">{t.nav.reflections}</p><h1>{t.reflectionsTitle}</h1><p>{t.reflectionsText}</p></section><section className="reflection-grid">{t.reflections.map(([title, body]) => <article className="panel reflection-card" key={title}><span>{title}</span><p>{body}</p></article>)}</section><IntroVideo t={t} links={links} />
    <section className="instagram-band"><div><h2>Instagram</h2><p>{t.instagramCta}</p></div><a href={links.instagram} className="button-link instagram" target="_blank" rel="noreferrer">{t.instagram}</a></section></main>
}
function Meditation({ t }) {
  return <main className="meditation-focus"><img src="/counseling/nature.png" alt={t.meditationTitle} /><section className="audio-card"><p className="pill">{t.title}</p><h1>{t.meditationTitle}</h1><p>{t.meditationText}</p><audio controls preload="metadata"><source src="/audio/meditation.mp3" type="audio/mpeg" /></audio><small>{t.audioHint}</small></section></main>
}

function Contact({ t, links }) {
  return <main className="page-stack"><section className="cta-section wide-card"><article><p className="pill">{t.nav.contact}</p><h1>{t.contactTitle}</h1><p>{t.contactText}</p><div className="cta-actions"><a href={links.whatsapp} className="button-link">{t.whatsapp}</a><a href={links.email} className="button-link secondary">{t.email}</a><a href={links.instagram} className="button-link instagram">{t.instagram}</a></div></article><article className="panel"><h2>{t.noteTitle}</h2><p>{t.note}</p></article></section></main>
}

export default App

