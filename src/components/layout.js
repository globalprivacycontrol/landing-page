import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './layout.module.css';
import Navbar from './navbar';
import StatusBar from './status-bar';

export default function Layout({
  title = 'Global Privacy Control — Take Control Of Your Privacy',
  description = 'Exercise your privacy rights in one step via the “Global Privacy Control” (GPC) signal, a proposed specification backed by over a dozen organizations.',
  children,
  header = true
}) {
  const router = useRouter();

  return (
    <div>
      <Head>
        {/* <!-- PRIMARY META TAGS --> */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://globalprivacycontrol.org${router.pathname}`}
        />

        {/* <!-- OPEN GRAPH / FACEBOOK --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://globalprivacycontrol.org${router.pathname}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${process.env.publicPrefix}/img/gpc-social-big.jpg`}
        />

        {/* <!-- TWITTER --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`https://globalprivacycontrol.org${router.pathname}`}
        />
        <meta
          name="twitter:title"
          content="Global Privacy Control — Take Control Of Your Privacy"
        />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${process.env.publicPrefix}/img/gpc-social-big.jpg`}
        />
        <meta name="twitter:site" content="@globalprivcntrl" />
        <meta name="twitter:creator" content="@globalprivcntrl" />
      </Head>

      {/* <!-- GPC STATUS --> */}
      <aside>
        <StatusBar />
      </aside>

      {header && (
        <header className={styles.header}>
          <div className="container">
            <div className="row no-gutters justify-content-center">
              <div className={`col-12 ${styles.navWrapper}`}>
                <Navbar />
              </div>
            </div>
          </div>
        </header>
      )}

      <main>{children}</main>

      {/* <!-- CONTACT SECTION --> */}
      <section id="contact" className={`${styles.contact} text-center`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <h1>Get Involved</h1>

              <p>
                Contact us to learn more about becoming a participating
                organization and supporting GPC on your browser, app, or website.
              </p>
              <a
                className="d-block"
                href="mailto:info@globalprivacycontrol.org"
              >
                info@globalprivacycontrol.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FOOTER --> */}
      <footer className={styles.footer}>
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <p className="mb-0">
                This site is hosted by <a href="https://github.com">GitHub</a>{' '}
                and is subject to its{' '}
                <a href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-terms-of-service">
                  Terms of Service
                </a>
                .
              </p>
              <p className="mb-0">
                Content on this site is licensed under a Creative Commons
                Attribution 4.0 International license. This license does not
                apply to any logos or marks on this site.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
  header: PropTypes.bool
};
