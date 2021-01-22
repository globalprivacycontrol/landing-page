import path from 'path';
import PropTypes from 'prop-types';
import { parseMarkdown } from '../utils/markdown';
import Layout from '../components/layout';
import Article from '../components/article';
import PressList from '../components/press-list';
import FeaturedArticles from '../components/featured-articles';
import BrowsersPlugins from '../components/browsers-plugins';
import styles from './orgs.module.css';

export default function OrgsPage({ data: { title, headerText, entries}= {} }) {
  return (
    <Layout title="Participating Organizations | Global Privacy Control">
      <Article title={title}>
        <section className={`${styles.sectionText} col-10 text-center`}>
              <header>
                  <h2>Browsers + Plug-Ins <span>/ Representing XX,XXX,XXX Users</span></h2>
              </header>
          </section>
          
        <section className={`${styles.featured} col-10`}>
          <header>
            <h2>Featured Articles</h2>
          </header>
          <BrowsersPlugins entries={entries} />
        </section>
        <section className="col-10">
          <PressList entries={entries} />
        </section>
      </Article>
    </Layout>
  );
}

OrgsPage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        img: PropTypes.string,
        type: PropTypes.string.isRequired,
      })
    ).isRequired
  }).isRequired
};

export async function getStaticProps(context) {
  const props = await parseMarkdown(
    path.join(process.cwd(), 'content', 'orgs.md')
  );

  return { props };
}
