// components/Header.tsx
import React from 'react';
import styles from './Header.module.css';
import image from "../Utils/profile-pic.png"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.animationContainer}>
        <img src="https://media.discordapp.net/attachments/878640088446271509/1197144650385981480/profile-pic.png?ex=65ba32d6&is=65a7bdd6&hm=d00dea8bb24efdb50dd0c7b6cb6e0e27b4a5ff61ed7248f1cd2f4b9189963d78&=&format=webp&quality=lossless&width=593&height=593" alt="Md Sayam" className={styles.profileImage} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Md Sayam's Blog</h1>
        <p className={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora qui nisi asperiores aspernatur voluptates eveniet sed doloribus voluptatum, repellendus in ipsam. Voluptate fuga iusto iure magnam asperiores ut provident beatae illum nostrum quae, expedita nesciunt tempor
          lorem30
        </p>
      </div>
    </header>
  );
};

export default Header;
