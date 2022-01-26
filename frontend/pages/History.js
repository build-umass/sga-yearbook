import React from "react";
import Image from "next/image";
import historyFirst from "../assets/history-first.jpg";
import historyBaseball from "../assets/history-baseball.jpg";
import historyConcert from "../assets/history-concert.jpg";

export default function History() {
  return (
    <section className="section-history" id="history">
      <div className="container">
        <span className="subheading">Story</span>
        <h2 className="heading-secondary">History of the Index</h2>
      </div>

      <div className="container grid grid--2--cols">
        <div className="history-text-box">
          <h3 className="heading-tertiary">How it started</h3>
          <p className="history-description">
            Once the oldest yearbook in New England, the Index has been
            published by UMass Amherst students since 1870. It was first created
            by the third graduating class of what was then the Massachusetts
            Agricultural College. For the next 136 years straight, the Index
            chronicled the undergraduate life at UMass.
          </p>
        </div>
        <div className="history-img-box">
          <Image src={historyFirst} />
          <span>Opening pages of the first volume (1870)</span>
        </div>

        <div className="history-img-box">
          <Image src={historyBaseball} />
          <span>Baseball Association (1900)</span>
        </div>
        <div className="history-text-box">
          <h3 className="heading-tertiary">How it evolved</h3>
          <p className="history-description">
            In its earliest years, the Index had few illustrations. Before 1882,
            each number contained only a handful of comic drawings of scenes on
            campus, and for several years after that date, the volumes were
            issued with only a single photographic frontispiece. By the turn of
            the century, however, photographs began to proliferate in the Index.
          </p>
        </div>
        <div className="history-text-box">
          <h3 className="heading-tertiary">16-year hiatus</h3>
          <p className="history-description">
            Beginning with images of the faculty, class portraits, and images of
            sports teams and campus views, the yearbook expanded by 1912 to
            include photographs of each member of the junior and senior class.
            Memories, current events, clubs, agencies, athletics, student works
            of art, and lots of pictures were showcased in the collection.
            Unfortunately, the Index ceased publication after the 2005-2006
            academic year.
          </p>
        </div>
        <div className="history-img-box">
          <Image src={historyConcert} />
          <span>Spring concert by the Campus Pond (1980s)</span>
        </div>
      </div>
    </section>
  );
}
