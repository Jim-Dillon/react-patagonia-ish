import { FunctionComponent } from "react";
import styles from "/src/css/Footer.module.scss"
import FooterButton from "./FooterButton";
import flag from '/src/assets/british_flag.svg'

const Footer: FunctionComponent = () => {

    return (
        <footer>
            <ul className={styles.footerContainer}>
                <li>
                    <div className={styles.footerTitle}>
                        Newsletter Signup
                    </div>
                    <p className={styles.footerPara__One}>Sign up for exclusive offers, original stories, activism awareness, events and more.</p>
                    <input 
                        type="text"
                        placeholder="E-Mail *"
                    />
                    <p className={styles.footerTerms}>  
                        By clicking the Sign Me Up button, I consent to Patagonia processing my email address and sending me emails for product highlights, original stories, activism awareness, event updates and more in accordance with <a href="/gb/en/privacy-policy.html" target="_blank" rel="noopener" data-sle="true">Patagonia’s Privacy Notice</a>    
                    </p> 
                    <button className={styles.subscribeButton}>
                        Sign Me Up
                    </button>
                </li>
                <li>
                    <div className={styles.footerTitle}>
                        Get Help
                    </div>
                    <div className={styles.footer__HelpButtons}>
                        <FooterButton text="Customer Service"/>
                        <FooterButton text="Delivery"/>
                        <FooterButton text="FAQs"/>
                        <FooterButton text="Repairs"/>
                        <FooterButton text="Returns"/>
                        <FooterButton text="Login"/>
                        <FooterButton text="Contact Form"/>
                        <FooterButton text="Size Guide"/>
                    </div>
                </li>
                <li>
                    <div className={styles.footerTitle}>
                            Information
                    </div>
                    <div className={styles.footer__sitemapColumn}>
                        <ul>
                            <li>
                                <a href="">Patagonia Action Works</a>
                            </li>
                            <li>
                                <a href="">Privacy Notice</a>
                            </li>
                            <li>
                                <a href="">Terms and Conditions of Sale</a>
                            </li>
                            <li>
                                <a href="">Cookie Preferences</a>
                            </li>
                            <li>
                                <a href="">1% For the Planet</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                            <li>
                                <a href="">Press</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="">Pro Community</a>
                            </li>
                            <li>
                                <a href="">Our Acknowledgement</a>
                            </li>
                            <li>
                                <a href="">Industry program</a>
                            </li>
                            <li>
                                <a href="">Worn Wear</a>
                            </li>
                            <li>
                                <a href="">UK Modern Slavery Act</a>
                            </li>
                            <li>
                                <a href="">Find a Store</a>
                            </li>
                            <li>
                                <a href="">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className={styles.footer__BottomWrapper}>
                    <div className={styles.footer__BottomCopyright}>
                        © 2024 Patagonia, Inc. All Rights Reserved.
                    </div>
                    <div className={styles.footer__CountrySelector}>
                        <p>English</p>
                        <img src={flag} alt="" className="flag" />
                    </div>
                </div>
        </footer>
    )
}

export default Footer;