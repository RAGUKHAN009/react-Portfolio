import { useState } from 'react'
import { services } from '../data'

function Services() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <section className="services section">
      <span className="section__subtitle">My services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div className="services__card" key={service.modalTitle}>
            <h3 className="services__title">
              {service.title[0]} <br /> {service.title[1]}
            </h3>

            <span className="services__button" onClick={() => setActiveModal(index)}>
              See more <i className="bx bx-right-arrow-alt services__icon"></i>
            </span>

            <div className={`services__modal ${activeModal === index ? 'active-modal' : ''}`}>
              <div className="services__modal-content">
                <i
                  className="bx bx-x services__modal-close"
                  onClick={() => setActiveModal(null)}
                ></i>

                <h3 className="services__modal-title">{service.modalTitle}</h3>
                <p className="services__modal-description">
                  Service with more than {index === 0 ? 2 : 3} years of experience.
                  Providing quality work to clients and companies.
                </p>

                <ul className="services__modal-list">
                  {service.items.map((item, i) => (
                    <li className="services__modal-item" key={i}>
                      <i className="bx bx-check services__modal-icon"></i>
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
