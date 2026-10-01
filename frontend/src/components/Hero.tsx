function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-layout container">
        <div className="hero-content">
          <p className="section-label">Welcome to DevHub</p>

          <h1>
            Hi, I&apos;m a <span>Full-Stack Software Engineer.</span>
          </h1>

          <p className="hero-description">
            I build practical, reliable web applications and learn by turning
            ideas into working software. DevHub is where I share that journey,
            the technologies I use, and the projects I create.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Current development focus">
          <p className="hero-card-label">Currently focused on</p>
          <ul>
            <li>
              <span>01</span>
              Building full-stack applications
            </li>
            <li>
              <span>02</span>
              Writing maintainable code
            </li>
            <li>
              <span>03</span>
              Learning through real projects
            </li>
          </ul>

          <p className="hero-status">
            <span aria-hidden="true" />
            Always learning and improving
          </p>
        </aside>
      </div>
    </section>
  )
}

export default Hero
