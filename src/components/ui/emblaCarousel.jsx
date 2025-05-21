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

  return (
    <div className="embla theme-dark">
      <div className="embla__viewport theme-dark" ref={emblaRef}>
        <div className="embla__container theme-dark">
          {slides.map((item, index) => (
            <div className="embla__slide theme-dark" key={index}>
              <div className="embla__slide__number theme-dark">
                <Grid size={20} />
                <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6 p-4 sm:p-6 md:p-8">
                  <div className="flex-1">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-white relative z-20 mb-2 sm:mb-3">
                      {item.title}
                    </p>
                    <p className="text-sm sm:text-base text-neutral-400 relative z-20">
                      {item.description}
                    </p>
                  </div>
                  {item.icon && (
                    <div className="flex items-center justify-center md:justify-end">
                      <span className="text-3xl sm:text-4xl md:text-5xl">{item.icon}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="embla__buttons mt-4 sm:mt-6 flex justify-center gap-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      
      {/* Progress Bar */}
      <div className="embla__progress mt-4 sm:mt-6">
        <div 
          className="embla__progress__bar h-1 sm:h-1.5 bg-neutral-800 rounded-full overflow-hidden"
          style={{ width: '100%' }}
        >
          <div
            className="embla__progress__bar__fill h-full bg-yellow-400 transition-transform duration-300"
            style={{ transform: `translateX(${scrollProgress}%)` }}
          />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
