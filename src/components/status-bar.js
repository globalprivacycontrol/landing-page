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
                  GPC signal detected.
                  <br />
                  <a href="https://global-privacy-control.glitch.me">Test against the reference server.</a>
                </>
              ) : (
                <>
                  GPC signal not detected.
                  <br />
                  <Link href="/#download">
                    <a>Please download a browser or extension that supports it.</a>
                  </Link>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
