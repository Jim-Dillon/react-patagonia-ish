import { FunctionComponent } from 'react';
import styles from '/src/css/ClothesCard.module.scss';

export interface OfferTagProps {
    offer: string
}

const OfferTag: FunctionComponent<OfferTagProps> = ({ offer }) => {
  return (
    <p className={styles.offerTag}>{`${offer} off`}</p>
  )
}

export default OfferTag