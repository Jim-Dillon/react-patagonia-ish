import { FunctionComponent } from "react";
import SidebarTag from "./SidebarTag";
import styles from '/src/css/ClothesCard.module.scss'
import sidebar__ArrowDown from '/src/assets/arrow_down__black.svg';

interface SidebarButtonProps {
    text: string,
    sidebarTags: string[];
}

const SidebarButton: FunctionComponent<SidebarButtonProps> = ({ text, sidebarTags }) => {

  return (
    <div className={styles.sidebar__button}>
        {text}
        <img src={sidebar__ArrowDown} alt="" />
        <ul>
          {sidebarTags.map((tag, index) => (
            <SidebarTag
                key={index}
                // sidebarTags={sidebarTags}
                tag={tag}
              />
            ))}
        </ul>
    </div>
  )
}

export default SidebarButton
