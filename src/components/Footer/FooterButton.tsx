import { FunctionComponent } from "react";
import styles from "/src/css/Footer.module.scss"

export interface FooterButtonProps {
    text: string;
}

const FooterButton: FunctionComponent<FooterButtonProps> = ({ text }) => {
    return (
        <a className={styles.footer__HelpButton}>
            {text}
        </a>
    );
};

export default FooterButton;