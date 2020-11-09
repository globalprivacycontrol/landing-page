import React from 'react';
import PropTypes from 'prop-types';
import styles from './visually-hidden.module.css';

/**
 * Helper for accessibility (children can be read by screen reader but are not visible)
 */
export default function VisuallyHidden({ children, ...others }) {
  return (
    <span className={styles.hidden} {...others}>
      {children}
    </span>
  );
}

VisuallyHidden.propTypes = {
  children: PropTypes.any
};
