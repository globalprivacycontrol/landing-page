import PropTypes from 'prop-types';
import styles from './press-release.module.css';

export default function PressRelease({ children }) {
  return <div className={styles.pressRelease}>{children}</div>;
}

PressRelease.propTypes = {
  children: PropTypes.any
};
