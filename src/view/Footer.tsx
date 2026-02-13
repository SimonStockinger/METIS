function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Simon Stockinger</p>

        <nav>
          <ul className="footer-links">
            <li><a href="#">Tutorial</a></li>
            <li><a href="https://github.com/simonstockinger/METIS" target="_blank">GitHub</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
