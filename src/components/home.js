import PropTypes from 'prop-types';
import Link from 'next/link';
import Navbar from './navbar';
import Button from './button';
import FaqList from './faq-list';
import styles from './home.module.css';
import FeaturedArticles from './featured-articles';
import VisuallyHidden from './visually-hidden';

export default function Home({ pressData, faqData }) {
  return (
    <>
      {/* <!-- HERO SECTION --> */}
      <section className="hero-background">
        <header className="container">
          <Navbar isLarge={true} />
        </header>

        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7">
                <h1 className="hero__title">Take Control Of Your Privacy</h1>
                <p className="hero__text">
                  Exercising privacy rights more simply is critical to making
                  online privacy accessible to all.
                </p>

                {/* <!-- HERO BUTTONSs --> */}
                <div className="row hero__btns">
                  <div className="col-sm-12 col-md-6 mb-5 mb-lg-0">
                    <a
                      className="hero__btn hero__btn--primary bg-white"
                      href="#download"
                    >
                      Download Now
                    </a>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <a
                      className="hero__btn hero__btn--secondary bg-transparent"
                      href="#contact"
                    >
                      Get Involved
                    </a>
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
      {/* <!-- Use className `news--light` for light background --> */}
      <section className="news news--dark py-5 px-3 px-sm-4">
        <div className="news__announcement">
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
                <Link href="/press-release/20201007">
                  <a>
                    <u>Read the Global Privacy Control press release.</u>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*<!-- ABOUT SECTION --> */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__cards row row-cols-1 row-cols-lg-3">
            <div className="col">
              <div className="card h-100 text-center border-0">
                <img
                  src={`${process.env.publicPrefix}/img/turn-on-gpc.svg`}
                  className="card-img-top"
                  alt="Turn On GPC placeholder"
                />
                <div className="card-body">
                  <h2 className="card-title">Turn On GPC</h2>
                  <p className="card-text">
                    Enable Global Privacy Control to communicate your privacy
                    preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 text-center border-0">
                <img
                  src={`${process.env.publicPrefix}/img/browser-fights-for-you.svg`}
                  className="card-img-top"
                  alt="Turn On GPC placeholder"
                />
                <div className="card-body">
                  <h2 className="card-title">Let Businesses Know</h2>
                  <p className="card-text">
                    Your browser will then send the GPC signal to websites you
                    visit, indicating your privacy choices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 text-center border-0">
                <img
                  src={`${process.env.publicPrefix}/img/live-more-privately.svg`}
                  className="card-img-top"
                  alt="Turn On GPC placeholder"
                />
                <div className="card-body">
                  <h2 className="card-title">Exercise Your Rights</h2>
                  <p className="card-text">
                    Participating websites that adopt this mechanism can then
                    respect your privacy rights accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- HORIZONTAL DIVIDER --> */}
        <div className="about-sec-2">
          <img
            src={`${process.env.publicPrefix}/img/divider-lines.svg`}
            className="about__divider"
            alt="dividing placeholder"
          />
        </div>

        <div className="about-sec-3">
          <div className="container text-lg-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="about__text section__text">
                  <p>
                    You might have noticed “Do Not Sell” and “Object To
                    Processing” links around the web from companies complying
                    with privacy regulations. Rather than having to click on
                    each of these links individually across many websites, you
                    can exercise your rights in one step via the “Global Privacy
                    Control” (GPC) signal, which is required under the
                    California Consumer Protection Act (CCPA) and Europe’s
                    Global Data Protection Regulation (GDPR).
                  </p>
                  <br />
                  <p className="font-weight-bolder">
                    Together, over a dozen organizations are developing the GPC
                    specification.{' '}
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
      <section id="gpc-spec" className="gpc section section--dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <p className="section__title">
                The Global Privacy Control (GPC) specification describes how to
                implement a browser mechanism to help users signal their desired
                privacy to websites and services.
              </p>
              <p className="section__text">
                Right now the GPC signal is not a finalized standard, but it is
                already available to users as part of several major browsers and
                extensions and is respected by several major websites (see
                below). The GPC signal will be intended to communicate a Do Not
                Sell request from a global privacy control, as per
                <a
                  className="font-weight-bold"
                  href="https://www.oag.ca.gov/sites/all/files/agweb/pdfs/privacy/oal-sub-final-text-of-regs.pdf"
                >
                  <u>CCPA-REGULATIONS §999.315</u>
                </a>
                for that browser or device, or, if known, the consumer. Under
                the GDPR, the intent of the GPC signal is to convey a general
                request that data controllers limit the sale or sharing of the
                user’s personal data to other data controllers (
                <a
                  className="font-weight-bold"
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679"
                >
                  <u>GDPR Articles 7 & 21</u>
                </a>
                ). Over time, the GPC signal may be intended to communicate
                rights in other jurisdictions.
              </p>
              <div className="gpc__btn-wrap">
                <a
                  className="hero__btn text-uppercase"
                  href="https://globalprivacycontrol.github.io/gpc-spec/"
                >
                  View Full Spec
                </a>
                <a
                  className="hero__btn hero__btn--wire text-uppercase mt-4"
                  href="https://global-privacy-control.glitch.me/"
                >
                  Test against the reference server
                </a>
              </div>
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

      {/* <!-- PARTICIPATING ORGS SECTION --> */}
      <section id="orgs" className="orgs section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg -5">
              <h2 className="section__title">Participating Organizations</h2>
              <p className="section__text">
                The following organizations are in support of or have
                implemented the GPC specification.
              </p>
            </div>
            <div className="offset-lg-1 col-12 col-lg-6">
              <div className="orgs__list row row-cols-2 row-cols-md-3 align-items-stretch no-gutters justify-content-center">
                <div className="col text-center">
                  <a href="https://www.abine.com/" className="orgs__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/abine.svg`}
                      alt="Abine logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a href="https://automattic.com/" className="orgs__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/automattic.svg`}
                      alt="Automattic logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a
                    href="https://brave.com/global-privacy-content/"
                    className="orgs__logo"
                  >
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/brave.svg`}
                      alt="Brave logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a
                    href="https://advocacy.consumerreports.org/issue/tech-privacy/"
                    className="orgs__logo"
                  >
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/cr.svg`}
                      alt="Consumer Reports logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a href="https://disconnect.me/" className="orgs__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/disconnect.svg`}
                      alt="Disconnect logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a
                    href="https://digitalcontentnext.org/"
                    className="orgs__logo"
                  >
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/dcn.svg`}
                      alt="Digital Content Next logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a
                    href="https://spreadprivacy.com/announcing-global-privacy-control/"
                    className="orgs__logo"
                  >
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/duckduckgo-vertical.svg`}
                      alt="DuckDuckGo logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a href="https://www.eff.org" className="orgs__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/eff.svg`}
                      alt="EFF logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a href="https://www.ft.com/" className="orgs__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/ft.svg`}
                      alt="Financial Times logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a href="https://glitch.com" className="orgs__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/glitch.svg`}
                      alt="Glitch logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a href="https://mozilla.org" className="orgs__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/mozilla.svg`}
                      alt="Mozilla logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a href="https://www.nytimes.com/" className="orgs__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/nyt.svg`}
                      alt="New York Times logo"
                    />
                  </a>
                </div>
                <div className="col text-center">
                  <a
                    href="https://www.washingtonpost.com/"
                    className="orgs__logo"
                  >
                    <img
                      src={`${process.env.publicPrefix}/img/participating-logos/washington-post.svg`}
                      alt="Washington Post logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- DOWNLOAD SECTION --> */}
      <section id="download" className="download section section--dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div>
                <h2 className="section__title">
                  Get your privacy rights under control.
                </h2>
                <p className="section__text">
                  Download one of these participating browsers or extensions to
                  communicate your Global Privacy Preferences to participating
                  websites.
                </p>
              </div>
            </div>

            {/* <!-- DOWNLOAD TABLE --> */}
            <div className="offset-lg-1 col-12 col-lg-6">
              <ul className="download__table">
                <li className="position-relative">
                  <div className="table__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/download-logos/abine.png`}
                      alt="Abine logo"
                    />
                  </div>
                  <div className="table__desc">Abine</div>
                  <div className="table__link">
                    <a
                      className="stretched-link"
                      href="https://www.abine.com/blog/2020/online-privacy-leaders-launch-gpc-global-privacy-control-standard/"
                    >
                      LEARN MORE <VisuallyHidden>about Abine</VisuallyHidden>
                    </a>
                  </div>
                </li>
                <li className="position-relative">
                  <div className="table__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/download-logos/brave.png`}
                      alt="Brave logo"
                    />
                  </div>
                  <div className="table__desc">Brave Privacy Browser</div>
                  <div className="table__link">
                    <a
                      className="stretched-link"
                      href="https://brave.com/global-privacy-content/"
                    >
                      LEARN MORE{' '}
                      <VisuallyHidden>
                        about Brave Privacy Browser
                      </VisuallyHidden>
                    </a>
                  </div>
                </li>
                <li className="position-relative">
                  <div className="table__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/download-logos/disconnect.png`}
                      alt="Disconnect logo"
                    />
                  </div>
                  <div className="table__desc">Disconnect</div>
                  <div className="table__link">
                    <a className="stretched-link" href="https://disconnect.me/">
                      LEARN MORE{' '}
                      <VisuallyHidden>about Disconnect</VisuallyHidden>
                    </a>
                  </div>
                </li>
                <li className="position-relative">
                  <div className="table__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/download-logos/duckduckgo.png`}
                      alt="DuckDuckGo logo"
                    />
                  </div>
                  <div className="table__desc">DuckDuckGo Privacy Browser</div>
                  <div className="table__link">
                    <a
                      className="stretched-link"
                      href="https://spreadprivacy.com/announcing-global-privacy-control/"
                    >
                      LEARN MORE{' '}
                      <VisuallyHidden>
                        about DuckDuckGo Privacy Browser
                      </VisuallyHidden>
                    </a>
                  </div>
                </li>
                <li className="position-relative">
                  <div className="table__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/download-logos/optmeowt.png`}
                      id="optmeowt-logo"
                      alt="OptMeOwt logo"
                    />
                  </div>
                  <div className="table__desc">
                    OptMeowt by privacy-tech-lab
                  </div>
                  <div className="table__link">
                    <a
                      className="stretched-link"
                      href="https://privacytechlab.org/optmeowt"
                    >
                      LEARN MORE{' '}
                      <VisuallyHidden>
                        about OptMeowt by privacy-tech-lab
                      </VisuallyHidden>
                    </a>
                  </div>
                </li>
                <li className="position-relative">
                  <div className="table__logo">
                    <img
                      src={`${process.env.publicPrefix}/img/download-logos/badger.png`}
                      alt="Privacy Badger logo"
                    />
                  </div>
                  <div className="table__desc">Privacy Badger by EFF</div>
                  <div className="table__link">
                    <a
                      className="stretched-link"
                      href="https://privacybadger.org"
                    >
                      LEARN MORE{' '}
                      <VisuallyHidden>Privacy Badger by EFF</VisuallyHidden>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div id="press" className="container">
          <h2 className="section__title text-center">
            Featured Press & Announcements
          </h2>

          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <FeaturedArticles entries={pressData.data.entries} />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Link href="/press" passHref>
              <Button as="a" variant="primary" className={styles.bottomButton}>
                View All
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div id="faq" className="container">
          <h2 className="section__title text-center">{faqData.data.title}</h2>

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
            <Link href="/faq" passHref>
              <Button as="a" variant="primary" className={styles.bottomButton}>
                View All
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
  }).isRequired
};
