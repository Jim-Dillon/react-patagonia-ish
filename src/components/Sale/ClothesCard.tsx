import { FunctionComponent } from "react";
import styles from '/src/css/ClothesCard.module.scss'

interface ClothesCardProps {
    price: string;
    title: string;
    reducedPrice: string;
    buttonColors: string[];
    offer: string;
    imageSrc: string;
}

const ClothesCard: FunctionComponent<ClothesCardProps> = ({ title, price, reducedPrice, buttonColors, offer, imageSrc }) => {


    return (
        <div className={styles.clothesCard}>
            <div className={styles.clothesCard__imgWrapper}>
                <img src={imageSrc} alt="Clothes card img" />
                <p className={styles.offerTag}>{`${offer} off`}</p>
                <img className={styles.heartSave} src="src/assets/heart_icon.svg" alt="" />
            </div>
            <div className={styles.clothesCard__meta}>
                <div className={styles.swatchContainer}>
                    {buttonColors.map((color, index) => (
                        <button
                        key={index}
                        className={`${styles.swatch} ${styles[color]}`}
                        ></button>
                    ))}
                </div>
                <div className={styles.itemTitle}>
                    {title}
                </div>
                <div className={styles.itemPrice}>
                    <div className={styles.oldPrice}>{price}</div>
                    <div className={styles.newPrice}>{reducedPrice}</div>
                </div>
                <button className={styles.quickAdd}>
                    <img src="src/assets/quickAdd_icons.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default ClothesCard;