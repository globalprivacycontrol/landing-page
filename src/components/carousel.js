import { useState } from 'react';
import PropTypes from 'prop-types';
import Slider, { Slide } from './slider';
import styles from './carousel.module.css';
import VisuallyHidden from './visually-hidden';

export default function Carousel({ initialStep = 0, items = [] }) {
  const [step, setStep] = useState(initialStep);

  return (
    <div className={styles.carousel}>
      <Slider step={step} onChange={setStep}>
        {items.map((item) => (
          <Slide key={item.name}>
            <figure>
              <blockquote cite={item.url}>
                <p>{item.quote}</p>
              </blockquote>

              <figcaption>
                <img src={item.img} />
                <p>{item.name}</p>
              </figcaption>
            </figure>
          </Slide>
        ))}
      </Slider>

      {/* Carousel controls */}
      <div className={styles.controls}>
        <ul>
          {items.map((item, i) => (
            <li key={item.name}>
              <button
                className={step === i ? styles.active : undefined}
                onClick={() => setStep(i)}
              >
                <VisuallyHidden>Got to slide {i}</VisuallyHidden>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  initialStep: PropTypes.number,
  items: PropTypes.array
};
