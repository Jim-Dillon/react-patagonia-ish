import { FunctionComponent } from 'react';
import styles from '../../css/ClothesCard.module.scss';

export interface SwatchProps {
  color: string;
  onClick?: () => void;
}

const Swatch: FunctionComponent<SwatchProps> = ({ color, onClick }) => {
  return (
    <button
      className={`${styles.swatch} ${styles[color]}`}
      onClick={onClick}
      data-testid="swatch"
    ></button>
  );
};

export default Swatch;
