function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Aliyan Arif</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#work" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#testimonial" className="footer__link">Testimonial</a>
          </li>
        </ul>

        <ul className="footer__social">
          <a
            href="https://www.linkedin.com/in/ali-hassan-339a861a7/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~017d016ee83e4fc696"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-upwork"></i>
          </a>

          <a
            href="https://www.instagram.com/ali_hassan_amor/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </ul>

        <span className="footer__copy">&#169; Aliyan Arif. All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer
