import { FunctionComponent } from "react";
// import styles from '/src/css/ClothesCard.module.scss'


interface SidebarTagProps {
    sidebarTags: string[];
}

const SidebarTag: FunctionComponent<SidebarTagProps> = ({ sidebarTags }) => {
  return (
    <li>
        {sidebarTags}
    </li>
  )
}

export default SidebarTag