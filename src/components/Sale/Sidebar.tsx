import { FunctionComponent } from 'react';
import SidebarButton from './SidebarButton';
import styles from '/src/css/ClothesCard.module.scss';
import Swatch from './Swatch';


const Sidebar: FunctionComponent = () => {

  const swatchColors = ['teal', 'darkBlue', 'lightRed', 'turquoise', 'mustard', 'lightGrey', 'darkRed', 'brown', 'blue', 'metalBlue', 'darkBrown', 'camo']

  const swatchElements = swatchColors.map((color, index) => (
    <li className={styles.sideBar__Swatch}>
      <Swatch
        key={index}
        color={color} />
        <span>(1)</span>
    </li>
    
    
))

  return (
    <div className={styles.sideBar__Container}> 
        <div className={styles.sideBar__Content}>
            <SidebarButton 
              text='Size'
              sidebarTags={['L (2)', 'M (2)']} />
            <SidebarButton 
              text='Price'
              sidebarTags={['£200 - £249 (2)', '£300 - £349 (2)']} />
            <SidebarButton 
              text='Colour' 
            >
              {swatchElements}
            </SidebarButton>

            <SidebarButton 
              text='Features' 
              sidebarTags={['Breathable (4)', 'Fair Trade (2)', 'Water Resistant (3)']} />
            <SidebarButton 
              text='Materials & Our Footprint' 
              sidebarTags={['Recycled Materials (2)', 'Fair Trade (2)', 'Organic (1)']} />
        </div>
    </div>
  )
}

export default Sidebar;