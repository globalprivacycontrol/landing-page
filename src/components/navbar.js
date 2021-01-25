import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import VisuallyHidden from './visually-hidden';

export default function Navbar({ isLarge = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-md`}>
      <div className="navbar__logos">
        <Link href="/">
          <a>
            <VisuallyHidden>Home</VisuallyHidden>
            <img
              className="d-lg-none"
              src={`${process.env.publicPrefix}/img/gpc-logo-mobile.svg`}
              alt="global privacy control logo"
              id="hero-logo"
            />
            <img
              className="d-none d-lg-block"
              src={`${process.env.publicPrefix}/img/${
                isLarge ? 'gpc-logo.svg' : 'gpc-logo-small.svg'
              }`}
              alt="global privacy control logo"
              id="hero-logo"
            />
          </a>
        </Link>
      </div>

      {/* <!-- MOBILE NAV TOGGLE --> */}
      <button
        className="d-md-none bg-transparent border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-label={isOpen ? 'Close main menu' : 'Main menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1ZM0 6C0 5.44772 0.447715 5 1 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H1C0.447716 7 0 6.55228 0 6ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447716 12 1 12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H1Z"
            fill="white"
          />
        </svg>
      </button>

      {/* <!-- DESKTOP NAV LINKS --> */}
      <div className="d-none d-md-block ml-auto text-nowrap">
        <Links />
      </div>

      {/* <!-- MOBILE NAV LINKS --> */}
      <div
        className={`w-100 d-md-none overflow-hidden ${styles.mobileMenu} ${
          isOpen ? styles.open : ''
        }`}
        id="navbarSupportedContent"
      >
        <div className="mt-4 d-flex">
          <Links />
        </div>
      </div>
    </nav>
  );
}

function Links() {
  return (
    <ul className={`navbar-nav ${styles.linkList}`}>
      <li className="nav-item">
        <Link href="/#about">
          <a className="nav-link text-uppercase">About</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/#gpc-spec">
          <a className="nav-link text-uppercase">Spec</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/#download">
          <a className="nav-link text-uppercase">Download</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/#orgs">
          <a className="nav-link text-uppercase">Organizations</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/#contact">
          <a className="nav-link text-uppercase">Get Involved</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/#press">
          <a className="nav-link text-uppercase">Press</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/#faq">
          <a className="nav-link text-uppercase">FAQ</a>
        </Link>
      </li>
    </ul>
  );
}
