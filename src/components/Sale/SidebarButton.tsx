import { FunctionComponent, ReactNode } from "react";
import SidebarTag from "./SidebarTag";
import styles from '/src/css/ClothesCard.module.scss'
import sidebar__ArrowDown from '/src/assets/arrow_down__black.svg';

interface SidebarButtonProps {
    text: string,
    sidebarTags?: string[];
    children?: ReactNode
}

const SidebarButton: FunctionComponent<SidebarButtonProps> = ({ text, sidebarTags, children }) => {

  return (
    <div className={styles.sidebar__button}>
        {text}
        <img src={sidebar__ArrowDown} alt="" />
        <ul>
        {sidebarTags && sidebarTags.map((tag, index) => (
          <SidebarTag
            key={index}
            tag={tag}
          />
        ))}
      </ul>
        {children}
    </div>
  )
}

export default SidebarButton
