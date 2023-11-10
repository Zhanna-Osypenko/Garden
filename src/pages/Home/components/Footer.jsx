import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact__box">
            <div className="footer-contact">
              <h5>Contact</h5>
              <h1>+49 999 999 99 99</h1>
              <div className="footer-contact__icon">
                <figure className="instagram">
                  <img src="/Footer/insta2.svg" alt="Instagram" />
                  <figcaption>Instagram</figcaption>
                </figure>
                <figure className="whatsapp">
                  <img src="/Footer/watsup1.png" alt="whatsapp" />
                  <figcaption>WhatsApp</figcaption>
                </figure>
              </div>
            </div>
            <div className="footer-address">
              <h5>Address</h5>
              <a href="">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
              <p>Working Hours:</p>
              <p>24 hours a day</p>
            </div>
          </div>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1784.5581615734045!2d13.37394724940206!3d52.50793860235131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1699608622645!5m2!1sru!2sde"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
