import React from "react";
import { Paper, requirePropFactory } from "@material-ui/core";
import map from "lodash/map";
import range from "lodash/range";
import Image from "next/image";
import first_cover from "../assets/1870_Cover.png";
import last_cover from "../assets/2005_Cover.png";

export default function Gallery() {
  return (
    <section className="section-gallery" id="gallery">
      <div className="gallery">
        <div className="container center-text">
          <span className="subheading">Gallery</span>
          <h2 className="heading-secondary gallery-heading">
            Previous Editions
          </h2>
          <span className="subheading gallery-subheading">
            Click covers to see inside!
          </span>
        </div>

        <div className="gallery-roll">
          <Container />
        </div>
      </div>
    </section>
  );
}

const Container = () => {
  /*
    Unfortunately I could not figure out how to point images in index covers folder,
    so the cover images are hosted on my discord channel. 
    But all the images are included in index covers.
  */
  return (
    <div className="gallery-roll-box">
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index6981univ/page/n3/mode/2up"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930212931071778846/1870_Cover.jpg"
            alt="1870 Cover"
          />
        </a>
        <span>1870 Cover</span>
      </figure>
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index1900univ"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930215730429960243/1900_Cover.jpg"
            alt="1900 Cover"
          />
        </a>
        <span>1900 Cover</span>
      </figure>
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index1910univ"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930215730782277692/1910_Cover.jpg"
            alt="1910 Cover"
          />
        </a>
        <span>1910 Cover</span>
      </figure>
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index1920univ"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930215731101040720/1920_Cover.jpg"
            alt="1920 Cover"
          />
        </a>
        <span>1920 Cover</span>
      </figure>
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index1930univ"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930215731377872926/1930_Cover.jpg"
            alt="1930 Cover"
          />
        </a>
        <span>1930 Cover</span>
      </figure>
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index1950univ"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930215731721814046/1950_Cover.jpg"
            alt="1950 Cover"
          />
        </a>
        <span>1950 Cover</span>
      </figure>
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index1960univ"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930215731977662484/1960_Cover.jpg"
            alt="1960 Cover"
          />
        </a>
        <span>1960 Cover</span>
      </figure>
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index1970univ"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930215732233527338/1970_Cover.jpg"
            alt="1970 Cover"
          />
        </a>
        <span>1970 Cover</span>
      </figure>
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index1980univ"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930215732451639346/1980_Cover.jpg"
            alt="1980 Cover"
          />
        </a>
        <span>1980 Cover</span>
      </figure>
      <figure className="gallery-item">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://archive.org/details/index2005univ"
        >
          <img
            className="gallery-img"
            src="https://cdn.discordapp.com/attachments/929943014565113899/930215732757811230/2005_Cover.jpg"
            alt="2005 Cover"
          />
        </a>
        <span>2005 Cover</span>
      </figure>
    </div>
  );
};
