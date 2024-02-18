import { FunctionComponent } from "react";
import HeadButton from "./HeadButton";
import styles from "/src/css/TopNav.module.scss";
import image__ArrowDown from '/src/assets/arrow_down.svg';
import patagonia from '/src/assets/img/Patagonia.png'


const TopNav: FunctionComponent = () => {

    return (
        <nav>
            <div className={styles.utilityBar}>
                {/* <img src="src/assets/storybook.svg" alt="" />
                <p>View all the React components in Storybook</p> */}
                <p>Sale</p>
                <img src={image__ArrowDown} alt="" />
            </div>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <ul>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">Activism</a>
                        </li>
                        <li>
                            <a href="#">Sports</a>
                        </li>
                        <li>
                            <a href="#">Stories</a>
                        </li>
                    </ul>
                    <HeadButton imageSrc="src/assets/burger_icon.svg" className={`${styles.headerIcon} ${styles.burgerIcon}`} />
                    <HeadButton imageSrc="src/assets/search_icon.svg" className={`${styles.headerIcon} ${styles.searchIcon}`} />
                </div>
                <img src={patagonia} alt="" className={styles.patLogo}/>
                <div className={styles.headerRight}>
                    <HeadButton imageSrc="src/assets/search_icon.svg" className={`${styles.headerIcon} ${styles.searchIcon} ${styles.bigIcon}`} />
                    <HeadButton imageSrc="src/assets/user_icon.svg" className={`${styles.headerIcon} ${styles.userIcon} ${styles.bigIcon}`} />
                    <HeadButton imageSrc="src/assets/heart_icon.svg" className={`${styles.headerIcon} ${styles.heartIcon}`} />
                    <HeadButton imageSrc="src/assets/basket_icon.svg" className={`${styles.headerIcon} ${styles.basketIcon}`} />
                    <HeadButton imageSrc="src/assets/burger_icon.svg" className={`${styles.headerIcon} ${styles.burgerIcon} ${styles.bigIcon}`} />
                </div>
            </div>
        </nav>
    );
};

export default TopNav;