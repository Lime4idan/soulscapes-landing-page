"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const GAME_URL = "https://gx.games/games/bdwxxw/soulscapes-demo-2026/";
const REPO_URL = "https://github.com/Lime4idan/SOULSCAPES.0.1";

type Language = "en" | "pt" | "es";

const copy = {
  en: {
    htmlLang: "en",
    skip: "Skip to content",
    menu: ["PLAY", "STORY", "EXPLORE", "COMFORT"],
    path: "/games/soulscapes/welcome.exe",
    nav: { home: "HOME", story: "STORY", gameplay: "GAMEPLAY", sensory: "COMFORT", project: "PROJECT" },
    heroEyebrow: "NARRATIVE EXPLORATION · DEMO 0.1",
    heroTitle: "Some memories do not disappear. They wait to be found.",
    heroText: "Guide Kiran through a quiet, unfamiliar forest. Meet its inhabitants, gather fragments and slowly uncover a story hidden between memory and emotion.",
    play: "PLAY THE DEMO",
    discover: "MEET KIRAN",
    status: "PLAYABLE MVP · DESKTOP + KEYBOARD",
    storyLabel: "STORY_FILE.TXT",
    storyTitle: "A forgotten path through an unfamiliar world.",
    storyP1: "Kiran wakes in a forest without knowing how they arrived. The ruins feel ancient, the people seem to remember more than they say, and small fragments scattered across the landscape hold pieces of something once lost.",
    storyP2: "Soulscapes is a contemplative 2D narrative game about memory, emotions, self-discovery and the comfort of moving at your own pace.",
    routeTitle: "CURRENT DEMO ROUTE",
    route: ["Wake in the forest", "Meet Lorun", "Find a memory fragment", "Return with new dialogue", "Enter the temple"],
    gameplayLabel: "GAMEPLAY/",
    gameplayTitle: "Explore gently. Notice everything.",
    gameplayIntro: "There is no timer and no leaderboard. The demo focuses on discovery, conversation and small interactions that move the story forward.",
    gameplay: [
      ["EXPLORE", "Walk, run and jump through a hand-painted side-scrolling forest."],
      ["TALK", "Meet characters and choose how Kiran responds during conversations."],
      ["COLLECT", "Find fragments connected to the world and its forgotten memories."],
      ["DISCOVER", "Unlock events, return to characters and reach the temple."],
    ],
    controls: "CONTROLS",
    controlItems: [["MOVE", "A / D or ← / →"], ["RUN", "Shift"], ["JUMP", "Z or X"], ["INTERACT", "E"], ["PAUSE", "Esc"]],
    sensoryLabel: "SENSORY_SETTINGS.EXE",
    sensoryTitle: "The experience can slow down with you.",
    sensoryText: "Soulscapes was designed to reduce sensory overload without separating accessibility from the rest of the game.",
    sensoryItems: ["Low-stimulation mode", "Reduced motion", "Adjustable text speed and size", "Contrast options", "Sensory break mode"],
    projectLabel: "PROJECT_NOTES.TXT",
    projectTitle: "Built as an academic game — growing beyond the classroom.",
    projectText: "Soulscapes is a playable academic MVP in active development. Alicia Borges is responsible for the concept, programming, narrative and visual direction through Lime4idan Studio.",
    projectMeta: [["ENGINE", "GameMaker"], ["CODE", "GML"], ["ART", "Krita · IbisPaint X"], ["PLATFORM", "GX.games · Desktop"]],
    repo: "VIEW SOURCE",
    finalLabel: "READY_TO_PLAY.URL",
    finalTitle: "The forest is waiting.",
    finalText: "The free demo opens on GX.games and is best experienced on a desktop computer with a keyboard.",
    footer: "SOULSCAPES · DEMO 0.1 · 2026",
    creator: "A LIME4IDAN STUDIO PROJECT",
  },
  pt: {
    htmlLang: "pt-BR",
    skip: "Pular para o conteúdo",
    menu: ["JOGAR", "HISTÓRIA", "EXPLORAR", "CONFORTO"],
    path: "/jogos/soulscapes/bem-vindo.exe",
    nav: { home: "INÍCIO", story: "HISTÓRIA", gameplay: "JOGABILIDADE", sensory: "CONFORTO", project: "PROJETO" },
    heroEyebrow: "EXPLORAÇÃO NARRATIVA · DEMO 0.1",
    heroTitle: "Algumas memórias não desaparecem. Elas esperam ser encontradas.",
    heroText: "Guie Kiran por uma floresta silenciosa e desconhecida. Conheça seus habitantes, encontre fragmentos e revele aos poucos uma história escondida entre memória e emoção.",
    play: "JOGAR A DEMO",
    discover: "CONHECER KIRAN",
    status: "MVP JOGÁVEL · COMPUTADOR + TECLADO",
    storyLabel: "ARQUIVO_HISTÓRIA.TXT",
    storyTitle: "Um caminho esquecido por um mundo desconhecido.",
    storyP1: "Kiran acorda em uma floresta sem saber como chegou ali. As ruínas parecem antigas, seus habitantes lembram mais do que dizem e pequenos fragmentos espalhados pela paisagem guardam partes de algo que um dia foi perdido.",
    storyP2: "Soulscapes é um jogo narrativo 2D contemplativo sobre memória, emoções, autodescoberta e o conforto de avançar no próprio ritmo.",
    routeTitle: "ROTA ATUAL DA DEMO",
    route: ["Acordar na floresta", "Conhecer Lorun", "Encontrar um fragmento", "Voltar para um novo diálogo", "Entrar no templo"],
    gameplayLabel: "JOGABILIDADE/",
    gameplayTitle: "Explore com calma. Observe tudo.",
    gameplayIntro: "Não existe cronômetro nem placar. A demo é construída em torno de descoberta, conversas e pequenas interações que fazem a história avançar.",
    gameplay: [
      ["EXPLORAR", "Caminhe, corra e pule por uma floresta lateral pintada à mão."],
      ["CONVERSAR", "Conheça personagens e escolha como Kiran responde nos diálogos."],
      ["COLETAR", "Encontre fragmentos ligados ao mundo e às suas memórias esquecidas."],
      ["DESCOBRIR", "Ative eventos, volte aos personagens e alcance o templo."],
    ],
    controls: "CONTROLES",
    controlItems: [["MOVER", "A / D ou ← / →"], ["CORRER", "Shift"], ["PULAR", "Z ou X"], ["INTERAGIR", "E"], ["PAUSAR", "Esc"]],
    sensoryLabel: "AJUSTES_SENSORIAIS.EXE",
    sensoryTitle: "A experiência pode desacelerar com você.",
    sensoryText: "Soulscapes foi pensado para reduzir a sobrecarga sensorial sem separar acessibilidade do restante do jogo.",
    sensoryItems: ["Modo de baixa estimulação", "Movimento reduzido", "Velocidade e tamanho do texto ajustáveis", "Opções de contraste", "Modo de pausa sensorial"],
    projectLabel: "NOTAS_PROJETO.TXT",
    projectTitle: "Criado como jogo acadêmico — crescendo além da sala de aula.",
    projectText: "Soulscapes é um MVP acadêmico jogável e segue em desenvolvimento. Alicia Borges é responsável pelo conceito, programação, narrativa e direção visual através do Lime4idan Studio.",
    projectMeta: [["ENGINE", "GameMaker"], ["CÓDIGO", "GML"], ["ARTE", "Krita · IbisPaint X"], ["PLATAFORMA", "GX.games · Computador"]],
    repo: "VER CÓDIGO",
    finalLabel: "PRONTO_PARA_JOGAR.URL",
    finalTitle: "A floresta está esperando.",
    finalText: "A demo gratuita abre no GX.games e funciona melhor em um computador com teclado.",
    footer: "SOULSCAPES · DEMO 0.1 · 2026",
    creator: "UM PROJETO LIME4IDAN STUDIO",
  },
  es: {
    htmlLang: "es",
    skip: "Saltar al contenido",
    menu: ["JUGAR", "HISTORIA", "EXPLORAR", "CONFORT"],
    path: "/juegos/soulscapes/bienvenida.exe",
    nav: { home: "INICIO", story: "HISTORIA", gameplay: "JUGABILIDAD", sensory: "CONFORT", project: "PROYECTO" },
    heroEyebrow: "EXPLORACIÓN NARRATIVA · DEMO 0.1",
    heroTitle: "Algunos recuerdos no desaparecen. Esperan ser encontrados.",
    heroText: "Guía a Kiran por un bosque silencioso y desconocido. Conoce a sus habitantes, reúne fragmentos y descubre poco a poco una historia oculta entre memoria y emoción.",
    play: "JUGAR LA DEMO",
    discover: "CONOCER A KIRAN",
    status: "MVP JUGABLE · ORDENADOR + TECLADO",
    storyLabel: "ARCHIVO_HISTORIA.TXT",
    storyTitle: "Un camino olvidado por un mundo desconocido.",
    storyP1: "Kiran despierta en un bosque sin saber cómo llegó allí. Las ruinas parecen antiguas, sus habitantes recuerdan más de lo que cuentan y pequeños fragmentos repartidos por el paisaje guardan partes de algo que una vez se perdió.",
    storyP2: "Soulscapes es un juego narrativo 2D contemplativo sobre memoria, emociones, autodescubrimiento y la calma de avanzar a tu propio ritmo.",
    routeTitle: "RUTA ACTUAL DE LA DEMO",
    route: ["Despertar en el bosque", "Conocer a Lorun", "Encontrar un fragmento", "Volver para un nuevo diálogo", "Entrar en el templo"],
    gameplayLabel: "JUGABILIDAD/",
    gameplayTitle: "Explora con calma. Observa todo.",
    gameplayIntro: "No hay cronómetro ni clasificación. La demo se centra en el descubrimiento, las conversaciones y pequeñas interacciones que hacen avanzar la historia.",
    gameplay: [
      ["EXPLORAR", "Camina, corre y salta por un bosque lateral pintado a mano."],
      ["HABLAR", "Conoce personajes y elige cómo responde Kiran durante los diálogos."],
      ["REUNIR", "Encuentra fragmentos conectados con el mundo y sus recuerdos olvidados."],
      ["DESCUBRIR", "Activa eventos, vuelve a los personajes y alcanza el templo."],
    ],
    controls: "CONTROLES",
    controlItems: [["MOVER", "A / D o ← / →"], ["CORRER", "Shift"], ["SALTAR", "Z o X"], ["INTERACTUAR", "E"], ["PAUSA", "Esc"]],
    sensoryLabel: "AJUSTES_SENSORIALES.EXE",
    sensoryTitle: "La experiencia puede desacelerar contigo.",
    sensoryText: "Soulscapes fue pensado para reducir la sobrecarga sensorial sin separar la accesibilidad del resto del juego.",
    sensoryItems: ["Modo de baja estimulación", "Movimiento reducido", "Velocidad y tamaño de texto ajustables", "Opciones de contraste", "Modo de pausa sensorial"],
    projectLabel: "NOTAS_PROYECTO.TXT",
    projectTitle: "Creado como juego académico — creciendo más allá del aula.",
    projectText: "Soulscapes es un MVP académico jugable y continúa en desarrollo. Alicia Borges está a cargo del concepto, programación, narrativa y dirección visual a través de Lime4idan Studio.",
    projectMeta: [["MOTOR", "GameMaker"], ["CÓDIGO", "GML"], ["ARTE", "Krita · IbisPaint X"], ["PLATAFORMA", "GX.games · Ordenador"]],
    repo: "VER CÓDIGO",
    finalLabel: "LISTO_PARA_JUGAR.URL",
    finalTitle: "El bosque está esperando.",
    finalText: "La demo gratuita se abre en GX.games y se disfruta mejor en un ordenador con teclado.",
    footer: "SOULSCAPES · DEMO 0.1 · 2026",
    creator: "UN PROYECTO DE LIME4IDAN STUDIO",
  },
} as const;

function WindowControls() {
  return <span className="window-controls" aria-hidden="true"><i>_</i><i>□</i><i>×</i></span>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t.htmlLang]);

  return (
    <div className="soul-desktop">
      <a className="skip-link" href="#content">{t.skip}</a>
      <header className="system-bar">
        <a className="brand-button" href="#home" aria-label="Soulscapes home">S</a>
        <nav className="system-menu" aria-label="Main menu">
          <a href={GAME_URL} target="_blank" rel="noreferrer">{t.menu[0]}</a>
          <a href="#story">{t.menu[1]}</a>
          <a href="#gameplay">{t.menu[2]}</a>
          <a href="#sensory">{t.menu[3]}</a>
        </nav>
        <span className="system-path">{t.path}</span>
        <div className="language-switch" aria-label="Language">
          {(["pt", "en", "es"] as Language[]).map((lang) => (
            <button key={lang} type="button" onClick={() => setLanguage(lang)} aria-pressed={language === lang}>{lang.toUpperCase()}</button>
          ))}
        </div>
      </header>

      <nav className="desktop-shortcuts" aria-label="Page shortcuts">
        {[
          ["home", "▣", t.nav.home, "blue"], ["story", "✦", t.nav.story, "pink"],
          ["gameplay", "⌘", t.nav.gameplay, "lavender"], ["sensory", "♡", t.nav.sensory, "sage"],
          ["project", "⌁", t.nav.project, "cream"],
        ].map(([target, icon, label, color]) => (
          <a className="shortcut" href={`#${target}`} key={target}>
            <span className={`folder-icon ${color}`}>{icon}</span><span>{label}</span>
          </a>
        ))}
      </nav>

      <main className="browser-window" id="content">
        <div className="window-titlebar"><span className="back-button" aria-hidden="true">‹</span><strong>SOULSCAPES_BROWSER.EXE</strong><WindowControls /></div>
        <div className="browser-bar"><span aria-hidden="true">⌂</span><span>{t.path}</span><span aria-hidden="true">☆</span></div>

        <div className="page-scroll">
          <section className="hero-section" id="home">
            <div className="hero-copy">
              <p className="eyebrow">{t.heroEyebrow}</p><h1>SOULSCAPES</h1><h2>{t.heroTitle}</h2><p className="lead">{t.heroText}</p>
              <div className="hero-actions">
                <a className="retro-button primary" href={GAME_URL} target="_blank" rel="noreferrer">▶ {t.play}</a>
                <a className="retro-button" href="#story">{t.discover} →</a>
              </div>
              <p className="status-line"><span />{t.status}</p>
            </div>
            <figure className="hero-image paper-photo"><Image src="/soulscapes-menu.png" alt="Soulscapes game menu in a blue watercolor forest" width={1216} height={774} priority /><figcaption>DEMO_0.1.PNG</figcaption></figure>
          </section>

          <nav className="folder-tabs" aria-label="Soulscapes sections">
            <a href="#story">{t.nav.story}</a><a href="#gameplay">{t.nav.gameplay}</a><a href="#sensory">{t.nav.sensory}</a><a href="#project">{t.nav.project}</a>
          </nav>

          <section className="content-card story-card" id="story">
            <div className="card-heading"><div><p>{t.storyLabel}</p><h2>{t.storyTitle}</h2></div><span>NARRATIVE</span></div>
            <div className="story-grid">
              <div className="text-panel"><p>{t.storyP1}</p><p>{t.storyP2}</p></div>
              <div className="route-panel"><strong>{t.routeTitle}</strong><ol>{t.route.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div>
            </div>
          </section>

          <section className="content-card" id="gameplay">
            <div className="card-heading"><div><p>{t.gameplayLabel}</p><h2>{t.gameplayTitle}</h2></div><span>2D · STORY</span></div>
            <p className="section-intro">{t.gameplayIntro}</p>
            <div className="gameplay-grid">
              {t.gameplay.map(([title, description], index) => <article className="gameplay-item" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}
            </div>
            <div className="controls-panel"><strong>{t.controls}</strong><dl>{t.controlItems.map(([action, key]) => <div key={action}><dt>{action}</dt><dd>{key}</dd></div>)}</dl></div>
          </section>

          <section className="content-card sensory-card" id="sensory">
            <div className="card-heading"><div><p>{t.sensoryLabel}</p><h2>{t.sensoryTitle}</h2></div><span>ACCESSIBILITY</span></div>
            <div className="sensory-grid">
              <figure className="settings-shot"><Image src="/soulscapes-sensory-settings.png" alt="Soulscapes sensory settings screen" width={1264} height={858} /></figure>
              <div className="sensory-copy"><p>{t.sensoryText}</p><ul>{t.sensoryItems.map((item) => <li key={item}>✓ {item}</li>)}</ul></div>
            </div>
          </section>

          <section className="content-card project-card" id="project">
            <div className="card-heading"><div><p>{t.projectLabel}</p><h2>{t.projectTitle}</h2></div><span>IN DEVELOPMENT</span></div>
            <div className="project-grid">
              <div className="project-copy"><p>{t.projectText}</p><a className="retro-button" href={REPO_URL} target="_blank" rel="noreferrer">⌘ {t.repo}</a></div>
              <dl className="project-meta">{t.projectMeta.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            </div>
          </section>

          <section className="final-card"><p>{t.finalLabel}</p><h2>{t.finalTitle}</h2><span>{t.finalText}</span><a className="retro-button primary" href={GAME_URL} target="_blank" rel="noreferrer">▶ {t.play}</a></section>
          <footer className="site-footer"><span>{t.footer}</span><span>{t.creator}</span></footer>
        </div>
      </main>

      <footer className="taskbar" aria-label="Taskbar">
        <a href="#home" className="start-button">✦ START</a><a href="#home" className="task-item active">▣ SOULSCAPES.EXE</a><a href="#story" className="task-item">✦ {t.nav.story}</a><a href={GAME_URL} target="_blank" rel="noreferrer" className="task-item play-task">▶ {t.play}</a><span className="task-status">♡ DEMO 0.1</span>
      </footer>
    </div>
  );
}
