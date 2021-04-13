import PropTypes from 'prop-types';
import styles from './orgs-header.module.css';

export default function OrgsHeader({ section }) {
  return (
    <div className={`${styles.sectionTitle} col-10 text-center py-4`}>
      <header>
        <h2>
          {section.green}
          <span> {section.gray}</span>
        </h2>
      </header>
    </div>
  );
}

OrgsHeader.propTypes = {
  section: PropTypes.shape({
    green: PropTypes.string.isRequired,
    gray: PropTypes.string
  })
};
