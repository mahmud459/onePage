// import 'aos/dist/aos.css';
// import AOS from 'aos';
import { useEffect, useState } from "react";
import aboutImg from "./about-imgs/about.jpg";
import styles from "./about.module.css";
// brand imgs 
import brand1 from './about-imgs/client-1.png'
import brand2 from './about-imgs/client-2.png'
import brand3 from './about-imgs/client-3.png'
import brand4 from './about-imgs/client-4.png'
import brand5 from './about-imgs/client-5.png'
import brand6 from './about-imgs/client-6.png'

function ABOUT() {
  useEffect(() => {
    // AOS.init({ once: true });
  }, []);
  // Example manual counter (can be replaced by a library like react-countup)
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    support: 0,
    workers: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        clients: Math.min(prev.clients + 5, 232),
        projects: Math.min(prev.projects + 10, 521),
        support: Math.min(prev.support + 30, 1463),
        workers: Math.min(prev.workers + 1, 15),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="About">
      {/* section heading  */}
      <div className={`container ${styles.section_heading}`}>
        <div className="heading_content text-center">
          <h1>About Us</h1>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>
      {/* section content start  */}

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={styles.about_left}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p>
                {" "}
                <span>
                  <i className="fa-solid fa-check pe-2"></i>
                </span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-check pe-2"></i>
                </span>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-check pe-2"></i>
                </span>
                Ullamco laboris nisi ut aliquip ex ea commodo
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.about_right}>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div className="text-start mt-4">
                <a className={styles.button} href="#appointment">
                  reade more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start counter div ----------- */}

      <div className={`container-fluid ${styles.counter_bg}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="stats-wrapper d-flex justify-content-around text-center position-relative flex-wrap">
                {/* Item 1 */}
                <div
                  className="stats-item"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    {/* <FaSmile /> */}
                  </div>
                  <span style={{ fontSize: "40px", fontWeight: "700" }}>
                    {counters.clients}
                  </span>
                  <p>Happy Clients</p>
                </div>

                {/* Item 2 */}
                <div
                  className="stats-item"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    {/* <FaBookOpen /> */}
                  </div>
                  <span style={{ fontSize: "40px", fontWeight: "700" }}>
                    {counters.projects}
                  </span>
                  <p>Projects</p>
                </div>

                {/* Item 3 */}
                <div
                  className="stats-item"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    {/* <FaHeadset /> */}
                  </div>
                  <span style={{ fontSize: "40px", fontWeight: "700" }}>
                    {counters.support}
                  </span>
                  <p>Hours Of Support</p>
                </div>

                {/* Item 4 */}
                <div
                  className="stats-item"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    {/* <FaUsers /> */}
                  </div>
                  <span style={{ fontSize: "40px", fontWeight: "700" }}>
                    {counters.workers}
                  </span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start second div in about --------  */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className={`${styles.img_div} position-relative`}>
              <span>
                <a href=""><i className="fa-solid fa-circle-play fa-beat-fade"></i></a>
                
              </span>
              <img className="img-fluid" src={aboutImg} alt="img not found" />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.about_right}>
              <h2 className="mb-3">
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h2>

              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p>
                {" "}
                <span>
                <i className="fa-solid fa-check-double pe-2"></i>
                </span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                <span>
                <i className="fa-solid fa-check-double pe-2"></i>
                </span>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
              <p>
                <span>
                <i className="fa-solid fa-check-double pe-2"></i>
                </span>
                
Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </p>
              <p className="mt-4">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
          </div>
        </div>
      </div>

      {/* start third div in about --------  */}
      <div className={`${styles.brtand_bg} container-fluid`}>


<div className="container">
    <div className={`${styles.brand_content}`}>
    <div> <a href="#"><img src={brand1} alt="" /></a>  </div>
    <div> <a href="#"><img src={brand2} alt="" /></a></div>
    <div> <a href="#"><img src={brand3} alt="" /></a> </div>
    <div> <a href="#"><img src={brand4} alt="" /></a> </div>
    <div> <a href="#"><img src={brand5} alt="" /></a> </div>
    <div> <a href="#"><img src={brand6} alt="" /></a> </div>

    </div>
</div>
      </div>


    </section>
  );
}
export default ABOUT;
