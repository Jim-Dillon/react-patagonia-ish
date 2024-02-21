import { FunctionComponent } from "react";
import styles from '/src/css/SaleTopSection.module.scss';

interface SaleButtonProps {
    text: string;
    className?: string;
}

const SaleButton: FunctionComponent<SaleButtonProps> = ({ text }) => {
    return (
        <a href="#" className={styles.saleSection__button}>
            {text}
        </a>
    )
}

export default SaleButton;