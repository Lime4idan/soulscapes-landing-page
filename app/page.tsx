const GAME_URL =
  "https://gx.games/games/bdwxxw/soulscapes-demo-2026/";

const features = [
  {
    number: "01",
    title: "Nada que te assuste",
    description:
      "Sem jumpscares, flashes ou sons repentinos. Cada elemento foi pensado para não sobrecarregar.",
  },
  {
    number: "02",
    title: "Você controla os estímulos",
    description:
      "Ajuste luz, som, movimento e partículas até o mundo ficar confortável para você.",
  },
  {
    number: "03",
    title: "Sem score. Sem game over.",
    description:
      "Não existe perder, ranking ou cronômetro. O ritmo da experiência é inteiramente seu.",
  },
  {
    number: "04",
    title: "Paisagens que respiram",
    description:
      "Ambientes delicados mudam de cor, forma e som conforme você explora e interage.",
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
      aria-label="Jogar Soulscapes no GX.Games (abre em uma nova aba)"
    >
      <span aria-hidden="true">▶</span>
      Jogar agora
    </a>
  );
}

export default function Home() {
  return (
    <div className="desktop-shell">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <nav className="desktop-icons" aria-label="Atalhos da página">
        <a href="#inicio" className="desktop-icon">
          <span aria-hidden="true">🎮</span>
          <small>SOULSCAPES<br />.exe</small>
        </a>
        <a href="#sobre" className="desktop-icon">
          <span aria-hidden="true">📄</span>
          <small>sobre.txt</small>
        </a>
        <a href="#recursos" className="desktop-icon">
          <span aria-hidden="true">📋</span>
          <small>recursos.doc</small>
        </a>
        <a href="#sensorial" className="desktop-icon">
          <span aria-hidden="true">⚙️</span>
          <small>sensorial</small>
        </a>
        <a href={GAME_URL} target="_blank" rel="noreferrer" className="desktop-icon">
          <span aria-hidden="true">💗</span>
          <small>jogar.url</small>
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
                alt="Tela inicial de Soulscapes com uma criança em uma floresta azul e os botões Novo Jogo, Continuar e Créditos"
                className="hero-art"
              />
              <span className="demo-sticker">DEMO 2026</span>
            </div>

            <div className="hero-copy">
              <p className="eyebrow">UMA PAUSA DISFARÇADA DE JOGO</p>
              <h1 id="hero-heading">Um lugar onde você não precisa ter pressa.</h1>
              <p className="hero-description">
                Explore paisagens serenas, encontre pequenos momentos de cuidado
                e ajuste cada estímulo ao seu jeito. Sem pressão. Sem perder.
              </p>
              <div className="hero-actions">
                <PlayLink />
                <a href="#sobre" className="secondary-button">Conhecer o jogo</a>
              </div>
              <p className="platform-line">
                <span className="online-dot" aria-hidden="true" /> Demo disponível no GX.Games
              </p>
            </div>
          </div>

          <div className="status-bar">
            <span>Pronto</span>
            <span>SOULSCAPES.exe</span>
          </div>
        </section>

        <section id="sobre" className="window" aria-labelledby="about-heading">
          <div className="title-bar inactive">
            <span>📄 sobre.txt — Bloco de Notas</span>
            <WindowControls />
          </div>
          <div className="menu-bar" aria-hidden="true">
            <span>Arquivo</span><span>Editar</span><span>Formatar</span><span>Ajuda</span>
          </div>
          <div className="notepad-grid">
            <div className="notepad-copy">
              <p className="typed-lead" id="about-heading">
                Todo jogo te diz para ir mais rápido.<br />
                Esse te convida a parar.<span className="caret" aria-hidden="true">_</span>
              </p>
              <p>
                Soulscapes nasceu para ser um refúgio: uma experiência curta e
                acolhedora construída desde o início para respeitar diferentes
                sensibilidades sensoriais.
              </p>
              <p>
                Aqui, silêncio também é mecânica. Descansar também é progresso.
                E você sempre pode seguir no seu próprio tempo.
              </p>
            </div>

            <blockquote className="quote-card">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p>É o primeiro jogo que eu não precisei fechar.</p>
              <cite>Participante dos playtests</cite>
            </blockquote>
          </div>
          <div className="status-bar">
            <span>Ln 1, Col 1</span><span>UTF-8</span><span>100%</span>
          </div>
        </section>

        <section id="recursos" className="window" aria-labelledby="features-heading">
          <div className="title-bar active">
            <span>📋 recursos.doc — Soulscapes</span>
            <WindowControls />
          </div>
          <div className="toolbar" aria-hidden="true">
            <span className="tool-bold">B</span><span className="tool-italic">I</span><span className="tool-under">U</span>
            <i />
            <span>Alinhar</span><span>Recuo</span><span>Revisão</span>
          </div>
          <div className="document-sheet">
            <div className="section-heading">
              <p>DESIGN ACESSÍVEL POR CONSTRUÇÃO</p>
              <h2 id="features-heading">O que faz Soulscapes diferente</h2>
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
            <span>Página 1 de 1</span><span>Português (Brasil)</span>
          </div>
        </section>

        <section id="sensorial" className="window sensory-window" aria-labelledby="sensory-heading">
          <div className="title-bar inactive">
            <span>⚙️ Configurações — Perfil sensorial</span>
            <WindowControls />
          </div>
          <div className="sensory-layout">
            <div className="sensory-copy">
              <p className="eyebrow">SEU CONFORTO VEM PRIMEIRO</p>
              <h2 id="sensory-heading">O mundo se adapta a você.</h2>
              <p>
                Antes mesmo de começar, escolha a intensidade ideal. As opções
                podem ser alteradas a qualquer momento.
              </p>
              <ul className="check-list">
                <li>Sem surpresas visuais ou sonoras</li>
                <li>Movimento e partículas ajustáveis</li>
                <li>Interface simples, clara e previsível</li>
              </ul>
            </div>

            <div className="settings-card" aria-label="Exemplo de configurações sensoriais">
              <div className="settings-title"><span>Perfil: Calmo</span><span>salvo ✓</span></div>
              {[
                ["Luz", "Suave", "32%"],
                ["Som", "Baixo", "24%"],
                ["Movimento", "Lento", "18%"],
                ["Partículas", "Poucas", "28%"],
              ].map(([label, value, width]) => (
                <div className="setting" key={label}>
                  <div><span>{label}</span><strong>{value}</strong></div>
                  <div className="slider-track"><span style={{ width }} /></div>
                </div>
              ))}
              <button type="button" className="retro-confirm">Aplicar configurações</button>
            </div>
          </div>
        </section>

        <section className="window cta-window" aria-labelledby="cta-heading">
          <div className="title-bar pink">
            <span>💗 jogar.url — Internet Explorer</span>
            <WindowControls />
          </div>
          <div className="browser-bar" aria-hidden="true">
            <span>←</span><span>→</span><span>⌂</span>
            <div>https://gx.games/games/bdwxxw/soulscapes-demo-2026/</div>
            <span>Ir</span>
          </div>
          <div className="cta-body">
            <div className="leaf" aria-hidden="true">⌁</div>
            <p className="eyebrow">A FLORESTA ESTÁ ESPERANDO</p>
            <h2 id="cta-heading">Respire. Entre quando quiser.</h2>
            <p>A demo de Soulscapes já pode ser jogada gratuitamente no GX.Games.</p>
            <PlayLink className="play-button-large" />
            <small>O jogo será aberto em uma nova aba.</small>
          </div>
          <div className="status-bar">
            <span>🔒 Concluído</span><span>Internet</span>
          </div>
        </section>

        <footer className="site-footer">
          <span>SOULSCAPES © 2026</span>
          <span>Feito com calma.</span>
        </footer>
      </main>

      <div className="taskbar" aria-label="Barra inferior">
        <a href="#inicio" className="start-button">
          <span className="start-logo" aria-hidden="true"><i /><i /><i /><i /></span>
          Iniciar
        </a>
        <a href="#inicio" className="task-item active">🎮 SOULSCAPES.exe</a>
        <a href="#sobre" className="task-item">📄 sobre.txt</a>
        <a href={GAME_URL} target="_blank" rel="noreferrer" className="task-item task-play">▶ Jogar</a>
        <div className="task-tray"><span aria-hidden="true">🔊</span><span>online</span></div>
      </div>
    </div>
  );
}
