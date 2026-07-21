import profileImg from '../assets/img/profile.png'

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Aliyan Arif</h1>
          <h3 className="home__education">FrontEnd Web-developer</h3>

          <div className="home__buttons">
            <a download="" href="/CV.docx" className="button button--ghost">
              Download CV
            </a>
            <a href="#about" className="button">About me</a>
          </div>
        </div>

        <div className="home__handle">
          <img src={profileImg} alt="Aliyan Arif" className="home__img" />
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/ragu-khan-326335305/"
            className="home__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://www.behance.net/alyhassan4"
            className="home__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-behance"></i>
          </a>

          <a
            href="https://dribbble.com/aly-hassan"
            className="home__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-dribbble"></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className="bx bx-mouse home__scroll-icon"></i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  )
}

export default Home
