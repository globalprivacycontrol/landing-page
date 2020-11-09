import PropTypes from 'prop-types';
import styles from './article.module.css';

export default function Article({ title, children, ...others }) {
  return (
    <article className={styles.articleWrapper} {...others}>
      <div className="container">
        <div className={styles.article}>
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="text-center">
                <h1 className="mb-4">{title}</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">{children}</div>
        </div>
      </div>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
};
