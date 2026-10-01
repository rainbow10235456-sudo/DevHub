function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-content container">
        <p>&copy; {currentYear} DevHub. All rights reserved.</p>
        <p>Built with React, TypeScript, Vite, and CSS.</p>
      </div>
    </footer>
  )
}

export default Footer
