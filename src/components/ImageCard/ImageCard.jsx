import styles from './ImageCard.module.css';
import { useState } from 'react';
import Loader from '../Loader/Loader';

const ImageCard = ({ image }) => {
  const { isLoading, setIsLoading } = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };


  return (
    <div className={styles.imageCard}>
      {isLoading && <Loader />}
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={`${styles.cardImage} ${isLoading ? styles.hidden : ""}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageCard;


