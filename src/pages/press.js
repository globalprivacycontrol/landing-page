import path from 'path';
import PropTypes from 'prop-types';
import { parseMarkdown } from '../utils/markdown';
import Layout from '../components/layout';
import Article from '../components/article';
import PressList from '../components/press-list';
import FeaturedArticles from '../components/featured-articles';
import styles from './press.module.css';

export default function PressPage({ data: { title, entries } = {} }) {
  return (
    <Layout title="Press & Announcements | Global Privacy Control">
      <Article title={title}>
        <section className={`${styles.featured} col-10`}>
          <header>
            <h2>Featured Articles</h2>
          </header>
          <FeaturedArticles entries={entries} />
        </section>
        <section className="col-10">
          <PressList entries={entries} />
        </section>
      </Article>
    </Layout>
  );
}

PressPage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
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
  }).isRequired
};

export async function getStaticProps(context) {
  const props = await parseMarkdown(
    path.join(process.cwd(), 'content', 'press.md')
  );

  return { props };
}
