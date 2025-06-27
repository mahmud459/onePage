import React from "react";
import styles from "./Home.module.css";

const Navbar = () => {
  return (
    <section id="Home">
      <div className="container"></div>
      <header>
        {/* start navbar */}
        <div className="main-center">
          <div className={""}>
            <div className={styles.center_header}>
              <div className={styles.left_center_header}>
                <a href="#">
                  <h1>OnePage</h1>
                </a>
              </div>
              <nav>
                <ul className="mb-0">
                  <li>
                    <a href="#Home">Home</a>
                  </li>
                  <li>
                    <a href="#About">About</a>
                  </li>
                  <li>
                    <a href="#Services">Services</a>
                  </li>
                  <li>
                    <a href="#Departments">Portfolio</a>
                  </li>
                  <li>
                    <a href="#Doctors">Team</a>
                  </li>
                  <li className={"nav-item dropdown"}>
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className={"dropdown-menu "}>
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      {/* <li><hr class="dropdown-divider"></li> */}
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#Contact">Contact</a>
                  </li>
                </ul>
              </nav>

              <div className={styles.right_center_header}>
                <a className={styles.button} href="#appointment">
                  Git Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </section>
  );
};

export default Navbar;
