import React from "react";
import img1 from "./team_imgs/team-1.jpg";
import img2 from "./team_imgs/team-2.jpg";
import img3 from "./team_imgs/team-3.jpg";
import img4 from "./team_imgs/team-4.jpg";

import styles from "./Team.module.css";

function Team() {
  return (
    <section id="team" className={styles.team}>
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
        <div className="row">
          <div className="col-md-3">
            <div class={`${styles.team_card} card shadow`}>
              <div className={styles.member_img}>
                <img src={img1} class="card-img-top" alt="img not found" />
                <div class={styles.social}>
                  <a href="">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Walter White</h5>
                <small>Chief Executive Officer</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class={`${styles.team_card} card shadow`}>
            <div className={styles.member_img}>
                <img src={img2} class="card-img-top" alt="img not found" />
                <div class={styles.social}>
                  <a href="">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Sarah Jhonson</h5>
                <small>Accountant</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class={`${styles.team_card} card shadow`}>
            <div className={styles.member_img}>
                <img src={img3} class="card-img-top" alt="img not found" />
                <div class={styles.social}>
                  <a href="">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Walter White</h5>
                <small>CTO</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class={`${styles.team_card} card shadow`}>
            <div className={styles.member_img}>
                <img src={img4} class="card-img-top" alt="img not found" />
                <div class={styles.social}>
                  <a href="">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Amanda Jepson</h5>
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
