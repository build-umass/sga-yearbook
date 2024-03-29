import Image from "next/image";
import logo from "../assets/1870_Cover.png";
import Button from "react-bootstrap/Button";
import React from "react";

export default function ProductPage() {
  return (
    <div className="details">
      <div className="big-img">
        <Image src={logo} alt="site logo" />
      </div>
      <div className="box">
        <div className="row">
          <h2 style={{ color: "black" }}>2022 Yearbook</h2>
        </div>
        <p className="main-text">
          <div style={{ fontWeight: "bold", color: "black" }}>
            Preorder your 2022 UMass yearbook at the discounted price of $20 for
            a limited time!
          </div>
          Your preorder today will be available for pickup on-campus in
          late-April and early-May of 2022, at the end of the Spring semester.
          If you would like to order a yearbook with domestic shipping instead,
          we will begin offering shipping as an option in December-January.
          Please follow our socials at @umassindex on Instagram for updates and
          pertinent information!
        </p>
        <p className="main-text">
          The Index is UMass Amherst’s student-published yearbook, and the
          oldest yearbook in New England, having originally been published in
          1870. It chronicles anything and everything about UMass undergraduate
          student life, including memories, current events, clubs, agencies,
          athletics, student works of art, and lots of pictures. For seniors,
          the yearbook also includes the graduating class, ordered by academic
          college, and signature pages. In the 2021-2022 academic year, the
          Index is resuming publication after a 16-year hiatus!
        </p>
        <Button
          type="submit"
          href="https://www.umass.edu/sga/index_preorder/"
          className="button"
          variant="secondary"
          style={{ color: "white" }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
