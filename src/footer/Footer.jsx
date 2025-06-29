import React from "react";
import styles from "./footer.module.css";
function Footer() {
  return (
    <section>
      <div className={styles.footer_background}>
        <div className="container">
          <footer class={styles.footer}>
            <div class={`${styles.footer_top} container`}>
              <div class={styles.footer_row}>
                <div class={styles.footer_about}>
                  <a href="index.html" class={styles.logo}>
                    <span class={styles.sitename}>OnePage</span>
                  </a>
                  <div class={styles.footer_contact}>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                    <p>
                      <strong>Phone:</strong> +1 5589 55488 55
                    </p>
                    <p>
                      <strong>Email:</strong> info@example.com
                    </p>
                  </div>
                  <div class={styles.social_links}>
                    <a href="#">
                      <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div class={styles.footer_links}>
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

                <div class={styles.footer_links}>
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

                <div class={styles.footer_links}>
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

            <div class={`container ${styles.copyright}`}>
              <p>
                © <strong class="sitename">OnPage</strong> All Rights Reserved
              </p>
              <div class="credits">
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
        <i class="fa-solid fa-angle-up"></i>
      </a>
    </section>
  );
}

export default Footer;
