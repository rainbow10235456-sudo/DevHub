const contactLinks = [
  {
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/your-username',
    href: 'https://github.com/your-username',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-profile',
    href: 'https://www.linkedin.com/in/your-profile',
  },
]

function Contact() {
  return (
    <section id="contact" className="contact page-section">
      <div className="contact-layout container">
        <div className="section-header">
          <p className="section-label">Get In Touch</p>
          <h2>Let&apos;s build something useful.</h2>
          <p>
            I&apos;m always interested in learning opportunities, thoughtful
            feedback, and conversations about software development.
          </p>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>{link.label}</span>
              <strong>{link.value}</strong>
              <span className="contact-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
