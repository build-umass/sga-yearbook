import React from "react";

export default function Order() {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <span className="subheading">Get your yearbook</span>
        <h2 className="heading-secondary">Order your Class of 2022 yearbook</h2>
      </div>

      <div className="container">
        <div className="cta-text-box">
          <h3 className="heading-tertiary">
            Just $20 if you order before February 14th!
          </h3>
          <p className="cta-description">
            Order your Class of 2022 UMass yearbook at the discounted price of
            $20 before February 14th! <br /> Here's what you need to know about
            ordering:
          </p>
          <ul>
            <li>
              Your order will be ready for pickup on-campus in late April -
              early May 2022, including at the{" "}
              <a
                className="cta-link"
                href="https://www.umass.edu/commencement/"
              >
                Commencement Fair.
              </a>
            </li>
            <li>
              A few dozen yearbooks will be leftover for purchase in-person in
              May.
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
              Email us at{" "}
              <a className="cta-link" href="mailto:umassindex.gmail.com">
                umassindex@gmail.com
              </a>{" "}
              with any questions or concerns.
            </li>
          </ul>
        </div>
        <a
          className="btn-order"
          href="https://www.umass.edu/sga/index_preorder/"
          rel="noreferrer noopener"
          target="_blank"
        >
          ORDER NOW!
        </a>
      </div>
    </section>
  );
}
