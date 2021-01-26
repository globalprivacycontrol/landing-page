import PropTypes from 'prop-types';
import styles from './featured-organizations.module.css';



export default function FeaturedOrganizations({ entries }) {
    const featured = entries
      .filter(e => e.isFeaturedIndex != null)
      .slice(0, 10)
      .sort();
  
    return (
        <div className="orgs__list row row-cols-2 row-cols-md-5 align-items-stretch justify-content-center">
        
        {featured.map(({ url, img, name }) => (
            <div className="col text-center" key={name}>
            <a href={url} className={styles.orgLogo}>
                <img
                src={`${process.env.publicPrefix}${img}`}
                alt={`${name} logo`}
                />
            </a>
            </div>
        ))}
        </div>
    );
  }
  
  
FeaturedOrganizations.propTypes = {
    entries: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          img: PropTypes.string,
          type: PropTypes.string.isRequired,
          isFeaturedIndex: PropTypes.int,
      })
    ).isRequired
  };
  
