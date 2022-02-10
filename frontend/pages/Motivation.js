import React from "react";
import Image from "next/image";
import union from "../assets/history-1.jpg";

export default function Motivation() {
  return (
    <section className="section-motivation" id="motivation">
      <div className="container">
        <span className="subheading">Our motivation & 2022 Index</span>
        <h2 className="heading-secondary">
          It's time to revive the UMass yearbook
        </h2>
      </div>

      <div className="container grid grid--1--cols">
        <div className="motivation-img-box">
          <Image src={union} />
          <span>
            "The day everything changed", students and faculty around television
            in the Student Union (2002)
          </span>
        </div>
        <div className="motivation-text-box">
          <p className="motivation-description">
            When the Index stopped publishing in 2006, it probably sounded great
            to replace a yearbook with something like a website or a Facebook
            group. Since then, however, it has become clear that the Internet
            can be pretty temporary: social media comes and goes, websites stop
            being maintained and posts get buried under a mountain of newer
            posts.
          </p>
        </div>
        <div className="motivation-text-box">
          <p className="motivation-description">
            Yearbooks offer a unique medium of reminiscence that remains
            relevant. The last couple years have been a whirlwind &mdash; from
            the pandemic itself to incredible movements for justice sweeping the
            country and uncertainty in all aspects of nearly everyone's lives.
            During historic times like these, yearbooks offer the best account
            of what it's like to be in our shoes as UMass students.
          </p>
        </div>
        <div className="motivation-text-box">
          <p className="motivation-description">
            We're so excited to begin taking orders for the first yearbook at
            UMass after a 16-year hiatus. The 2021-2022 Index will be a timeless
            keepsake, featuring pieces of UMass life that we all experienced
            together. For seniors, the yearbook also includes the graduating
            class, ordered by academic college, and signature pages.
          </p>
        </div>
      </div>
    </section>
  );
}
