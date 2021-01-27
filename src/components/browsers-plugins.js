import PropTypes from 'prop-types';
import styles from './browsers-plugins.module.css';

export default function BrowsersPlugins({ entries }) {
  const browsersPlugins = entries
    .filter(e => e.type == 'Downloadable')
    // .sort((a, b) => {
    //   return a.isFeaturedIndex - b.isFeaturedIndex;
    // });

  return (
    <ul className={styles.list}>
      {browsersPlugins.map(({ name, url, browser_img }) => (
        <li key={name}>
          <a href={url}>
            <span>
              <img
                src={`${process.env.publicPrefix}${browser_img}`}
                alt={`logo for ${name}`}
              />
            </span>
            <span>
              <span>Download</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

BrowsersPlugins.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        img: PropTypes.string,
        browser_img: PropTypes.string,
        type: PropTypes.string.isRequired,
    })
  ).isRequired
};
