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
            href="www.linkedin.com/in/aliyan-arif-arif-sulaiman-783b0b423"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="UPWORK_PROFILE_ALIYAN_#"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-upwork"></i>
          </a>

          <a
            href="https://www.instagram.com/ragu_khan_009/"
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
