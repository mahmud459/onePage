import React from "react";
import styles from "./questions.module.css";

function Questions() {
  return (
    <section id="question" className={styles.question}>
      {/* section heading  */}
      <div className={`container ${styles.section_heading}`}>
        <div className="heading_content text-center">
          <h1>Frequently Asked Questions</h1>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className={`${styles.accordion_item} accordion-item`}>
                <h2 className={`${styles.accordion_header} accordion-header`}>
                  <button
                    className={`${styles.accordion_button} accordion-button`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className={`${styles.accordion_body}  accordion-body`}>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It’s also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className={`${styles.accordion_item} accordion-item`}>
                <h2 className={`${styles.accordion_header} accordion-header`}>
                  <button
                    className={`${styles.accordion_button} accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse2"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapse2"
                  >
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse2"
                  className="accordion-collapse collapse"
                >
                  <div className={`${styles.accordion_body}  accordion-body`}>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It’s also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>

              <div className={`${styles.accordion_item} accordion-item`}>
                <h2 className={`${styles.accordion_header} accordion-header`}>
                  <button
                    className={`${styles.accordion_button} accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse3"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapse3"
                  >
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse3"
                  className="accordion-collapse collapse "
                >
                  <div className={`${styles.accordion_body}  accordion-body`}>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It’s also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className={`${styles.accordion_item} accordion-item`}>
                <h2 className={`${styles.accordion_header} accordion-header`}>
                  <button
                    className={`${styles.accordion_button} accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse4"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapse4"
                  >
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse4"
                  className="accordion-collapse collapse "
                >
                  <div className={`${styles.accordion_body}  accordion-body`}>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It’s also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className={`${styles.accordion_item} accordion-item`}>
                <h2 className={`${styles.accordion_header} accordion-header`}>
                  <button
                    className={`${styles.accordion_button} accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse5"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapse5"
                  >
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse5"
                  className="accordion-collapse collapse "
                >
                  <div className={`${styles.accordion_body}  accordion-body`}>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It’s also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className={`${styles.accordion_item} accordion-item`}>
                <h2 className={`${styles.accordion_header} accordion-header`}>
                  <button
                    className={`${styles.accordion_button} accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse6"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapse6"
                  >
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse6"
                  className="accordion-collapse collapse "
                >
                  <div className={`${styles.accordion_body}  accordion-body`}>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It’s also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
