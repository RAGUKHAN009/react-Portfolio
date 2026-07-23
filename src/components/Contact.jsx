import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${formData.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.project}`
    )
    window.location.href = `mailto:aliyankhanpak74@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">aliyankhanpak74@gmail.com</span>
              <a
                href="mailto:aliyankhanpak74@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Write me.. <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+92-315-583-1121</span>
              <a
                href="https://api.whatsapp.com/send?phone=+923155831121&text=Hello, "
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Write me.. <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">Aliyan Airf</span>
              <a
                href="www.linkedin.com/in/aliyan-arif-arif-sulaiman-783b0b423"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Write me.. <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="contact__form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="contact__form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                placeholder="Write your project details"
                className="contact__form-input"
                value={formData.project}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
