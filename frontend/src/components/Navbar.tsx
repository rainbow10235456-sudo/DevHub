const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="DevHub home">
          <span className="brand-mark" aria-hidden="true">
            D
          </span>
          <span>DevHub</span>
        </a>

        <ul className="nav-links">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
