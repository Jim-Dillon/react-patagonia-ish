import { FunctionComponent, ReactNode, useState } from "react";
import SidebarTag from "./SidebarTag";
import styles from '/src/css/ClothesCard.module.scss'
import sidebar__ArrowDown from '/src/assets/arrow_down__black.svg';

interface SidebarButtonProps {
    text: string,
    sidebarTags?: string[];
    children?: ReactNode
}

const SidebarButton: FunctionComponent<SidebarButtonProps> = ({ text, sidebarTags, children }) => {

  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setIsClicked(!isClicked);
  }

  return (
    <div className={styles.sidebar__button} onClick={toggleVisibility}>
      {text}
      <img src={sidebar__ArrowDown} alt="" style={{ transform: isClicked ? 'translateY(-10%) rotate(180deg)' : 'none' }} />
      <ul style={{ display: isVisible ? 'block' : 'none' }}>
        {sidebarTags && sidebarTags.map((tag, index) => (
            <SidebarTag
                key={index}
                tag={tag}
            />
        ))}
      </ul>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
        {children}
      </div>
    </div>
  );
}

export default SidebarButton
