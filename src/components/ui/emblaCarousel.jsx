import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../ui/emblaCarouselArrowButton'
import { Grid } from './feature-card'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [scrollProgress, setScrollProgress] = useState(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla theme-dark">
      <div className="embla__viewport theme-dark" ref={emblaRef}>
        <div className="embla__container theme-dark">
          {slides.map((item,index) => (
            <div className="embla__slide theme-dark" key={index}>
              <div className="embla__slide__number theme-dark">
                 <Grid size={20} />
                 <div className='flex flex-col md:flex md:flex-row md:justify-between'>
                           <p className="text-base mx-1 font-bold text-white relative z-20">
                              {item.title}
                            </p>
                            <p className="text-neutral-400 sm:mt-0 mt-5 sm:mx-2 mx-0 text-base font-normal relative z-20">
                              {item.description}
                            </p>
                            </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls theme-dark">
        <div className="embla__buttons theme-dark">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
