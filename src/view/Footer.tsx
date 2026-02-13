import "@/styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Simon Stockinger</p>
      </div>
    </footer>
  );
}

export default Footer;
