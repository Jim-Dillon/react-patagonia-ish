import { FunctionComponent } from 'react';
import SidebarButton from './SidebarButton';
import styles from '/src/css/ClothesCard.module.scss'

const Sidebar: FunctionComponent = () => {
  return (
    <div className={styles.sideBar__Container}> 
        <div className={styles.sideBar__Content}>
            <SidebarButton text='Size' />
            <SidebarButton text='Price' />
            <SidebarButton text='Colour' />
            <SidebarButton text='Features' />
            <SidebarButton text='Materials & Our Footprint' />
        </div>
    </div>
  )
}

export default Sidebar;