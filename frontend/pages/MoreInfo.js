import React from "react";
import Image from "next/image";
import history1 from "../assets/history-1.jpg";

export default function MoreInfo() {
  return (
    <section className="section-more">
      <div className="container">
        <div className="more-text-box center-text">
          <p className="more-text">
            Physical copies of previous editions can be found at the 20th floor
            of W.E.B. Du Bois Library. <br />
            All digital copies of the Index are publically available online as
            well.
          </p>
          <br />
          <a
            className="link"
            rel="noreferrer noopener"
            target="_blank"
            href="http://scua.library.umass.edu/youmass/doku.php?id=yearbooks"
          >
            Go to Online Archive &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
