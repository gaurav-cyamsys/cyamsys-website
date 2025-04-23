import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../ui/emblaCarouselArrowButton'
import { Grid } from './feature-card'
import { motion } from 'framer-motion'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
    
    // Update active index based on scroll position
    const index = emblaApi.selectedScrollSnap()
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('select', onScroll)
  }, [emblaApi, onScroll])

  // Add direct click handlers to ensure they work
  const handlePrevClick = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const handleNextClick = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  return (
    <div className="embla theme-dark">
      <div className="embla__viewport theme-dark" ref={emblaRef}>
        <div className="embla__container theme-dark">
          {slides.map((item, index) => (
            <div className="embla__slide theme-dark" key={index}>
              <div className="embla__slide__number theme-dark">
                <Grid size={20} />
                <div className='flex flex-col md:flex md:flex-row md:justify-between p-4'>
                  <div className="flex items-center mb-4 md:mb-0">
                    <motion.span 
                      className="text-4xl mr-3"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: activeIndex === index ? 1.2 : 1, 
                        opacity: 1 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    <motion.p 
                      className="text-base mx-1 font-bold text-white relative z-20 text-xl"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      {item.title}
                    </motion.p>
                  </div>
                  <motion.p 
                    className="text-neutral-300 sm:mt-0 mt-5 sm:mx-2 mx-0 text-base font-normal relative z-20"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls theme-dark">
        <div className="embla__buttons theme-dark">
          <PrevButton onClick={handlePrevClick} disabled={prevBtnDisabled} />
          <NextButton onClick={handleNextClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress theme-dark">
          <div
            className="embla__progress__bar theme-dark"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
