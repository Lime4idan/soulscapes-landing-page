const GAME_URL =
  "https://gx.games/games/bdwxxw/soulscapes-demo-2026/";

const features = [
  {
    number: "01",
    title: "Nothing designed to scare you",
    description:
      "No jump scares, flashing lights, or sudden sounds. Every element is designed to avoid sensory overload.",
  },
  {
    number: "02",
    title: "You control the sensory input",
    description:
      "Adjust light, sound, motion, and particles until the world feels comfortable to you.",
  },
  {
    number: "03",
    title: "No score. No game over.",
    description:
      "There is no losing, leaderboard, or timer. The pace of the experience is entirely yours.",
  },
  {
    number: "04",
    title: "Landscapes that breathe",
    description:
      "Delicate environments shift in color, shape, and sound as you explore and interact.",
  },
];

function WindowControls() {
  return (
    <div className="window-controls" aria-hidden="true">
      <span>_</span>
      <span>□</span>
      <span>×</span>
    </div>
  );
}

function PlayLink({ className = "" }: { className?: string }) {
  return (
    <a
      className={`play-button ${className}`}
      href={GAME_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Play Soulscapes on GX.Games (opens in a new tab)"
    >
      <span aria-hidden="true">▶</span>
      Play now
    </a>
  );
}

export default function Home() {
  return (
    <div className="desktop-shell">
      <a className="skip-link" href="#conteudo">
        Skip to content
      </a>

      <nav className="desktop-icons" aria-label="Page shortcuts">
        <a href="#inicio" className="desktop-icon">
          <span aria-hidden="true">🎮</span>
          <small>SOULSCAPES<br />.exe</small>
        </a>
        <a href="#sobre" className="desktop-icon">
          <span aria-hidden="true">📄</span>
          <small>about.txt</small>
        </a>
        <a href="#recursos" className="desktop-icon">
          <span aria-hidden="true">📋</span>
          <small>features.doc</small>
        </a>
        <a href="#sensorial" className="desktop-icon">
          <span aria-hidden="true">⚙️</span>
          <small>sensory</small>
        </a>
        <a href={GAME_URL} target="_blank" rel="noreferrer" className="desktop-icon">
          <span aria-hidden="true">💗</span>
          <small>play.url</small>
        </a>
      </nav>

      <header className="mobile-header">
        <a href="#inicio" className="mobile-brand">SOULSCAPES.exe</a>
        <PlayLink className="play-button-small" />
      </header>

      <main id="conteudo" className="content">
        <section id="inicio" className="window hero-window" aria-labelledby="hero-heading">
          <div className="title-bar active">
            <span>🎮 SOULSCAPES.exe</span>
            <WindowControls />
          </div>

          <div className="hero-body">
            <div className="hero-art-wrap">
              <img
                src="/soulscapes-menu.png"
                alt="Soulscapes title screen showing a child in a blue forest with New Game, Continue, and Credits buttons"
                className="hero-art"
              />
              <span className="demo-sticker">DEMO 2026</span>
            </div>

            <div className="hero-copy">
              <p className="eyebrow">A PAUSE DISGUISED AS A GAME</p>
              <h1 id="hero-heading">A place where you never have to rush.</h1>
              <p className="hero-description">
                Explore serene landscapes, find small moments of care, and adjust
                every sensory detail your way. No pressure. No losing.
              </p>
              <div className="hero-actions">
                <PlayLink />
                <a href="#sobre" className="secondary-button">Discover the game</a>
              </div>
              <p className="platform-line">
                <span className="online-dot" aria-hidden="true" /> Demo available on GX.Games
              </p>
              <div className="platform-notice" role="note">
                <span className="device-icon" aria-hidden="true">🖥️</span>
                <span>
                  <strong>Desktop only</strong>
                  The game is not available on phones or tablets.
                </span>
              </div>
            </div>
          </div>

          <div className="status-bar">
            <span>Ready</span>
            <span>SOULSCAPES.exe</span>
          </div>
        </section>

        <section id="sobre" className="window" aria-labelledby="about-heading">
          <div className="title-bar inactive">
            <span>📄 about.txt — Notepad</span>
            <WindowControls />
          </div>
          <div className="menu-bar" aria-hidden="true">
            <span>File</span><span>Edit</span><span>Format</span><span>Help</span>
          </div>
          <div className="notepad-grid">
            <div className="notepad-copy">
              <p className="typed-lead" id="about-heading">
                Every game tells you to move faster.<br />
                This one invites you to pause.<span className="caret" aria-hidden="true">_</span>
              </p>
              <p>
                Soulscapes was created as a refuge: a short, welcoming experience
                designed from the start to respect different sensory needs.
              </p>
              <p>
                Here, silence is a mechanic. Rest is progress. And you can always
                move forward at your own pace.
              </p>
            </div>

            <blockquote className="quote-card">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p>It is the first game I did not feel the need to close.</p>
              <cite>Playtest participant</cite>
            </blockquote>
          </div>
          <div className="status-bar">
            <span>Ln 1, Col 1</span><span>UTF-8</span><span>100%</span>
          </div>
        </section>

        <section id="recursos" className="window" aria-labelledby="features-heading">
          <div className="title-bar active">
            <span>📋 features.doc — Soulscapes</span>
            <WindowControls />
          </div>
          <div className="toolbar" aria-hidden="true">
            <span className="tool-bold">B</span><span className="tool-italic">I</span><span className="tool-under">U</span>
            <i />
            <span>Align</span><span>Indent</span><span>Review</span>
          </div>
          <div className="document-sheet">
            <div className="section-heading">
              <p>ACCESSIBLE BY DESIGN</p>
              <h2 id="features-heading">What makes Soulscapes different</h2>
            </div>
            <div className="feature-list">
              {features.map((feature) => (
                <article className="feature-row" key={feature.number}>
                  <span className="feature-number">{feature.number}</span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="status-bar">
            <span>Page 1 of 1</span><span>English</span>
          </div>
        </section>

        <section id="sensorial" className="window sensory-window" aria-labelledby="sensory-heading">
          <div className="title-bar inactive">
            <span>⚙️ Settings — Sensory profile</span>
            <WindowControls />
          </div>
          <div className="sensory-layout">
            <div className="sensory-copy">
              <p className="eyebrow">YOUR COMFORT COMES FIRST</p>
              <h2 id="sensory-heading">The world adapts to you.</h2>
              <p>
                Choose the right intensity before you begin. Every option can be
                changed at any time.
              </p>
              <ul className="check-list">
                <li>No sudden visual or audio surprises</li>
                <li>Adjustable motion and particles</li>
                <li>A simple, clear, and predictable interface</li>
              </ul>
            </div>

            <figure className="settings-image-card">
              <img
                src="/soulscapes-sensory-settings.png"
                alt="Soulscapes sensory break screen with controls for volume, low-stimulation mode, animation, text speed and size, and contrast"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="window cta-window" aria-labelledby="cta-heading">
          <div className="title-bar pink">
            <span>💗 play.url — Internet Explorer</span>
            <WindowControls />
          </div>
          <div className="browser-bar" aria-hidden="true">
            <span>←</span><span>→</span><span>⌂</span>
            <div>https://gx.games/games/bdwxxw/soulscapes-demo-2026/</div>
            <span>Go</span>
          </div>
          <div className="cta-body">
            <div className="leaf" aria-hidden="true">⌁</div>
            <p className="eyebrow">THE FOREST IS WAITING</p>
            <h2 id="cta-heading">Breathe. Enter when you are ready.</h2>
            <p>The Soulscapes demo is free to play on GX.Games on desktop computers.</p>
            <PlayLink className="play-button-large" />
            <small>Not available on phones or tablets · the game opens in a new tab.</small>
          </div>
          <div className="status-bar">
            <span>🔒 Done</span><span>Internet</span>
          </div>
        </section>

        <footer className="site-footer">
          <span>SOULSCAPES © 2026</span>
          <span>Made with calm.</span>
        </footer>
      </main>

      <div className="taskbar" aria-label="Taskbar">
        <a href="#inicio" className="start-button">
          <span className="start-logo" aria-hidden="true"><i /><i /><i /><i /></span>
          Start
        </a>
        <a href="#inicio" className="task-item active">🎮 SOULSCAPES.exe</a>
        <a href="#sobre" className="task-item">📄 about.txt</a>
        <a href={GAME_URL} target="_blank" rel="noreferrer" className="task-item task-play">▶ Play</a>
        <div className="task-tray"><span aria-hidden="true">🔊</span><span>online</span></div>
      </div>
    </div>
  );
}
