import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/legacy.scss';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="referrer" content="no-referrer-when-downgrade" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.publicPrefix}/img/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.publicPrefix}/img/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.publicPrefix}/img/favicon/favicon-16x16.png`}
        />

        <link
          rel="manifest"
          href={`${process.env.publicPrefix}/site.webmanifest`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object
};

export default MyApp;
