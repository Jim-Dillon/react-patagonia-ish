import { FunctionComponent } from "react";
import HeadButton from "./HeadButton";
import styles from "/src/css/TopNav.module.scss";
import storybookIcon from '/src/assets/storybook.svg'
// import image__ArrowDown from '/src/assets/arrow_down.svg';
import patagonia from '/src/assets/img/Patagonia.png';


const TopNav: FunctionComponent = () => {

    const burgerIcon = <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 9.5H0V6.5H14V9.5Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3.5H0V0.5H14V3.5Z" fill="black"/>
    </svg>

    const basketIcon = <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.17157 0.671573 3.5 1.5 3.5H11.5C12.3284 3.5 13 4.17157 13 5V12C13 12.8284 12.3284 13.5 11.5 13.5H1.5C0.671573 13.5 0 12.8284 0 12V5ZM1.5 4.5C1.22386 4.5 1 4.72386 1 5V12C1 12.2761 1.22386 12.5 1.5 12.5H11.5C11.7761 12.5 12 12.2761 12 12V5C12 4.72386 11.7761 4.5 11.5 4.5H1.5Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04001 2.7002V4.0002H4.04001V2.7002H5.04001Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.97 2.7002V4.0002H7.97V2.7002H8.97Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.40588 1.3999C6.21659 1.3999 6.0299 1.44397 5.86059 1.52863C5.57135 1.67325 5.35141 1.92685 5.24914 2.23363L4.97435 3.05802L4.02567 2.74179L4.30046 1.9174C4.48659 1.35901 4.88692 0.897429 5.41338 0.634201C5.72154 0.480119 6.06134 0.399902 6.40588 0.399902H6.59413C6.93867 0.399902 7.27848 0.480119 7.58664 0.634201C8.1131 0.89743 8.51342 1.35901 8.69955 1.9174L8.97435 2.74179L8.02567 3.05802L7.75087 2.23363C7.64861 1.92685 7.42866 1.67325 7.13942 1.52863C6.97012 1.44397 6.78342 1.3999 6.59413 1.3999H6.40588Z" fill="black"/>
    </svg>

    const searchIcon = <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2353 6.11765C12.2353 9.49633 9.49633 12.2353 6.11765 12.2353C2.73896 12.2353 0 9.49633 0 6.11765C0 2.73896 2.73896 0 6.11765 0C9.49633 0 12.2353 2.73896 12.2353 6.11765Z" fill="black"/>
    <path d="M11.0882 6.11756C11.0882 8.86274 8.86283 11.0881 6.11765 11.0881C3.37247 11.0881 1.14706 8.86274 1.14706 6.11756C1.14706 3.37238 3.37247 1.14697 6.11765 1.14697C8.86283 1.14697 11.0882 3.37238 11.0882 6.11756Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2344 13.5301L10.1755 10.4713L11.2362 9.41064L14.295 12.4695L13.2344 13.5301Z" fill="black"/>
    </svg>

    const userIcon = <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5.5" cy="3.5" r="3" fill="white" stroke="black"/>
    <path d="M1 12C1 10.3431 2.34315 9 4 9H7C8.65685 9 10 10.3431 10 12V13H1V12Z" fill="white"/>
    <path d="M0.5 12C0.5 10.067 2.067 8.5 4 8.5H7C8.933 8.5 10.5 10.067 10.5 12H9.5C9.5 10.6193 8.38071 9.5 7 9.5H4C2.61929 9.5 1.5 10.6193 1.5 12H0.5ZM10 13H1H10ZM0.5 13V12C0.5 10.067 2.067 8.5 4 8.5V9.5C2.61929 9.5 1.5 10.6193 1.5 12V13H0.5ZM7 8.5C8.933 8.5 10.5 10.067 10.5 12V13H9.5V12C9.5 10.6193 8.38071 9.5 7 9.5V8.5Z" fill="black"/>
    </svg>

    const heartIcon = <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58587 0.327803C6.09053 0.545746 6.54486 0.865372 6.92049 1.26673L6.22923 1.91367C5.94251 1.60731 5.59572 1.36334 5.2105 1.19698C4.82529 1.03062 4.40992 0.94545 3.99032 0.946781C3.57072 0.948112 3.15589 1.03592 2.77174 1.20471C2.38759 1.37351 2.04235 1.61968 1.75758 1.92785C1.47281 2.23603 1.25461 2.59959 1.11661 2.99585C0.978613 3.39211 0.923773 3.81256 0.955514 4.23096C0.987255 4.64936 1.1049 5.05673 1.3011 5.42764C1.49729 5.79855 1.76784 6.12503 2.09584 6.38672L2.07926 6.40751L6.83588 11.1641L6.16412 11.8359L1.16412 6.83588L1.17157 6.82843C0.889886 6.54674 0.651254 6.22394 0.464202 5.87033C0.207165 5.38441 0.0530449 4.85072 0.0114613 4.30258C-0.0301223 3.75444 0.0417233 3.20361 0.222514 2.68448C0.403304 2.16534 0.689159 1.68904 1.06224 1.28531C1.43531 0.881577 1.8876 0.559076 2.39088 0.337935C2.89415 0.116795 3.4376 0.0017635 3.98731 2.01181e-05C4.53703 -0.00172326 5.0812 0.109859 5.58587 0.327803Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.80883 0.292382C6.32191 0.493555 5.87958 0.792539 5.50813 1.17157L6.16421 1.84104C6.44774 1.55172 6.78537 1.3235 7.15704 1.16994C7.52871 1.01639 7.92683 0.940623 8.32776 0.947154C8.72869 0.953685 9.12424 1.04238 9.49091 1.20796C9.85759 1.37355 10.1879 1.61264 10.4622 1.91105C10.7366 2.20946 10.9493 2.56109 11.0879 2.94505C11.2264 3.32901 11.2879 3.73747 11.2687 4.14616C11.2496 4.55485 11.1501 4.95543 10.9762 5.32411C10.8023 5.6928 10.5575 6.02205 10.2565 6.29232L10.2614 6.29803L5.49077 11.165L6.1692 11.83L11.0692 6.83104L11.0591 6.82107C11.3674 6.50484 11.6221 6.13776 11.8122 5.7347C12.04 5.2517 12.1704 4.7269 12.1955 4.19148C12.2207 3.65606 12.1401 3.12094 11.9586 2.61792C11.7771 2.1149 11.4983 1.65424 11.1389 1.2633C10.7795 0.872358 10.3468 0.559119 9.8664 0.34219C9.38602 0.12526 8.86782 0.00906584 8.34257 0.000509645C7.81732 -0.00804655 7.29574 0.0912099 6.80883 0.292382Z" fill="black"/>
    </svg>

    return (
        <nav>
            <div className={styles.utilityBar}>
                <img src={storybookIcon} alt="" />
                <a href="https://65dc5f2a9707fdd295561118-yjikaizzye.chromatic.com/">View all the React components in Storybook</a>
                {/* <p>Sale</p> */}
                {/* <img src={image__ArrowDown} alt="" /> */}
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
                    <HeadButton 
                        iconSVG={burgerIcon} 
                        className={`${styles.headerIcon} ${styles.burgerIcon}`} />
                    <HeadButton 
                        iconSVG={searchIcon} 
                        className={`${styles.headerIcon} ${styles.searchIcon}`} />
                </div>
                <img src={patagonia} alt="" className={styles.patLogo}/>
                <div className={styles.headerRight}>
                    <HeadButton 
                        iconSVG={searchIcon} 
                        className={`${styles.headerIcon} ${styles.searchIcon} ${styles.bigIcon}`} />
                    <HeadButton 
                        iconSVG={userIcon} 
                        className={`${styles.headerIcon} ${styles.userIcon} ${styles.bigIcon}`} />
                    <HeadButton 
                        iconSVG={heartIcon} 
                        className={`${styles.headerIcon} ${styles.heartIcon}`} />
                    <HeadButton 
                        iconSVG={basketIcon}
                        className={`${styles.headerIcon} ${styles.basketIcon}`} />
                    <HeadButton 
                        iconSVG={burgerIcon} 
                        className={`${styles.headerIcon} ${styles.burgerIcon} ${styles.bigIcon}`} />
                </div>
            </div>
        </nav>
    );
};

export default TopNav;