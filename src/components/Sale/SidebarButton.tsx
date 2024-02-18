import { FunctionComponent } from "react";
import styles from '/src/css/ClothesCard.module.scss'
import sidebar__ArrowDown from '/src/assets/arrow_down__black.svg';

interface SidebarButtonProps {
    text: string
}

const SidebarButton: FunctionComponent<SidebarButtonProps> = ({ text }) => {

  return (
    <div className={styles.sidebar__button}>
        {text}
        <img src={sidebar__ArrowDown} alt="" />
    </div>
  )
}

export default SidebarButton
