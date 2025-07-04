import React from "react";
import styles from "./services.module.css";
function Services() {
  return (
    <>
    <section id="Services" className={styles.services}>
      {/* section heading  */}
      <div
        className={` ${styles.section_heading} ${styles.item_cyan} container`}
      >
        <div className="heading_content text-center">
          <h1>About Us</h1>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row mb-4 g-3">
            {/* first item  */}
          <div
            className="col-lg-4 col-md-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className={`${styles.service_item} ${styles.item_cyan} position-relative`}
            >
              <div className={styles.icon}>
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth="0"
                    fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Nesciunt Mete</h3>
              </a>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
            </div>
          </div>
          {/* item tow  */}
          <div
            className="col-lg-4 col-md-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className={`${styles.service_item} ${styles.item_tow} position-relative`}
            >
              <div className={styles.icon}>
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                </svg>
                <i className="fa-solid fa-tower-broadcast"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Nesciunt Mete</h3>
              </a>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
            </div>
          </div>
            {/* item three  */}
            <div
            className="col-lg-4 col-md-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className={`${styles.service_item} ${styles.item_three} position-relative`}
            >
              <div className={styles.icon}>
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                </svg>
                <i className="fa-solid fa-disease"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Nesciunt Mete</h3>
              </a>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
            </div>
          </div>
</div>
          {/* second roww  */}
          <div className="row g-3">

            {/* first-item  */}
            <div
            className="col-lg-4 col-md-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className={`${styles.service_item} ${styles.item_foure} position-relative`}
            >
              <div className={styles.icon}>
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth="0"
                    fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <i className="fa-solid fa-file-contract"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Nesciunt Mete</h3>
              </a>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
            </div>
          </div>
            {/* second item  */}
            <div
            className="col-lg-4 col-md-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className={`${styles.service_item} ${styles.item_five} position-relative`}
            >
              <div className={styles.icon}>
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth="0"
                    fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Nesciunt Mete</h3>
              </a>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
            </div>
          </div>
            {/* third item  */}
            <div
            className="col-lg-4 col-md-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className={`${styles.service_item} ${styles.item_six} position-relative`}
            >
              <div className={styles.icon}>
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth="0"
                    fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  ></path>
                </svg>
                <i className="fa-regular fa-message"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Nesciunt Mete</h3>
              </a>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
            </div>
          </div>
          </div>
      </div>
    </section>

    {/* second section start ---- */}
    <section id="call-to-action" className={styles.call_to_action}>

      <div className="container">
        <div className="row justify-content-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className={styles.cta_btn} href="#">Call To Action</a>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}
export default Services;
