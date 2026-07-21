import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import testimonial1 from '../assets/img/testimonial1.png'
import testimonial2 from '../assets/img/testimonial2.png'
import testimonial3 from '../assets/img/testimonial3.png'

const testimonials = [
  {
    img: testimonial1,
    name: 'Afua B.',
    description: `Aliyan is a master at UI. He is very personable,
      very communicative and skilled at taking initiative to enhance what you have asked of him.
      Additionally Aliyan completed the work in a fraction of the time AND at a fraction of the cost
      that other proposals offered.
      We worked very collaboratively to improve the project and he is happy to incorporate your
      feedback and make changes.
      If you have any UI design work, do not hesitate to entrust it with Ali.
      I give Ali my highest recommendation. Don't even think twice, just hire him.`,
  },
  {
    img: testimonial2,
    name: 'Femi A.',
    description: `Aliyan is a great UI/UX designer - very good at what he does.
      He literally brought my idea to live using his skill set.
      What I love about him is the communication.
      He was available to answer all my questions,
      provide feedback as needed, and flexible to scope changes.
      I'll definitely work with him again.`,
  },
  {
    img: testimonial3,
    name: 'Sam O.',
    description: `It was an absolute pleasure working with Aliyan.
      He is very quick, with great understanding of project tasks and a fantastic quality of work.
      We would highly recommend Aliyan's services and we'll definitely be working with him again.
      Thanks for all your work!`,
  },
]

function Testimonials() {
  return (
    <section className="testimonial section">
      <span className="section__subtitle">My clients say</span>
      <h2 className="section__title">Testimonial</h2>

      <Swiper
        modules={[Pagination]}
        className="testimonial__container container"
        spaceBetween={24}
        loop
        grabCursor
        pagination={{ el: '.swiper-pagination', clickable: true }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2, spaceBetween: 48 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide className="testimonial__card" key={t.name}>
            <img src={t.img} alt={t.name} className="testimonial__img" />
            <h3 className="testimonial__name">{t.name}</h3>
            <p className="testimonial__description">" {t.description} "</p>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  )
}

export default Testimonials
