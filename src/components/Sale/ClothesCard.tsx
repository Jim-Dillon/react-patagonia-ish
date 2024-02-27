import { FunctionComponent, useState } from "react";
import OfferTag from "./OfferTag";
import Swatch from "./Swatch";
import styles from '/src/css/ClothesCard.module.scss';
import heartIcon from '/src/assets/heart_icon.svg';
import quickAddIcon from '/src/assets/quickAdd_icons.svg';

export interface ClothesCardProps {
    price: string;
    title: string;
    reducedPrice: string;
    buttonColors: string[];
    offer: string;
    images: string[];
}

const ClothesCard: FunctionComponent<ClothesCardProps> = ({ title, price, reducedPrice, buttonColors, offer, images }) => {

    const [selectedColor, setSelectedColor] = useState(0);

    const handleColorChange = (index: number) => {
        setSelectedColor(index);
    };

    return (
        <div className={styles.clothesCard}>
            <div className={styles.clothesCard__imgWrapper}>
                <img src={images[selectedColor]} alt="Clothes card img" />
                <OfferTag 
                    offer={offer}
                />
                <img className={styles.heartSave} src={heartIcon} alt="" />
            </div>
            <div className={styles.clothesCard__meta}>
                <div className={styles.swatchContainer}>
                    {buttonColors.map((color, index) => (
                        <Swatch
                            key={index}
                            // className={`${styles.swatch} ${styles[color]}`}
                            color={color}
                            onClick={() => handleColorChange(index)}
                        />
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
                    <img src={quickAddIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default ClothesCard;