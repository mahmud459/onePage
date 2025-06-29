import React from "react";
import styles from "./footer.module.css";
function Footer() {
  return (
    <section>
      <div className={styles.footer_background}>
        <div className="container">
          <footer className={styles.footer}>
            <div className={`${styles.footer_top} container`}>
              <div className={styles.footer_row}>
                <div className={styles.footer_about}>
                  <a href="index.html" className={styles.logo}>
                    <span className={styles.sitename}>OnePage</span>
                  </a>
                  <div className={styles.footer_contact}>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                    <p>
                      <strong>Phone:</strong> +1 5589 55488 55
                    </p>
                    <p>
                      <strong>Email:</strong> info@example.com
                    </p>
                  </div>
                  <div className={styles.social_links}>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className={styles.footer_links}>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.footer_links}>
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Product Management</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Graphic Design</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.footer_links}>
                  <h4>Hic solutasetp</h4>
                  <ul>
                    <li>
                      <a href="#">Molestiae accusamus iure</a>
                    </li>
                    <li>
                      <a href="#">Excepturi dignissimos</a>
                    </li>
                    <li>
                      <a href="#">Suscipit distinctio</a>
                    </li>
                    <li>
                      <a href="#">Dilecta</a>
                    </li>
                    <li>
                      <a href="#">Sit quas consectetur</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`container ${styles.copyright}`}>
              <p>
                © <strong className="sitename">OnPage</strong> All Rights Reserved
              </p>
              <div className="credits">
                Designed by{" "}
                <a href="https://mahmud459.github.io/Medilab-Hospital/">
                  Mahmud Mari
                </a>{" "}
                | Distributed by{" "}
                <a href="https://mahmud459.github.io/Medilab-Hospital/">
                  Mahmud Mari
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div id="Home"></div>
      <a href="#top" className={styles.scroll_top}>
        <i className="fa-solid fa-angle-up"></i>
      </a>
    </section>
  );
}

export default Footer;
