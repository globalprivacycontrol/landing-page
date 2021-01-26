import PropTypes from 'prop-types';
import styles from './org-list.module.css';

export default function OrgList({ entries, type }) {
    var isNews = false;
    if (type == "News") {
        isNews = true;
    }
    return (
        <ul className={styles.downloadTable}>
        {entries.map(({ name, url}) => (
          <li key={name} className="position-relative">
            <div className={styles.tableDesc}>{name}</div>
            <div className={styles.tableLink}>
              <a className="stretched-link" href={url}>
                  {!isNews
                ? url.slice(8,-1).toUpperCase()
                : "LEARN MORE"
                }
              </a>
            </div>
          </li>
        ))}
      </ul>
    );
  }



OrgList.propTypes = {
    entries: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          img: PropTypes.string,
          type: PropTypes.string.isRequired,
      })
    ).isRequired
  };
  