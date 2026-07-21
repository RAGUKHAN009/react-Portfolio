import { useState } from 'react'
import { works } from '../data'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
]

function Work() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredWorks =
    activeFilter === 'all' ? works : works.filter((w) => w.category === activeFilter)

  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        {filters.map((filter) => (
          <span
            key={filter.value}
            className={`work__item ${activeFilter === filter.value ? 'active-work' : ''}`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {filteredWorks.map((work) => (
          <div className={`work__card mix ${work.category}`} key={work.title}>
            <img src={work.img} alt={work.title} className="work__img" />

            <h3 className="work__title">{work.title}</h3>

            <a target="_blank" rel="noreferrer" href={work.link} className="work__button">
              Github Repo <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
