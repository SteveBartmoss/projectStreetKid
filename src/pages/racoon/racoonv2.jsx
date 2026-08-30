import "./css/racoonv2.css";
import raccoonImg from '../../assets/raccoon.png'

function Racoonv2() {
  return (
    <div className="app">

      {/* Background effects */}
      <div className="background-grid" />
      <div className="glow glow-purple" />
      <div className="glow glow-blue" />

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <div className="logo">
            🦝
          </div>

          <span>raccoon</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#preview">Preview</a>
          <a href="#docs">Docs</a>
          <a href="https://github.com">GitHub</a>
        </div>

        <button className="nav-button">
          Download
        </button>
      </nav>


      {/* Hero */}
      <main>

        <section className="hero">

          <div className="hero-content">

            <div className="badge">
              <span className="status-dot" />
              Built for developers
            </div>

            <h1>
              Your API.
              <br />
              <span>Your playground.</span>
            </h1>

            <p className="hero-description">
              Raccoon is a fast, modern API client designed to
              make testing, debugging and exploring APIs simple.
            </p>

            <div className="hero-actions">

              <button className="primary-button">
                Get started
                <span>→</span>
              </button>

              <button className="secondary-button">
                View on GitHub
              </button>

            </div>

            <div className="hero-meta">
              <span>Open source</span>
              <span>•</span>
              <span>Cross-platform</span>
              <span>•</span>
              <span>Developer first</span>
            </div>

          </div>


          {/* Hero preview */}
          <div className="hero-preview">
            <div className="div-img-raccoon">
              <img className="img-raccoon" src={raccoonImg} alt="Raccoon App" />
            </div>
          </div>

        </section>


        {/* Trusted */}
        <section className="trusted">

          <p>
            BUILT FOR DEVELOPERS WHO SHIP
          </p>

          <div className="trusted-items">
            <span>REST APIs</span>
            <span>GraphQL</span>
            <span>WebSockets</span>
            <span>HTTP</span>
            <span>JSON</span>
          </div>

        </section>


        {/* Features */}
        <section
          id="features"
          className="features"
        >

          <div className="section-heading">

            <div className="small-label">
              POWERFUL BY DEFAULT
            </div>

            <h2>
              Everything you need.
              <br />
              Nothing you don't.
            </h2>

            <p>
              Raccoon gives you the tools you need to work
              with APIs without getting in your way.
            </p>

          </div>


          <div className="feature-grid">

            <Feature
              icon="↗"
              title="HTTP Client"
              description="Send requests, inspect responses and debug your APIs with a clean and intuitive interface."
            />

            <Feature
              icon="▱"
              title="Collections"
              description="Organize your endpoints into collections and keep your projects structured."
            />

            <Feature
              icon="⌘"
              title="Environments"
              description="Switch between development, staging and production with ease."
            />

            <Feature
              icon="◷"
              title="Request History"
              description="Quickly find and replay requests you've already made."
            />

            <Feature
              icon="{}"
              title="JSON Editor"
              description="Edit and inspect JSON payloads with syntax highlighting."
            />

            <Feature
              icon="⚡"
              title="Fast"
              description="Designed to stay responsive even when you're working with large APIs."
            />

          </div>

        </section>


        {/* Preview */}
        <section
          id="preview"
          className="preview-section"
        >

          <div className="preview-copy">

            <div className="small-label">
              DESIGNED FOR FLOW
            </div>

            <h2>
              Stop fighting
              <br />
              your API client.
            </h2>

            <p>
              Raccoon's interface stays out of your way.
              Everything is where you expect it to be,
              so you can focus on building your API.
            </p>

            <div className="check-list">

              <div>
                <span>✓</span>
                Minimal interface
              </div>

              <div>
                <span>✓</span>
                Keyboard friendly
              </div>

              <div>
                <span>✓</span>
                Developer focused
              </div>

            </div>

          </div>


          <div className="terminal">

            <div className="terminal-header">

              <div className="terminal-controls">
                <span />
                <span />
                <span />
              </div>

              <span>
                raccoon-cli
              </span>

            </div>


            <div className="terminal-content">

              <div>
                <span className="terminal-prompt">
                  $
                </span>

                raccoon request
              </div>

              <div className="terminal-command">
                GET https://api.example.com/users
              </div>

              <br />

              <div className="terminal-success">
                ✓ 200 OK
              </div>

              <div>
                response time:
                <span className="terminal-highlight">
                  124ms
                </span>
              </div>

              <br />

              <div>
                {"{"}
              </div>

              <div className="terminal-indent">
                "users": 42,
              </div>

              <div className="terminal-indent">
                "status": "success"
              </div>

              <div>
                {"}"}
              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="cta">

          <div className="cta-raccoon">
            🦝
          </div>

          <h2>
            Ready to test
            <br />
            something?
          </h2>

          <p>
            Your next API request is just one click away.
          </p>

          <button className="primary-button">
            Get Raccoon
            <span>→</span>
          </button>

        </section>

      </main>


      {/* Footer */}
      <footer>

        <div className="footer-brand">
          <div className="logo">
            🦝
          </div>

          <span>raccoon</span>
        </div>

        <div className="footer-links">

          <a href="#features">
            Features
          </a>

          <a href="#docs">
            Documentation
          </a>

          <a href="https://github.com">
            GitHub
          </a>

          <a href="#">
            Twitter
          </a>

        </div>

        <div className="copyright">
          © 2026 Raccoon
        </div>

      </footer>

    </div>
  );
}


function Feature({
  icon,
  title,
  description
}) {
  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <div className="feature-arrow">
        →
      </div>

    </div>
  );
}


export default Racoonv2;