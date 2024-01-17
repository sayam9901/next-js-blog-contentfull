// pages/about.tsx
import React from 'react';
import Footer from '../Footer';
import styles from './About.module.css';
import Navbar from '../Navbar';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <main className={styles.main}>
      <section className={styles.aboutSection}>
          <h2 className={styles.head}>About Md Sayam's Blog</h2>
          <p>
            Welcome to Md Sayam's Blog, where I share my thoughts, experiences, and insights on various topics. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. 
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
          <p>
            Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. 
            Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
