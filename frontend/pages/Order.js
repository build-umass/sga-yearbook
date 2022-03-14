import React from "react";

export default function Order() {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <span className="subheading">Get your yearbook</span>
        <h2 className="heading-secondary">Class of 2022 yearbook</h2>
      </div>
      <div className="container">
        <div className="cta-text-box">
          <h3 className="heading-tertiary">
            Order <em>before March 21st</em> to get your hands on a book in time
            for Commencement!
          </h3>
          <p className="cta-description">
            Order your Class of 2022 hardcover yearbook for just $30! Here's
            what you need to know about ordering:
          </p>
          <ul>
            <li>
              Your order today will be ready for pickup on-campus in May 2022,
              including at the{" "}
              <a
                className="cta-link"
                href="https://www.umass.edu/commencement/"
              >
                Commencement Fair.
              </a>
            </li>
            <li>
              We will also accept orders at the Commencement Fair, which will be
              ready for local pickup or domestic shipping in June.
            </li>
            <li>
              Please follow our socials at{" "}
              <a
                className="cta-link"
                href="https://www.instagram.com/umassindex/"
              >
                @umassindex
              </a>{" "}
              for updates!
            </li>
            <li>
              If you would prefer to pay using a check, or you have any
              questions or concerns, please email us at{" "}
              <a className="cta-link" href="mailto:umassindex.gmail.com">
                umassindex@gmail.com
              </a>
              !
            </li>
          </ul>
        </div>
        <a
          className="btn-order"
          href="https://www.umass.edu/sga/index_preorder/"
          rel="noreferrer noopener"
          target="_blank"
        >
          ORDER NOW !
        </a>
      </div>
    </section>
  );
}
