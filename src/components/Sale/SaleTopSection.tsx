import { FunctionComponent } from "react";
import SaleButton from "./SaleButton"
import styles from '/src/css/SaleTopSection.module.scss';
import filterIcon from '/src/assets/filter_icon.svg';

const SaleTopSection: FunctionComponent = () => {
  return (
    <div className={styles.saleSection}>
        <div className={styles.saleSection__title}>
          <h1>Just for fun</h1>
        </div>
        <div className={styles.saleSection__para}>
          <p>This project is a challenge I set myself to remake an existing page from the Patagonia website with React. Using Vite, this React app is built with TypeScript to create a single UI, using components which I've stored in Storybook. Feel free to have a look around and even click through the colour swatches! 
          </p>
        </div>
        <div className={styles.saleSection__title}>
          <h1>Sale</h1>
        </div>
        <div className={styles.saleSection__filterPair}>
          <div className={styles.saleSection__filter}>
            <p>Filter & Sort</p>
          </div>
          <img src={filterIcon} alt="" className={styles.saleSection__filterIcon} />
        </div>
        <div className={styles.saleSection__ButtonSection}>
          <div className={styles.saleSection__ButtonGrid}>
            <SaleButton 
              text="Women's"
            />
            <SaleButton 
              text="Men's"
            />
            <SaleButton 
              text="Kids' & Baby"
            />
            <SaleButton 
              text="Packs & Gear"
            />
            <SaleButton 
              text="Snow Gear"
            />
        </div>
        </div>
      </div>
  )
}

export default SaleTopSection

