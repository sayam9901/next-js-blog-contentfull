// components/Card.tsx
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  author: string;
  image: string;
  description: string;
  change : string
}

const Card: React.FC<CardProps> = ({ title, author, image, description , change}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${title} cover`} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>{author}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
