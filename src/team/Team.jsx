import React from "react";
import img1 from "./team_imgs/team-1.jpg";
import img2 from "./team_imgs/team-2.jpg";
import img3 from "./team_imgs/team-3.jpg";
import img4 from "./team_imgs/team-4.jpg";

import styles from "./Team.module.css";

function Team() {
  return (
    <section id="Team" className={styles.team}>
      {/* section heading  */}
      <div className={`container ${styles.section_heading}`}>
        <div className="heading_content text-center">
          <h1>team</h1>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-3">
            <div className={`${styles.team_card} card shadow`}>
              <div className={styles.member_img}>
                <img src={img1} className="card-img-top" alt="img not found" />
                <div className={styles.social}>
                  <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Walter White</h5>
                <small>Chief Executive Officer</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`${styles.team_card} card shadow`}>
            <div className={styles.member_img}>
                <img src={img2} className="card-img-top" alt="img not found" />
                <div className={styles.social}>
                  <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Sarah Jhonson</h5>
                <small>Accountant</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`${styles.team_card} card shadow`}>
            <div className={styles.member_img}>
                <img src={img3} className="card-img-top" alt="img not found" />
                <div className={styles.social}>
                  <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Walter White</h5>
                <small>CTO</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`${styles.team_card} card shadow`}>
            <div className={styles.member_img}>
                <img src={img4} className="card-img-top" alt="img not found" />
                <div className={styles.social}>
                  <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Amanda Jepson</h5>
                <small>Product Manager</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
