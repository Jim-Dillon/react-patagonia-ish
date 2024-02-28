import { FunctionComponent } from "react";
// import styles from '/src/css/ClothesCard.module.scss'


interface SidebarTagProps {
    // sidebarTags: string[],
    tag: string
}

const SidebarTag: FunctionComponent<SidebarTagProps> = ({ tag }) => {
  return (
    <li>
        {/* {sidebarTags} */}
        {tag}
    </li>
  )
}

export default SidebarTag