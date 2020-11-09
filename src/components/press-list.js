import PropTypes from 'prop-types';
import styles from './press-list.module.css';

export default function PressList({ entries }) {
  return (
    <ul className={`${styles.list}`}>
      {entries.map(({ datePublished, title, contentUrl, source }) => (
        <li key={contentUrl} className="position-relative text-nowrap">
          <div className={`${styles.left} text-left pl-0`}>{datePublished}</div>
          <div className={`${styles.desc} text-truncate`}>
            <a className="stretched-link" href={contentUrl}>
              {title}
            </a>
          </div>
          <div className={`${styles.date} text-right pr-0`}>{source}</div>
        </li>
      ))}
    </ul>
  );
}

PressList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      datePublished: PropTypes.string.isRequired,
      contentUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      isFeaturedIndex: PropTypes.number,
      img: PropTypes.string
    })
  ).isRequired
};
