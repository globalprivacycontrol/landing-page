import path from 'path';
import PropTypes from 'prop-types';
import { parseMarkdown } from '../utils/markdown';
import Link from 'next/link';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Button from '../components/button';
import Article from '../components/article';
import FaqList from '../components/faq-list';
import styles from '../components/implementation.module.css';

export default function ImplementationPage({ data, html, sections }) {
  return (
    <Layout header={false} title="How to Implement Global Privacy Control (GPC) for Publishers">
      {/* <!-- HERO SECTION --> */}
      <section className={styles.heroBackground}>
        <header className="container">
          <Navbar isLarge={true} />
        </header>

        <div className={styles.hero}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7">
                <h1 className={styles.heroTitle}>
                  How to Implement Global Privacy Control (GPC) for Publishers
                </h1>
                {/* <!-- HERO BUTTON --> */}
                <div className={`row ${styles.heroBtns}`}>
                  <div className="col-sm-12 col-md-6 mb-5 mb-lg-0">
                    <Link href={`${process.env.publicPrefix}/Implementing GPC for Publishers.pdf`} passHref>
                      <Button
                        as="a"
                        variant="primaryInverted"
                        className="d-block"
                      >
                        Download as a PDF
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-block col-lg-5">
                <img
                  src={`${process.env.publicPrefix}/img/state-of-california@3x.png`}
                  id="hero-illustration"
                  className={`ml-5 img-fluid ${styles.heroIllustration}`}
                  alt="outline of state of California"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.authors}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <img
                    src={`${process.env.publicPrefix}/img/author_aram@3x.jpg`}
                    className={`${styles.authorImage}`}
                    alt="photo of Aram Zucker-Scharff"
                  />
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <h3>
                    <Link href="https://aramzs.github.io/aramzs" passHref>
                      Aram Zucker-Scharff
                    </Link>
                  </h3>
                  <p>Engineering Lead for Privacy & Security Compliance</p>
                  <Link href="https://www.washingtonpost.com" passHref>
                    The Washington Post
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <img
                    src={`${process.env.publicPrefix}/img/author_seb@3x.jpg`}
                    className={`${styles.authorImage}`}
                    alt="photo of Sebastian Zimmeck"
                  />
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <h3>
                    <Link href="https://www.wesleyan.edu/academics/faculty/szimmeck/profile.html" passHref>
                      Sebastian Zimmeck
                    </Link>
                  </h3>
                  <p>Department of Mathematics and Computer Science</p>
                  <Link href="https://www.wesleyan.edu" passHref>
                    Wesleyan University
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.whatsGoingOn}>
        {/* <!-- IMPLEMENTATION SECTION --> */}
        <FaqList sections={sections} rdfa={true} />
      </section>
    </Layout>
  );
}

ImplementationPage.propTypes = {
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
    path.join(process.cwd(), 'content', 'implementation.md')
  );

  return { props };
}
