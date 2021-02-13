import path from 'path';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Home from '../components/home';
import { parseMarkdown } from '../utils/markdown';

export default function HomePage({
  pressData,
  faqData,
  orgsData,
  downloadsData,
  testimonialsData,
}) {
  return (
    <Layout header={false}>
      <Home
        pressData={pressData}
        faqData={faqData}
        orgsData={orgsData}
        downloadsData={downloadsData}
        testimonialsData={testimonialsData}
      />
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
          img: PropTypes.string,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  faqData: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    html: PropTypes.string,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        data: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
        html: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  orgsData: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      entries: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
  downloadsData: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      entries: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
  testimonialsData: PropTypes.shape({
    data: PropTypes.shape({
      entries: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          position: PropTypes.string.isRequired,
          quote: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

export async function getStaticProps(context) {
  const faqData = await parseMarkdown(
    path.join(process.cwd(), 'content', 'faq.md')
  );
  const pressData = await parseMarkdown(
    path.join(process.cwd(), 'content', 'press.md')
  );
  const orgsData = await parseMarkdown(
    path.join(process.cwd(), 'content', 'orgs.md')
  );

  const downloadsData = await parseMarkdown(
    path.join(process.cwd(), 'content', 'downloads.md')
  );
  const testimonialsData = await parseMarkdown(
    path.join(process.cwd(), 'content', 'testimonials.md')
  );

  return {
    props: { faqData, pressData, orgsData, downloadsData, testimonialsData },
  };
}
