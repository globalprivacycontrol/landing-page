import path from 'path';
import PropTypes from 'prop-types';
import { parseMarkdown } from '../utils/markdown';
import Layout from '../components/layout';
import Article from '../components/article';
import BrowsersPlugins from '../components/browsers-plugins';
import OrgList from '../components/org-list';
import OrgsHeader from '../components/orgs-header';
import styles from './orgs.module.css';

export default function OrgsPage({
  data: { title, headerText, entries } = {},
  sections
}) {
  const Business = entries.filter((e) => e.type == 'Business' || e.inOrganizations == true);
  return (
    <Layout title="Founding Organizations | Global Privacy Control">
      <Article title={title}>
        <div className="container">
          <section className="row justify-content-center text-center">
            <div className="col-10">
              <p className={` ${styles.sectionText} mb-5`}>{headerText}</p>
            </div>
          </section>

          <section className="row justify-content-center">
            <OrgsHeader
              section={sections.filter((e) => e.key == 'Browsers')[0].data}
            />
            <div className="col-9 pb-3">
              <BrowsersPlugins entries={entries} />
            </div>
          </section>

          <section className="row justify-content-center">
            <OrgsHeader
              section={sections.filter((e) => e.key == 'Business')[0].data}
            />
            <div className="col-9 pb-3" id="Business">
              <OrgList entries={Business} type="Business" />
            </div>
          </section>

        </div>
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
        browser_img: PropTypes.string,
        type: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  sections: PropTypes.array.isRequired
};

export async function getStaticProps(context) {
  const props = await parseMarkdown(
    path.join(process.cwd(), 'content', 'orgs.md')
  );

  return { props };
}
