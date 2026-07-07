import "./App.css";

function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <h2>Ivan Dimitrov</h2>
        <div>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="tag">Junior Developer • Business-minded</p>
          <h1>Building practical web projects with clean design.</h1>
          <p className="subtitle">
            I create websites and tools using React, Python, Django and modern
            web technologies.
          </p>

          <div className="buttons">
            <a href="#projects">View Projects</a>
            <a href="#contact" className="secondary">Contact Me</a>
          </div>
        </div>

        <div className="card">
          <h3>Current Focus</h3>
          <p>Portfolio Website</p>
          <p>ToonZone</p>
          <p>BPMN Invoice Simulator</p>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>

        <div className="grid">
          <div className="project">
            <h3>ToonZone</h3>
            <p>Cartoon discovery website with profiles, genres and search.</p>
          </div>

          <div className="project">
            <h3>BPMN Invoice Simulator</h3>
            <p>Business process simulator for invoice handling and disputes.</p>
          </div>

          <div className="project">
            <h3>Student Platform</h3>
            <p>Concept for verified student content and university discovery.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let’s build something.</h2>
        <p>Email: your.email@example.com</p>
        <p>GitHub: github.com/FuewI</p>
      </section>
    </main>
  );
}

export default App;