import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
         <div className={styles.logo}>MD SAYAM BLOGS</div>
      <Link href="/" passHref>
        <p className={styles.navLink}>Home</p>
      </Link>
      <Link href="/about">
        <p className={styles.navLink}>About</p>
      </Link>
    </nav>
  );
};

export default Navbar;