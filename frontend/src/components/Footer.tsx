function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <p className="footer-brand">DevHub</p>
          <p className="footer-copyright">
            &copy; {currentYear} DevHub. All rights reserved.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a
            href="https://github.com/rainbow10235456-sudo/DevHub"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:rainbow10235456@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
