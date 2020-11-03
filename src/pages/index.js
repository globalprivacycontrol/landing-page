import path from 'path';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Home from '../components/home';
import { parseMarkdown } from '../utils/markdown';

export default function HomePage({ pressData, faqData }) {
  return (
    <Layout header={false}>
      <Home pressData={pressData} faqData={faqData} />
    </Layout>
  );
}

HomePage.propTypes = {
  pressData: PropTypes.shape({
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
  }).isRequired,
  faqData: PropTypes.shape({
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
  }).isRequired
};

export async function getStaticProps(context) {
  const faqData = await parseMarkdown(
    path.join(process.cwd(), 'content', 'faq.md')
  );
  const pressData = await parseMarkdown(
    path.join(process.cwd(), 'content', 'press.md')
  );

  return { props: { faqData, pressData } };
}
