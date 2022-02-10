import React from "react";
import Image from "next/dist/client/image";
import logoPNG from "../public/indexLogoInline.png";

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#">
        <Image
          className="logo-img"
          src={logoPNG}
          width="420rem"
          height="45rem"
        ></Image>
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#history">
              History
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#motivation">
              Motivation
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#cta">
              Order
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}
