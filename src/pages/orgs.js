import path from 'path';
import PropTypes from 'prop-types';
import { parseMarkdown } from '../utils/markdown';
import Layout from '../components/layout';
import Article from '../components/article';
import PressList from '../components/press-list';
import FeaturedArticles from '../components/featured-articles';
import BrowsersPlugins from '../components/browsers-plugins';
import OrgList from '../components/org-list';
import OrgsHeader from '../components/orgs-header';
import styles from './orgs.module.css';

export default function OrgsPage({ data: { title, headerText, entries}= {}, sections }) {
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
          
        <OrgsHeader section={sections.filter(e => e.key == 'Browsers')[0].data}/>
        <section className={`${styles.featured} col-9 pb-3`}>
          <BrowsersPlugins entries={entries} />
        </section>

        <OrgsHeader section={sections.filter(e => e.key == 'News')[0].data}/>
        <section className="col-9 pb-3" >
          <OrgList entries={news} type="News"/>
        </section>


        <OrgsHeader section={sections.filter(e => e.key == 'Partners')[0].data}/>
        <section className="col-9 pb-3" >
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
