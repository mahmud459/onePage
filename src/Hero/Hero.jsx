import React from "react";
import styles from './Hero.module.css'
function Hero(){
    return(
    <section id="Hero">
        
        <div className={styles.hero_section}>
            <div className={`${styles.overlay_bg}`}></div>
            <div className="container">
                <div className={styles.hero_content}>
                    <div className={`${styles.hero_header} text-center`}>
                    <h1>One Page Bootstrap Website Template</h1>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                        <div className="text-center">
                     <a className={styles.button} href="#appointment">
                  Git Started
                </a>
                     </div>

                  
                     </div>
                     <div className={styles.hero_cards}>
                <div className="row">
                    <div className="col-md-3">
                    <div className={`${styles.my_card} card`}>
                            <p><span><i className="fa-solid fa-box-archive"></i></span></p>
                            <h4>Lorem Ipsum</h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className={`${styles.my_card} card `}>
                            <p><span><i className="fa-solid fa-signs-post"></i></span></p>
                            <h4>
Sed ut perspiciatis</h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className={`${styles.my_card} card `}>
                            <p><span><i className="fa-solid fa-gem"></i></span></p>
                            <h4>Magni Dolores</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className={`${styles.my_card} card `}>
                            <p><span><i className="fa-solid fa-box-archive"></i></span></p>
                            <h4>Nemo Enim</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>
                     </div>
                </div>
            </div>
        </div>
</div>
    </section>    
    );
}
export default Hero;