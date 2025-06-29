import React from "react";
import styles from "./carousel.module.css";
import car1 from "./about-imgs/testimonials-1.jpg";
import car2 from "./about-imgs/testimonials-2.jpg";
import car3 from "./about-imgs/testimonials-3.jpg";
import car4 from "./about-imgs/testimonials-4.jpg";
import car5 from "./about-imgs/testimonials-5.jpg";
import car6 from "./about-imgs/testimonials-4.jpg";


function Testimonials() {
  return (
    <section>
         {/* section heading  */}
      <div className={`container ${styles.section_heading}`}>
        <div className="heading_content text-center">
          <h1>Testimonials</h1>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="container">
            <div className="carousel-item active">

                {/* first slide ---- */}
              <div className="row justify-content-between">
                <div className="col-md-3">
                  <div className={`${styles.carousel_card}`}>
                    <div className={`${styles.card_tittle}` }>
                    <p>
                        <span><i className="fa-solid fa-quote-left pe-2"></i></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas deserunt nostrum repellat id quidem, modi
                      corrupti quam provident temporibus aliquam velit saepe,
                      est illum! Mollitia quaerat?
                      <span><i className="fa-solid fa-quote-right ps-2"></i></span>
                    </p>
                    </div>
                    <div className={styles.img_div}>
                      <img src={car1} className="d-block  img-fluid" alt="..." />
                      
                    </div>
                    <div className="name_person">
                        <h5  className="mb-0">saual karb</h5>
                      <small>ceo ux</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className={`${styles.carousel_card}`}>
                    <div className={`${styles.card_tittle}` }>
                    <p>
                        <span><i className="fa-solid fa-quote-left pe-2"></i></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas deserunt nostrum repellat id quidem, modi
                      corrupti quam provident temporibus aliquam velit saepe,
                      est illum! Mollitia quaerat?
                      <span><i className="fa-solid fa-quote-right ps-2"></i></span>
                    </p>
                    </div>
                    <div className={styles.img_div}>
                      <img src={car2} className="d-block  img-fluid" alt="..." />
                      
                    </div>
                    <div className="name_person">
                        <h5  className="mb-0">saual karb</h5>
                      <small>ceo ux</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className={`${styles.carousel_card}`}>
                    <div className={`${styles.card_tittle}` }>
                    <p>
                        <span><i className="fa-solid fa-quote-left pe-2"></i></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas deserunt nostrum repellat id quidem, modi
                      corrupti quam provident temporibus aliquam velit saepe,
                      est illum! Mollitia quaerat?
                      <span><i className="fa-solid fa-quote-right ps-2"></i></span>
                    </p>
                    </div>
                    <div className={styles.img_div}>
                      <img src={car3} className="d-block  img-fluid" alt="..." />
                      
                    </div>
                    <div className="name_person">
                        <h5  className="mb-0">saual karb</h5>
                      <small>ceo ux</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          {/* second slid ------  */}
          <div className="carousel-item">
          <div className="row justify-content-between">
                <div className="col-md-3">
                  <div className={`${styles.carousel_card}`}>
                    <div className={`${styles.card_tittle}` }>
                    <p>
                        <span><i className="fa-solid fa-quote-left pe-2"></i></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas deserunt nostrum repellat id quidem, modi
                      corrupti quam provident temporibus aliquam velit saepe,
                      est illum! Mollitia quaerat?
                      <span><i className="fa-solid fa-quote-right ps-2"></i></span>
                    </p>
                    </div>
                    <div className={styles.img_div}>
                      <img src={car4} className="d-block  img-fluid" alt="..." />
                      
                    </div>
                    <div className="name_person">
                        <h5  className="mb-0">saual karb</h5>
                      <small>ceo ux</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className={`${styles.carousel_card}`}>
                    <div className={`${styles.card_tittle}` }>
                    <p>
                        <span><i className="fa-solid fa-quote-left pe-2"></i></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas deserunt nostrum repellat id quidem, modi
                      corrupti quam provident temporibus aliquam velit saepe,
                      est illum! Mollitia quaerat?
                      <span><i className="fa-solid fa-quote-right ps-2"></i></span>
                    </p>
                    </div>
                    <div className={styles.img_div}>
                      <img src={car5} className="d-block  img-fluid" alt="..." />
                      
                    </div>
                    <div className="name_person">
                        <h5  className="mb-0">saual karb</h5>
                      <small>ceo ux</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className={`${styles.carousel_card}`}>
                    <div className={`${styles.card_tittle}` }>
                    <p>
                        <span><i className="fa-solid fa-quote-left pe-2"></i></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas deserunt nostrum repellat id quidem, modi
                      corrupti quam provident temporibus aliquam velit saepe,
                      est illum! Mollitia quaerat?
                      <span><i className="fa-solid fa-quote-right ps-2"></i></span>
                    </p>
                    </div>
                    <div className={styles.img_div}>
                      <img src={car6} className="d-block  img-fluid" alt="..." />
                      
                    </div>
                    <div className="name_person">
                        <h5  className="mb-0">saual karb</h5>
                      <small>ceo ux</small>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prav-icon " aria-hidden="true"></span>
          {/* <span><i class="fa-solid fa-angles-left fs-4 text-primary"></i></span> */}
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon " aria-hidden="true"></span>
          {/* <span><i class="fa-solid fa-angles-right fs-4 text-primary"></i></span> */}
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
