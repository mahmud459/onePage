import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section id="pricing" className={`py-5 bg-light ${styles.pricing}`}>
      <div className="container text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold">Pricing</h2>
        <p className="text-muted">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row g-4">

          {/* Free Plan */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className={`card h-100 shadow-sm border-0 ${styles.pricingItem}`}>
              <div className="card-body">
                <h3 className="card-title">Free Plan</h3>
                <h4 className="text-primary">
                  <sup>$</sup>0<span className="text-muted"> / month</span>
                </h4>
                <ul className={`list-unstyled my-4 text-start ${styles.featureList}`}>
                  <li><i className="bi bi-check text-success me-2"></i>Quam adipiscing vitae proin</li>
                  <li><i className="bi bi-check text-success me-2"></i>Nec feugiat nisl pretium</li>
                  <li><i className="bi bi-check text-success me-2"></i>Nulla at volutpat diam uteera</li>
                  <li className={styles.na}><i className="bi bi-x text-danger me-2"></i>Pharetra massa massa ultricies</li>
                  <li className={styles.na}><i className="bi bi-x text-danger me-2"></i>Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="btn btn-outline-primary w-100">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Business Plan */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className={`card h-100 shadow border-primary border-2 ${styles.featured}`}>
              <div className="card-body">
                <h3 className="card-title text-primary">Business Plan</h3>
                <h4 className="text-primary">
                  <sup>$</sup>29<span className="text-muted"> / month</span>
                </h4>
                <ul className={`list-unstyled my-4 text-start ${styles.featureList}`}>
                  <li><i className="bi bi-check text-success me-2"></i>Quam adipiscing vitae proin</li>
                  <li><i className="bi bi-check text-success me-2"></i>Nec feugiat nisl pretium</li>
                  <li><i className="bi bi-check text-success me-2"></i>Nulla at volutpat diam uteera</li>
                  <li><i className="bi bi-check text-success me-2"></i>Pharetra massa massa ultricies</li>
                  <li><i className="bi bi-check text-success me-2"></i>Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="btn btn-primary w-100">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Developer Plan */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className={`card h-100 shadow-sm border-0 ${styles.pricingItem}`}>
              <div className="card-body">
                <h3 className="card-title">Developer Plan</h3>
                <h4 className="text-primary">
                  <sup>$</sup>49<span className="text-muted"> / month</span>
                </h4>
                <ul className={`list-unstyled my-4 text-start ${styles.featureList}`}>
                  <li><i className="bi bi-check text-success me-2"></i>Quam adipiscing vitae proin</li>
                  <li><i className="bi bi-check text-success me-2"></i>Nec feugiat nisl pretium</li>
                  <li><i className="bi bi-check text-success me-2"></i>Nulla at volutpat diam uteera</li>
                  <li><i className="bi bi-check text-success me-2"></i>Pharetra massa massa ultricies</li>
                  <li><i className="bi bi-check text-success me-2"></i>Massa ultricies mi quis hendrerit</li>
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
