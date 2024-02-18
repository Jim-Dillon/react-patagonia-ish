import { FunctionComponent } from "react";
import HeadButton from "./HeadButton";
import styles from "/src/css/TopNav.module.scss";
// import storybook from 'src/assets/storybook.svg';
import image__ArrowDown from '/src/assets/arrow_down.svg';
import patagonia from '/src/assets/img/Patagonia.png';
import burgerIcon from '/src/assets/burger_icon.svg';
import searchIcon from '/src/assets/search_icon.svg';
import heartIcon from '/src/assets/heart_icon.svg';
import basketIcon from '/src/assets/basket_icon.svg';
import userIcon from '/src/assets/user_icon.svg';


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
                    <HeadButton imageSrc={burgerIcon} className={`${styles.headerIcon} ${styles.burgerIcon}`} />
                    <HeadButton imageSrc={searchIcon} className={`${styles.headerIcon} ${styles.searchIcon}`} />
                </div>
                <img src={patagonia} alt="" className={styles.patLogo}/>
                <div className={styles.headerRight}>
                    <HeadButton imageSrc={searchIcon} className={`${styles.headerIcon} ${searchIcon} ${styles.bigIcon}`} />
                    <HeadButton imageSrc={userIcon} className={`${styles.headerIcon} ${styles.userIcon} ${styles.bigIcon}`} />
                    <HeadButton imageSrc={heartIcon} className={`${styles.headerIcon} ${styles.heartIcon}`} />
                    <HeadButton imageSrc={basketIcon} className={`${styles.headerIcon} ${styles.basketIcon}`} />
                    <HeadButton imageSrc={burgerIcon} className={`${styles.headerIcon} ${styles.burgerIcon} ${styles.bigIcon}`} />
                </div>
            </div>
        </nav>
    );
};

export default TopNav;