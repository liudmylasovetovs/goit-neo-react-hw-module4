import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={styles.imageGalleryItem}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
      
    </ul>
  );
}

export default ImageGallery;
