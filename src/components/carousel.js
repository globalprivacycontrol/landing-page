import { useState } from 'react';
import PropTypes from 'prop-types';
import Slider, { Slide } from './slider';
import styles from './carousel.module.css';
import VisuallyHidden from './visually-hidden';

export default function Carousel({ initialStep = 0, items }) {
  const [step, setStep] = useState(initialStep);

  return (
    <div className={styles.carousel}>
      <Slider step={step} onChange={setStep}>
        {items.map((item) => (
          <Slide key={item.name}>
            <figure>
              <blockquote cite={item.url}>
                <p className={` ${styles.sectionTitle}`}>"{item.quote}"</p>
              </blockquote>

              <figcaption>
                <a href={item.url}>
                  <img className="rounded-circle py-5" src={item.img} />
                  <p className="mb-0">
                    <strong>{item.name}</strong>
                  </p>
                  <p>
                    <i>{item.position}</i>
                  </p>
                </a>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
