import PropTypes from 'prop-types';
import Link from 'next/link';
import Navbar from './navbar';
import Button from './button';
import FaqList from './faq-list';
import FeaturedArticles from './featured-articles';
import VisuallyHidden from './visually-hidden';
import Carousel from './carousel';
import styles from './home.module.css';
import FeaturedOrganizations from './featured-organizations';

export default function Home({
  pressData,
  faqData,
  orgsData,
  downloadsData,
  testimonialsData
}) {
  return (
    <>
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
                  Take control of your privacy.
                </h1>
                <p className={styles.heroText}>
                  Online privacy should be accessible to everyone. It starts
                  with a simpler way to exercise your rights.
                </p>

                {/* <!-- HERO BUTTONSs --> */}
                <div className={`row ${styles.heroBtns}`}>
                  <div className="col-sm-12 col-md-6 mb-5 mb-lg-0">
                    <Link href="/#download" passHref legacyBehavior>
                      <Button
                        as="a"
                        variant="primaryInverted"
                        className="d-block"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <Link href="/#contact" passHref legacyBehavior>
                      <Button
                        as="a"
                        variant="secondaryInverted"
                        className="d-block"
                      >
                        Get Involved
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="d-none d-lg-block col-lg-5">
                <img
                  src={`${process.env.publicPrefix}/img/person-with-computer.svg`}
                  id="hero-illustration"
                  className="ml-5 img-fluid"
                  alt="man sitting at a computer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- NEWS SECTION --> */}
      <section className={`${styles.news} py-5 px-3 px-sm-4`}>
        <div className={styles.newsAnnouncement}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {/*<!-- HORN ICON --> */}
              <span className="p-3">
                <svg
                  width="39"
                  height="28"
                  viewBox="0 0 39 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.556 0.18225C22.8823 -0.0216922 23.2902 -0.0624807 23.6165 0.100673C23.9428 0.304616 24.1468 0.630924 24.1876 0.99802V25.2264C24.1876 25.5935 23.9428 25.9606 23.6165 26.1237C23.4942 26.2053 23.331 26.2461 23.1679 26.2461C22.9639 26.2461 22.7192 26.1645 22.556 26.0422L12.7668 18.6594H10.034L11.4616 26.8171C11.5431 27.1027 11.4616 27.3882 11.2576 27.6329C11.0537 27.8776 10.7682 28 10.4826 28H6.56695C6.07748 28 5.6696 27.6329 5.58802 27.1434L4.11964 18.6594H2.93677C1.30523 18.6594 0 17.3542 0 15.7227V10.5017C0 8.8702 1.30523 7.56497 2.93677 7.56497H12.7668L22.556 0.18225ZM33.9359 2.34379C33.2833 1.73197 32.2636 1.81354 31.6517 2.46616C31.0399 3.11878 31.1215 4.13849 31.7741 4.75031C34.1806 6.87132 35.5266 9.93045 35.5266 13.1527C35.5266 16.3342 34.1398 19.3934 31.7741 21.5552C31.1215 22.167 31.0399 23.1867 31.6517 23.8393C31.978 24.2064 32.4267 24.3696 32.8346 24.3696C33.2017 24.3696 33.6096 24.2472 33.8951 23.9617C36.9542 21.2289 38.7081 17.2724 38.7081 13.1527C38.7489 9.0739 36.995 5.11741 33.9359 2.34379ZM30.2231 6.95259C29.5705 6.34077 28.5507 6.34077 27.9389 6.99338C27.3271 7.646 27.3271 8.66571 27.9797 9.27754C29.0402 10.2972 29.6112 11.6433 29.6112 13.1117C29.6112 14.58 29.0402 15.9261 27.9797 16.9458C27.3271 17.5576 27.3271 18.5773 27.9389 19.2299C28.2652 19.5562 28.6731 19.7194 29.1218 19.7194C29.5297 19.7194 29.9376 19.5562 30.2231 19.2707C31.9362 17.6392 32.8335 15.4366 32.8335 13.1117C32.8335 10.7867 31.8954 8.58413 30.2231 6.95259Z"
                    fill="white"
                  />
                </svg>
              </span>

              <p className="mb-0 py-3 text-center">
                <Link href="/press">Read the Latest Press</Link> and{' '}
                <a
                  href="https://twitter.com/globalprivctrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow @globalprivctrl on Twitter
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*<!-- ABOUT SECTION --> */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={`${styles.aboutCards} row row-cols-1 row-cols-lg-3`}>
            <div className="col">
              <div
                className={`card ${styles.aboutCard} h-100 text-center border-0`}
              >
                <img
                  src={`${process.env.publicPrefix}/img/turn-on-gpc.svg`}
                  className="card-img-top"
                  alt="Turn On GPC placeholder"
                />
                <div className="card-body">
                  <h2 className="card-title">
                    <Link href="/#download" passHref legacyBehavior>
                      Turn On GPC
                    </Link>
                  </h2>

                  <p className="card-text">
                    Enable Global Privacy Control to communicate your privacy
                    preference.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className={`card ${styles.aboutCard} h-100 text-center border-0`}
              >
                <img
                  src={`${process.env.publicPrefix}/img/browser-fights-for-you.svg`}
                  className="card-img-top"
                  alt="Turn On GPC placeholder"
                />
                <div className="card-body">
                  <h2 className="card-title">Send the Signal</h2>
                  <p className="card-text">
                    Your browser or app will send the GPC signal across the web
                    and supported mobile and smart platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className={`card ${styles.aboutCard} h-100 text-center border-0`}
              >
                <img
                  src={`${process.env.publicPrefix}/img/live-more-privately.svg`}
                  className="card-img-top"
                  alt="Turn On GPC placeholder"
                />
                <div className="card-body">
                  <h2 className="card-title">Exercise Your Rights</h2>
                  <p className="card-text">
                    Participating websites can respect your privacy rights
                    accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- HORIZONTAL DIVIDER --> */}
        <div className={styles.aboutSec2}>
          <img
            src={`${process.env.publicPrefix}/img/divider-lines.svg`}
            alt="dividing placeholder"
          />
        </div>

        <div className="about-sec-3">
          <div className="container text-lg-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className={`${styles.aboutText} ${styles.sectionText}`}>
                  <p>
                    You may have noticed “Do Not Sell” and “Object To
                    Processing” links around the web from companies complying
                    with privacy regulations. To opt out of websites selling or
                    sharing your personal information, you need to click these
                    links for every site you visit.
                  </p>
                  <p>
                    Now you can exercise your legal privacy rights in one step
                    via <a href="#download">Global Privacy Control (GPC)</a>,
                    required under state privacy laws such as the California
                    Consumer Privacy Act (CCPA).
                  </p>

                  <p className="font-weight-bolder">
                    Together, over a dozen organizations are developing the{' '}
                    <a href="https://w3c.github.io/gpc/">
                      <u>GPC specification</u>
                    </a>
                    .{' '}
                    <a href="#contact">
                      <u>Get Involved</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<!-- GPC SPEC SECTION --> */}
      <section
        id="gpc-spec"
        className={`${styles.section} ${styles.sectionDark}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <h2 className={styles.sectionTitle}>
                GPC lets users signal their desired privacy, just by browsing.
              </h2>

              <div className={styles.sectionText}>
                <p>
                  GPC is available as part of several major browsers,
                  extensions, apps, and websites, and applies regardless of the
                  tracking technology used (e.g., cookies, device identifiers,
                  or fingerprinting).
                </p>
              </div>

              <div>
                <Button
                  as="a"
                  variant="primary"
                  className="d-block"
                  href="https://w3c.github.io/gpc/"
                >
                  View Full Spec
                </Button>

                <Button
                  as="a"
                  variant="secondary"
                  className="d-block mt-4"
                  href="https://global-privacy-control.vercel.app/"
                >
                  Test against the reference server
                </Button>
              </div>

              <p className={styles.finePrint}>
                <small>
                  The GPC signal is intended to communicate a Do Not Sell or
                  Share request under the California Consumer Privacy Act, and
                  similar state privacy laws that allow users to opt out of data
                  sales or the use of their data for cross-context targeted
                  advertising. Under the GDPR and other opt-in consent
                  frameworks, the intent of the GPC signal is to convey a lack
                  of consent or an objection to data processing, such as a
                  general request that data controllers limit the sale or
                  sharing of the user's personal data to other data controllers
                  (
                  <a
                    className="font-weight-bold"
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679"
                  >
                    <u>GDPR Articles 7 & 21</u>
                  </a>
                  ). The GPC may also invoke other compatible rights in other
                  jurisdictions. The precise legal meaning and effect of GPC is
                  determined by applicable regulators in each jurisdiction.
                </small>
              </p>
            </div>
            <div className="d-none d-lg-block offset-lg-1 col">
              <img
                src={`${process.env.publicPrefix}/img/wifi.svg`}
                className="img-fluid desktop-illustration"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.carouselWrapper}>
                <Carousel
                  items={testimonialsData.data.entries}

                  // {Array.from({ length: 5 }, (_, i) => ({
                  //   name: `Person ${i}`,
                  //   url: `https://example.com/${i}`,
                  //   quote:
                  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet suscipit orci, sit amet sodales risus. Aliquam tristique hendrerit hendrerit. Ut sit amet rhoncus ipsum. Donec semper, eros at volutpat facilisis, dolor mi aliquam tortor, nec vulputate nibh felis sit amet ipsum. Donec lacinia lacus ac nibh tempor sagittis. Suspendisse et elit ullamcorper, mattis orci et, suscipit eros. Suspendisse eget convallis libero. Phasellus mattis luctus ante, vitae sagittis risus tempor suscipit. Suspendisse at tempor felis. Sed id risus nec lectus congue luctus ut id ipsum.',
                  //   img: '/img/participating-logos/abine.svg',
                  //   position: 'Former CA Attorney General',
                  // }))}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- DOWNLOAD SECTION --> */}
      <section
        id="download"
        className={`${styles.section} ${styles.sectionDark}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div>
                <h2 className={styles.sectionTitle}>
                  {downloadsData.data.title}
                </h2>
                <div
                  className={` ${styles.sectionText} mb-5`}
                  dangerouslySetInnerHTML={{ __html: downloadsData.html }}
                />
              </div>
              <div className="d-flex mt-0 mb-4">
                <Link href="/orgs" passHref legacyBehavior>
                  <Button
                    as="a"
                    variant="primary"
                    className={styles.bottomButton}
                  >
                    View All Downloads
                  </Button>
                </Link>
              </div>
            </div>

            {/* <!-- DOWNLOAD TABLE --> */}
            <div className="offset-lg-1 col-12 col-lg-6">
              <ul className={styles.downloadTable}>
                {downloadsData.data.entries.map(({ name, url, img }) => (
                  <li key={name} className="position-relative">
                    <div className={styles.tableLogo}>
                      <img
                        src={`${process.env.publicPrefix}${img}`}
                        alt={`${name} logo`}
                      />
                    </div>
                    <div className={styles.tableDesc}>{name}</div>
                    <div className={styles.tableLink}>
                      <a
                        className={` ${styles.tableLink} stretched-link`}
                        href={url}
                      >
                        LEARN MORE <VisuallyHidden>about {name}</VisuallyHidden>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- PARTICIPATING ORGS SECTION --> */}
      <section id="orgs" className={` ${styles.section} `}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>
            {orgsData.data.title}
          </h2>
          <div
            className={`${styles.sectionText} text-center mb-5`}
            dangerouslySetInnerHTML={{ __html: orgsData.html }}
          />
          <div className="row">
            <div className="col-12">
              <FeaturedOrganizations entries={orgsData.data.entries} />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link href="/orgs#Business" passHref legacyBehavior>
              <Button as="a" variant="primary" className={styles.bottomButton}>
                View All Organizations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- PRESS SECTION --> */}
      <section className={` ${styles.section} ${styles.sectionDark}`}>
        <div id="press" className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>
            Featured Press & Announcements
          </h2>

          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <FeaturedArticles entries={pressData.data.entries} />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Link href="/press" passHref legacyBehavior>
              <Button as="a" variant="primary" className={styles.bottomButton}>
                View More Press
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- FAQ SECTION --> */}
      <section className={`${styles.section}`}>
        <div id="faq" className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>
            {faqData.data.title}
          </h2>

          <div className="row justify-content-center mt-5">
            <div className="col-12 col-lg-8">
              <FaqList
                hx="h3"
                sections={faqData.sections}
                isDark={true}
                nRendered={6}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Link href="/faq" passHref legacyBehavior>
              <Button as="a" variant="primary" className={styles.bottomButton}>
                View All FAQ
                <span style={{ textTransform: 'lowercase' }}>s</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

Home.propTypes = {
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
  }).isRequired,
  orgsData: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      entries: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired,
    html: PropTypes.string.isRequired
  }).isRequired,
  downloadsData: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      entries: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired,
    html: PropTypes.string.isRequired
  }).isRequired,
  testimonialsData: PropTypes.shape({
    data: PropTypes.shape({
      entries: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          position: PropTypes.string.isRequired,
          quote: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired,
    html: PropTypes.string.isRequired
  }).isRequired
};
