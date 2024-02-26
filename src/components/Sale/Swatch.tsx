import { FunctionComponent } from 'react';
import styles from '/src/css/ClothesCard.module.scss';

interface SwatchProps {
  color: string;
  onClick: () => void;
}

const Swatch: FunctionComponent<SwatchProps> = ({ color, onClick }) => {
  return (
    <button
      className={`${styles.swatch} ${styles[color]}`}
      onClick={onClick}
    ></button>
  );
};

export default Swatch;