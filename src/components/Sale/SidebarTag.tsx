import { FunctionComponent } from "react";

interface SidebarTagProps {
    tag: string
}

const SidebarTag: FunctionComponent<SidebarTagProps> = ({ tag }) => {
  return (
    <li>
        {tag}
    </li>
  )
}

export default SidebarTag