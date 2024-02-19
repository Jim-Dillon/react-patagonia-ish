import { FunctionComponent, useState } from "react";
import styles from '/src/css/ClothesCard.module.scss';
import heartIcon from '/src/assets/heart_icon.svg';
import quickAddIcon from '/src/assets/quickAdd_icons.svg';

interface ClothesCardProps {
    price: string;
    title: string;
    reducedPrice: string;
    buttonColors: string[];
    offer: string;
    // imageSrc: string;
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
                {/* <img src={imageSrc} alt="Clothes card img" /> */}
                <img src={images[selectedColor]} alt="Clothes card img" />
                <p className={styles.offerTag}>{`${offer} off`}</p>
                <img className={styles.heartSave} src={heartIcon} alt="" />
            </div>
            <div className={styles.clothesCard__meta}>
                <div className={styles.swatchContainer}>
                    {buttonColors.map((color, index) => (
                        <button
                            key={index}
                            className={`${styles.swatch} ${styles[color]}`}
                            onClick={() => handleColorChange(index)}
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
                    <img src={quickAddIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default ClothesCard;