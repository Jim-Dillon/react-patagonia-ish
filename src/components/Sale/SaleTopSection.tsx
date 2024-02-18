import { FunctionComponent } from "react";
import SaleButton from "./SaleButton"
import styles from '/src/css/SaleTopSection.module.scss'

const SaleTopSection: FunctionComponent = () => {
  return (
    <div className={styles.saleSection}>
        <div className={styles.saleSection__title}>
          <h1>Just for fun</h1>
        </div>
        <div className={styles.saleSection__para}>
          <p>This project was a challenge I set myself to build a landing page using React, using a brand's design that I really like. Using Vite, this app was built with React and TypeScript to combine multiple components together into a single UI. 
          </p>
        </div>
        <div className={styles.saleSection__title}>
          <h1>Sale</h1>
        </div>
        <div className={styles.saleSection__filterPair}>
          <div className={styles.saleSection__filter}>
            <p>Filter & Sort</p>
          </div>
          <img src="src/assets/filter_icon.svg" alt="" className={styles.saleSection__filterIcon} />
        </div>
        <div className={styles.saleSection__ButtonSection}>
          <div className={styles.saleSection__ButtonGrid}>
            <SaleButton 
              text="Women's"
              className={styles.saleSection__button}
            />
            <SaleButton 
              text="Men's"
              className={styles.saleSection__button}
            />
            <SaleButton 
              text="Kids' & Baby"
              className={styles.saleSection__button}
            />
            <SaleButton 
              text="Packs & Gear"
              className={styles.saleSection__button}
            />
            <SaleButton 
              text="Snow Gear"
              className={styles.saleSection__button}
            />
        </div>
        </div>
      </div>
  )
}

export default SaleTopSection

