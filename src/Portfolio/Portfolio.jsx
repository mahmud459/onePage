import React, { useEffect } from 'react';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import imagesLoaded from 'imagesloaded';
import styles from './Portfolio.module.css';

// Images
import port1 from './portfoilio_imgs/masonry-portfolio-1.jpg';
import port2 from './portfoilio_imgs/masonry-portfolio-2.jpg';
import port3 from './portfoilio_imgs/masonry-portfolio-3.jpg';
import port4 from './portfoilio_imgs/masonry-portfolio-4.jpg';
import port5 from './portfoilio_imgs/masonry-portfolio-5.jpg';
import port6 from './portfoilio_imgs/masonry-portfolio-6.jpg';
import port7 from './portfoilio_imgs/masonry-portfolio-7.jpg';
import port8 from './portfoilio_imgs/masonry-portfolio-8.jpg';
import port9 from './portfoilio_imgs/masonry-portfolio-9.jpg';

const Portfolio = () => {
    useEffect(() => {
        const grid = document.querySelector('.' + styles.isotopeContainer);
        if (!grid) return;
    
        let iso;
    
        // Resize handler
        const handleResize = () => {
          if (iso) iso.layout();
        };
    
        // Define filter click handler BEFORE using it
        function handleFilterClick(e) {
          const current = document.querySelector(`.${styles.filters} .${styles.active}`);
          if (current) current.classList.remove(styles.active);
          e.currentTarget.classList.add(styles.active);
          const filter = e.currentTarget.getAttribute('data-filter');
          iso.arrange({ filter });
    
          // Re-layout after filtering and image loading
          imagesLoaded(grid, () => {
            iso.layout();
          });
        }
    
        // Wait for images to load
        imagesLoaded(grid, () => {
          // Init Isotope
          iso = new Isotope(grid, {
            itemSelector: '.' + styles.portfolioItem,
            layoutMode: 'masonry',
          });
    
          // Init Lightbox
          GLightbox({ selector: '.glightbox' });
    
          // Add event listeners to filter buttons
          const filterButtons = document.querySelectorAll(`.${styles.filters} li`);
          filterButtons.forEach((btn) => {
            btn.addEventListener('click', handleFilterClick);
          });
    
          // Add resize event listener
          window.addEventListener('resize', handleResize);
        });
    
        // Cleanup on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
          const filterButtons = document.querySelectorAll(`.${styles.filters} li`);
          filterButtons.forEach((btn) => {
            btn.removeEventListener('click', handleFilterClick);
          });
          if (iso) iso.destroy();
        };
      }, []);

  const portfolioData = [
    { category: 'filter-app', img: port1, title: 'App 1' },
    { category: 'filter-product', img: port2, title: 'Product 1' },
    { category: 'filter-branding', img: port3, title: 'Branding 1' },
    { category: 'filter-app', img: port4, title: 'App 2' },
    { category: 'filter-product', img: port5, title: 'Product 2' },
    { category: 'filter-branding', img: port6, title: 'Branding 2' },
    { category: 'filter-app', img: port7, title: 'App 3' },
    { category: 'filter-product', img: port8, title: 'Product 3' },
    { category: 'filter-branding', img: port9, title: 'Branding 3' },
  ];

  return (
    <section id="Portfolio">
          {/* section heading  */}
      <div className={`container ${styles.section_heading}`}>
        <div className="heading_content text-center">
          <h1>portfolio</h1>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
      </div>

    <div className="container py-4">
      <div className={styles.isotopeLayout}>
        {/* Filter Buttons */}
        <ul className={styles.filters} data-aos="fade-up">
          <li data-filter="*" className={styles.active}>All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Card</li>
          <li data-filter=".filter-branding">Web</li>
        </ul>

        {/* Grid Items */}
        <div className={`row gy-4 ${styles.isotopeContainer}`} data-aos="fade-up" data-aos-delay="200">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 ${styles.portfolioItem} ${item.category}`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={`${styles.card_img} img-fluid`}
                />
              </div>
              <div className={styles.portfolioInfo}>
                <div>
                <h4>{item.title}</h4>
                <p>Lorem ipsum, dolor sit</p>
                </div>
                <div>
                <a
                  href={item.img}
                  className="glightbox preview-link"
                  data-gallery={`portfolio-gallery-${item.category}`}
                  title={item.title}
                >
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Portfolio;
