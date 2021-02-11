import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './slider.module.css';

const SlideContext = React.createContext(null);

export default function Slider({
  id,
  className,
  step,
  onChange,
  children,
  offset = 0,
  threshold = 0.05
}) {
  const ref = useRef();
  const hasTouchedRef = useRef(false);
  const prevStepRef = useRef(step);
  useEffect(() => {
    prevStepRef.current = step;
  });

  const N = React.Children.count(children);

  // slider states
  const [x0, setX0] = useState(null);
  const [dx, setDx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const nextWidth = ref.current.offsetWidth;
      if (nextWidth !== width) {
        setWidth(nextWidth);
      }
    };

    if (ref.current) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, width]);

  useEffect(() => {
    // handle keyboards events
    function handleKeydown(e) {
      switch (e.key) {
        case 'ArrowLeft':
          if (step > 0) {
            onChange(step - 1);
          }
          break;

        case 'ArrowRight':
          if (step < N - 1) {
            onChange(step + 1);
          }
          break;

        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeydown, false);
    return () => {
      window.removeEventListener('keydown', handleKeydown, false);
    };
  }, [N, onChange, step]);

  const handleTouchStart = useCallback(
    (e) => {
      if (e.touches && e.touches.length > 1) {
        // the event is multi-touch
        event.preventDefault();
        return;
      }

      if (N <= 1) {
        return;
      }
      setX0(getClientX(e));
      setIsDragging(true);

      hasTouchedRef.current = true;
    },
    [N]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (e.touches && e.touches.length > 1) {
        // the event is multi-touch
        event.preventDefault();
        return;
      }

      if (isDragging) {
        const dx = getClientX(e) - x0;
        if (step === 0) {
          // first slide, prevent to swipe left
          if (dx > 0) {
            return;
          }
        } else if (step === N - 1) {
          // last slide, prevent to swipe right
          if (dx < 0) {
            return;
          }
        }
        setDx(dx);
      }
    },
    [isDragging, x0, N, step]
  );

  const handleTouchEnd = useCallback(
    (e) => {
      if (isDragging) {
        const clientX = getClientX(e);
        if (!Number.isNaN(clientX)) {
          const dx = clientX - x0;
          const nextStep = dx > 0 ? step - 1 : step + 1;

          // only allow to transition slides if we dragged for at least 20%
          const pSlided = Math.abs(dx) / width;

          if (nextStep >= 0 && nextStep < N && pSlided > threshold) {
            onChange(nextStep);
          }
        }

        setIsDragging(false);
        setX0(null);
        setDx(0);
      }
    },
    [isDragging, step, x0, width, onChange, N, threshold]
  );

  // Be sure to catch the end event if the touchend or mouseup happens
  // out of screen
  useEffect(() => {
    window.addEventListener('mouseup', handleTouchEnd, false);
    window.addEventListener('touchend', handleTouchEnd, false);
    return () => {
      window.removeEventListener('mouseup', handleTouchEnd, false);
      window.removeEventListener('touchend', handleTouchEnd, false);
    };
  }, [handleTouchEnd]);

  // prevent page drag when user drag the slider content
  useEffect(() => {
    function preventWindowDrag(e) {
      if (isDragging) {
        e.preventDefault();
      }
    }
    window.addEventListener('touchmove', preventWindowDrag, { passive: false });
    return () => {
      window.removeEventListener('touchmove', preventWindowDrag, {
        passive: false
      });
    };
  }, [isDragging]);

  return (
    <SlideContext.Provider value={((1 - offset * 2) * 100) / N}>
      <div id={id} className={classNames(className, styles.wrapper)} ref={ref}>
        <div
          className={classNames(styles.slider, {
            [styles.noTransition]:
              isDragging ||
              (!hasTouchedRef.current && prevStepRef.current === step)
          })}
          style={{
            transform: `translate(${
              getTranslated(step, width, offset) + dx
            }px)`,
            width: `${N * 100}%`
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
        >
          {children}
        </div>
      </div>
    </SlideContext.Provider>
  );
}

Slider.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  /** the step currently rendered */
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  /** proportion of the next and previous slides that should be visible */
  offset: PropTypes.number,
  /** percentage of a slide that needs to be scrolled to trigger a change */
  threshold: PropTypes.number,
  children: PropTypes.arrayOf(Slide)
};

/**
 * Unify touch and mouse events
 * @param {object} e - a DOM event
 * @return {number} - clientX
 */
function getClientX(e) {
  var clientX;
  if (e) {
    if (e) {
      e = e.changedTouches ? e.changedTouches[0] : e;
      if (e) {
        clientX = e.clientX;
      }
    }
  }
  return clientX;
}

function getTranslated(step, width, offset) {
  return -1 * (step * ((1 - 2 * offset) * width) - offset * width);
}

export function Slide({ children }) {
  const width = useContext(SlideContext);

  return (
    <div
      className={styles.slide}
      style={{
        width: `${width}%`
      }}
    >
      {children}
    </div>
  );
}
Slide.propTypes = {
  children: PropTypes.element
};
