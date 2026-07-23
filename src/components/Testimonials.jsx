import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import testimonial1 from '../assets/img/testimonial1.png'
import testimonial2 from '../assets/img/testimonial2.png'
import testimonial3 from '../assets/img/testimonial3.png'

const testimonials = [
  {
    img: testimonial1,
    name: 'Afua.',
    description: `Aliyan is a master at software development. He is 
    very personable, highly communicative, and skilled at taking the 
    initiative to enhance your codebase and feature set beyond the 
    original spec. Additionally, Aliyan completed the work in a 
    fraction of the time and at a fraction of the cost that other 
    proposals offered.
    We worked very collaboratively to refine the project, and he is 
    always happy to incorporate feedback, debug, and make adjustments. 
    If you have any web or software development work, do not hesitate 
    to entrust it with Aliyan.`,
  },
  {
    img: testimonial2,
    name: 'Femi.',
    description: `Aliyan is a great Web-Developer - very good at what he does.
      He literally brought my idea to live using his skill set.
      What I love about him is the communication.
      He was available to answer all my questions,
      provide feedback as needed, and flexible to scope changes.
      I'll definitely work with him again.`,
  },
  {
    img: testimonial3,
    name: 'Sam.',
    description: `It was an absolute pleasure working with Aliyan.
      He is very quick, with great understanding of project tasks 
      and a fantastic quality of work. We would highly recommend 
      Aliyan's services and we'll definitely be working with him 
      again. Thanks for all your work!`,
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
