import { FunctionComponent } from "react";
import styles from '/src/css/ClothesCard.module.scss'

interface SidebarButtonProps {
    text: string
}

const SidebarButton: FunctionComponent<SidebarButtonProps> = ({ text }) => {

  return (
    <div className={styles.sidebar__button}>
        {text}
        <img src="src/assets/arrow_down__black.svg" alt="" />
    </div>
  )
}

export default SidebarButton
