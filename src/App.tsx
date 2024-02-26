import React from "react";
import TopNav from './components/Nav/TopNav';
import styles from "./css/SaleTopSection.module.scss";
import stylesClothes from './css/ClothesCard.module.scss'
import ClothesCard from './components/Sale/ClothesCard';
import Footer from './components/Footer/Footer';
import Sidebar from "./components/Sale/Sidebar";
import SaleTopSection from "./components/Sale/SaleTopSection";
import tealJacket from '/src/assets/clothes/jacket__teal.png';
import darkBlueJacket from '/src/assets/clothes/jacket__darkBlue.png';
import lightRedJacket from '/src/assets/clothes/jacket__lightRed.png';
import turquoiseTrousers from '/src/assets/clothes/trousers__turquoise.png';
import mustardTrousers from '/src/assets/clothes/trousers__mustard.png';
import lightGreyTrousers from '/src/assets/clothes/trousers__lightGrey.png';
import darkRedCoat from '/src/assets/clothes/coat__darkRed.png';
import brownCoat from '/src/assets/clothes/coat__brown.png';
import turquoiseCoat from '/src/assets/clothes/coat__turquoise.png';
import blueCoat from '/src/assets/clothes/coat__blue.png';
import metalBluePants from '/src/assets/clothes/pants__metalBlue.png';
import darkBrownPants from '/src/assets/clothes/pants__darkBrown.png';
import bluePants from '/src/assets/clothes/pants__blue.png';
import brownPants from '/src/assets/clothes/pants__brown.png';
import camoPants from '/src/assets/clothes/pants__camo.png';

const App: React.FC = () => {

  return (
    <div>
      <TopNav /> 
      <img src="https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=90&amp;sw=100&amp; 100w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=295&amp; 295w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=310&amp; 310w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=334&amp; 334w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=80&amp;sw=350&amp; 350w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=425&amp; 425w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=80&amp;sw=500&amp; 500w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=526&amp; 526w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=552&amp; 552w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=590&amp; 590w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=594&amp; 594w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=620&amp; 620w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=668&amp; 668w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=80&amp;sw=800&amp; 800w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=850&amp; 850w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=75&amp;sw=1000&amp; 1000w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=1052&amp; 1052w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=1104&amp; 1104w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=1121&amp; 1121w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=1188&amp; 1188w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=75&amp;sw=1300&amp; 1300w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=85&amp;sw=1548&amp; 1548w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=75&amp;sw=1600&amp; 1600w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=70&amp;sw=2000&amp; 2000w, https://eu.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Sites-patagonia-storefront-eu/default/dwa687380e/category/hero/w24-sales-web-hero.jpg?q=70&amp; 2650w" sizes="auto" className={styles.heroImage} />

      <SaleTopSection />

      <div className={stylesClothes.shopSection}>
        <Sidebar />
        <div className={stylesClothes.clothesSection}>
          <ClothesCard 
            price={'£300'}
            reducedPrice={'£210'}
            title="W's Upstride Jacket"
            buttonColors={['teal', 'darkBlue', 'lightRed']}
            offer={'30%'}
            images={[tealJacket, darkBlueJacket, lightRedJacket]}
            />
            <ClothesCard 
            price={'£290'}
            reducedPrice={'£232'}
            title="W's Upstride Pants"
            buttonColors={['turquoise', 'mustard', 'lightGrey']}
            offer={'20%'}
            images={[turquoiseTrousers, mustardTrousers, lightGreyTrousers]}
            />
            <ClothesCard 
            price={'£450'}
            reducedPrice={'£315'}
            title="M's Stormstride Jacket"
            buttonColors={['darkRed', 'brown', 'turquoise', 'blue']}
            offer={'30%'}
            images={[darkRedCoat, brownCoat, turquoiseCoat, blueCoat]}
            />
            <ClothesCard 
            price={'£380'}
            reducedPrice={'£304'}
            title="M's Stormstride Pants"
            buttonColors={['metalBlue', 'darkBrown', 'blue', 'brown', 'camo' ]}
            offer={'20%'}
            images={[metalBluePants, darkBrownPants, bluePants, brownPants, camoPants]}
            />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
