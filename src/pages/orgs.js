import path from 'path';
import PropTypes from 'prop-types';
import { parseMarkdown } from '../utils/markdown';
import Layout from '../components/layout';
import Article from '../components/article';
import PressList from '../components/press-list';
import FeaturedArticles from '../components/featured-articles';
import BrowsersPlugins from '../components/browsers-plugins';
import OrgList from '../components/org-list';
import styles from './orgs.module.css';

export default function OrgsPage({ data: { title, headerText, entries}= {} }) {
  const partners = entries
    .filter(e => e.type == 'Partner');
  const news = entries
    .filter(e => e.type == 'News');
  return (

    <Layout title="Participating Organizations | Global Privacy Control">
      <Article title={title}>
          <section >
            <div className="row justify-content-center text-center">
              <div className="col-10">
                <p className={` ${styles.sectionText} mb-5`}>
                    {headerText}
                </p>
                </div>
              </div>
          </section>
          
        <section className={`${styles.sectionTitle} col-10 text-center py-4`}>
              <header>
                  <h2>Browsers + Plug-Ins <span>/ Representing XX,XXX,XXX Users</span></h2>
              </header>
          </section>
          
        <section className={`${styles.featured} col-9 py-4`}>
          <BrowsersPlugins entries={entries} />
        </section>

        <section className={`${styles.sectionTitle} col-9 text-center pt-5 pb-3`} id="news">
              <header>
                  <h2>News + Publications <span>/ Representing XX,XXX,XXX Users</span></h2>
              </header>
          </section>
        <section className="col-9 py-3" >
          <OrgList entries={news} type="News"/>
        </section>


        <section className={`${styles.sectionTitle} col-9 text-center pt-5 pb-3`} id="partners">
              <header>
                  <h2>Supporting Partners</h2>
              </header>
          </section>

        
        <section className="col-9 py-3" >
          <OrgList entries={partners} type="Partners"/>
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
