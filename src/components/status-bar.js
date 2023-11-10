import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './status-bar.module.css';

export default function StatusBar() {
  const [hasGpc, setHasGpc] = useState(undefined);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHasGpc(!!navigator.globalPrivacyControl);
    }, 50);
    return () => {
      clearTimeout(timeoutId);
    };
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
                backgroundColor: hasGpc ? '#058A5E' : '#de0000'
              }}
            ></span>
            <span className="mb-0 text-center">
              {hasGpc ? (
                <>
                  <span className={`${styles.statusText}`}>
                    GPC signal detected.
                  </span>
                  <span className={`${styles.statusCheck}`}>
                    Test against the
                    <a href="https://global-privacy-control.glitch.me">
                      reference server
                    </a>
                    .
                  </span>
                </>
              ) : (
                <>
                  <span className={`${styles.statusText}`}>
                    GPC signal not detected.
                  </span>
                  <span className={`${styles.statusText}`}>
                    Please
                    <Link href="/#download">
                      download a browser/extension
                    </Link>
                    that supports it.
                  </span>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
