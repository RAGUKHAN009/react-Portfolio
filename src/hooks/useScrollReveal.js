import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

/**
 * Reproduces the entrance animations from the original main.js,
 * run once when the app mounts.
 */
function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    })

    sr.reveal('.home__data')
    sr.reveal('.home__handle', { delay: 700 })
    sr.reveal('.home__social, .home__scroll', { delay: 900, origin: 'bottom' })
  }, [])
}

export default useScrollReveal
