import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section id="pricing" className={`py-5  ${styles.pricing}`}>
      {/* section heading  */}
      <div className={`container ${styles.section_heading}`}>
        <div className="heading_content text-center">
          <h1>pricing</h1>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row g-4">

          {/* Free Plan */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className={`card h-100 shadow-sm border-0 ${styles.pricingItem}`}>
              <div className={styles.card_body}>
                <h3 className="card-title">Free Plan</h3>
                <h4 className="text-primary">
                  <sup>$</sup>0<span className="text-muted fs-5"> / month</span>
                </h4>
                <ul className={`list-unstyled my-4 text-start ${styles.featureList}`}>
                  <li><i className="fa-solid fa-check"></i>Quam adipiscing vitae proin</li>
                  <li><i className="fa-solid fa-check"></i>Nec feugiat nisl pretium</li>
                  <li><i className="fa-solid fa-check"></i>Nulla at volutpat diam uteera</li>
                  <li className={styles.na}><i className="fa-solid fa-xmark text-muted"></i>Pharetra massa massa ultricies</li>
                  <li className={styles.na}><i className="fa-solid fa-xmark text-muted"></i>Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="btn btn-outline-primary w-100">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Business Plan */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className={`card h-100 shadow  ${styles.featured}`}>
              <div className={styles.card_body}>
                <h3 className="card-title">Business Plan</h3>
                <h4 className="">
                  <sup>$</sup>29<span className=" fs-5"> / month</span>
                </h4>
                <ul className={`list-unstyled my-4 text-start ${styles.featureList}`}>
                  <li><i className="fa-solid fa-check"></i>Quam adipiscing vitae proin</li>
                  <li><i className="fa-solid fa-check"></i>Nec feugiat nisl pretium</li>
                  <li><i className="fa-solid fa-check"></i>Nulla at volutpat diam uteera</li>
                  <li><i className="fa-solid fa-check"></i>Pharetra massa massa ultricies</li>
                  <li><i className="fa-solid fa-check"></i>Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="btn btn-primary w-100">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Developer Plan */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className={`card h-100 shadow-sm border-0 ${styles.pricingItem}`}>
              <div className={styles.card_body}>
                <h3 className="card-title">Developer Plan</h3>
                <h4 className="text-primary">
                  <sup>$</sup>49<span className="text-muted fs-5"> / month</span>
                </h4>
                <ul className={` ${styles.featureList}`}>
                  <li><i className="fa-solid fa-check"></i>Quam adipiscing vitae proin</li>
                  <li><i className="fa-solid fa-check"></i>Nec feugiat nisl pretium</li>
                  <li><i className="fa-solid fa-check"></i>Nulla at volutpat diam uteera</li>
                  <li><i className="fa-solid fa-check"></i>Pharetra massa massa ultricies</li>
                  <li><i className="fa-solid fa-check"></i>Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="btn btn-outline-primary w-100">Buy Now</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
