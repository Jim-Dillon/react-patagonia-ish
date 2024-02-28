import { FunctionComponent } from 'react';
import SidebarButton from './SidebarButton';
import styles from '/src/css/ClothesCard.module.scss'

const Sidebar: FunctionComponent = () => {
  return (
    <div className={styles.sideBar__Container}> 
        <div className={styles.sideBar__Content}>
            <SidebarButton 
              text='Size'
              sidebarTags={['L (2)', 'M (2)']} />
            <SidebarButton 
              text='Price'
              sidebarTags={['L (2)', 'M (2)']} />
            <SidebarButton 
              text='Colour' 
              sidebarTags={['L (2)', 'M (2)']} />
            <SidebarButton 
              text='Features' 
              sidebarTags={['L (2)', 'M (2)', 'S (1)']} />
            <SidebarButton 
              text='Materials & Our Footprint' 
              sidebarTags={['L (2)', 'M (2)']} />
        </div>
    </div>
  )
}

export default Sidebar;