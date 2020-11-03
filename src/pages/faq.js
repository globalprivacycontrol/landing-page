import path from 'path';
import PropTypes from 'prop-types';
import { parseMarkdown } from '../utils/markdown';
import Layout from '../components/layout';
import Article from '../components/article';
import FaqList from '../components/faq-list';

export default function FaqPage({ data, html, sections }) {
  return (
    <Layout title="Frequently Asked Questions | Global Privacy Control">
      <Article title="Frequently Asked Questions">
        <div className="col-11 col-lg-8">
          <FaqList sections={sections} rdfa={true} />
        </div>
      </Article>
    </Layout>
  );
}

FaqPage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  html: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      data: PropTypes.shape({
        title: PropTypes.string.isRequired
      }),
      html: PropTypes.string.isRequired
    })
  ).isRequired
};

export async function getStaticProps(context) {
  const props = await parseMarkdown(
    path.join(process.cwd(), 'content', 'faq.md')
  );

  return { props };
}
