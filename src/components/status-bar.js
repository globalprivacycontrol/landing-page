import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './status-bar.module.css';

export default function StatusBar() {
  const [hasGpc, setHasGpc] = useState(undefined);

  useEffect(() => {
    setHasGpc(!!navigator.globalPrivacyControl);
  }, []);

  if (hasGpc === undefined) {
    return null;
  }

  return (
    <div className={`${styles.statusBar} py-1 px-3 px-sm-4`}>
      <div className="container">
        <div className="row justify-content-center align-items-center py-3">
          <div className="text-center">
            <span
              className={`${styles.dot} ${
                hasGpc ? styles.dotGreen : styles.dotRed
              } d-inline-block status-dot rounded-circle mr-2`}
              style={{
                backgroundColor: hasGpc ? '#058A5E' : 'de0000'
              }}
            ></span>
            <span className="mb-0 text-center">
              {hasGpc ? (
                <>
                  Good news, GPC signal detected.
                  <br />
                  Click{' '}
                  <a href="https://global-privacy-control.glitch.me">here</a> to
                  test against the reference server.
                </>
              ) : (
                <>
                  GPC signal not detected.
                  <br />
                  Download a{' '}
                  <Link href="/#download">
                    <a>browser or extension</a>
                  </Link>{' '}
                  that supports it.
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
