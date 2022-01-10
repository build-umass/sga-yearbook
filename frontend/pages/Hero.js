import React from "react";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">The Index</h1>
          <p className="hero-description-1">
            UMass Amherst's yearbook with 136 years of history
          </p>
          <blockquote className="hero-description-2">
            “At the end of each year, the students of Massachusetts Agricultural
            College and its successor institutions issued a yearbook known as
            the Index... The Index contained complete lists of students and
            student organizations, faculty, and officers of the college, along
            with occasionally humorous (and occasionally-humorous) vignettes of
            life on campus.”
          </blockquote>
          <figcaption className="hero-description-3">
            <cite>
              &mdash; Special Collections and University Archives, <br />
              W.E.B. Du Bois Library
            </cite>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
