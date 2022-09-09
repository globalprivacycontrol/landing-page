import path from 'path';
import PropTypes from 'prop-types';
import { parseMarkdown } from '../utils/markdown';
import { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Button from '../components/button';
import FaqList from '../components/faq-list';
import styles from '../components/implementation.module.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default function ImplementationPage({ data, html, sections }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hljs.highlightAll();
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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
      {/* <!-- WHAT'S GOING ON SECTION --> */}
      <section className={styles.whatsGoingOn}>
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12">
              <h2>What's going on?</h2>
              <p className={styles.introText}>
                The California Attorney General’s Office has <a href="https://www.loeb.com/en/insights/publications/2021/07/global-privacy-control-consumer-led-enforcement">begun to enforce</a> the California Consumer Privacy Act (CCPA) and stated that sites need to comply with the <a href="https://globalprivacycontrol.org/">Global Privacy Control (GPC)</a> when it is used to state a Do Not Sell preference. According to <a href="https://oag.ca.gov/privacy/ccpa">the CA Attorney General’s website</a>: 
              </p>
            </div>
          </div>
          <div className={`row ${styles.agRow}`}>
            <div className="col-sm-12 col-md-5 col-lg-4">
              <img
                src={`${process.env.publicPrefix}/img/bonta@3x.jpg`}
                className={`${styles.agImage}`}
                alt="photo of California AG Rob Bonta"
              />
            </div>
            <div className={`col-sm-12 col-md-7 col-lg-8 ${styles.agQuoteWrapper}`}>
              <div className={`${styles.agQuote}`}>
                <p>
                  "Opting out of the sale of personal information should be easy for consumers, and the GPC is one option for consumers who want to submit requests to opt-out of the sale of personal information via a user-enabled global privacy control. <b>Under law, it must be honored by covered businesses as a valid consumer request to stop the sale of personal information.</b>"
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12">
              <p className={styles.summaryText}>
                This means that when a site must comply with CCPA, it must also parse and respect the GPC signal as another way users can opt out of the use of their personal data for a sale. Colorado and Connecticut have also passed legislation mandating compliance with global privacy signals, though those laws have not yet gone into effect.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.implementationAccordion}>
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12">
              <FaqList sections={sections} rdfa={false} />
            </div>
          </div>
        </div>
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
