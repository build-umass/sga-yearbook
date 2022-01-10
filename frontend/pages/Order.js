import React from "react";

export default function Order() {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <span className="subheading">Get your yearbook</span>
        <h2 className="heading-secondary">Preorder your 2022 yearbook</h2>
      </div>

      <div className="container">
        <div className="cta-text-box">
          <h3 className="heading-tertiary">$20 for a limited time!</h3>
          <p className="cta-description">
            Preorder your 2022 UMass yearbook at the discounted price of $20 for
            a limited time! <br /> Here's what you need to know about order and
            shippment:
          </p>
          <ul>
            <li>
              Your preorder will be reday for pickup on-campus starting late
              April, 2022
            </li>
            <li>Domestic shipping begins in December-January</li>
            <li>
              Please follow our socials at{" "}
              <a
                className="cta-link"
                href="https://www.instagram.com/umassindex/"
              >
                @umassindex
              </a>{" "}
              on Instagram for updates!
            </li>
            <li>
              <a className="cta-link" href="mailto:umassindex.gmail.com">
                Email
              </a>{" "}
              us for any questions or concerns.
            </li>
          </ul>
        </div>
        <a
          className="btn-order"
          href="https://www.umass.edu/sga/index_preorder/"
          rel="noreferrer noopener"
          target="_blank"
        >
          PREORDER NOW!
        </a>
      </div>
    </section>
  );
}
