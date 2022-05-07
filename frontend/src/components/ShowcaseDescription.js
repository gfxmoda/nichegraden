import React from "react";

const ShowcaseDescription = ({ category }) => {
  return (
    <>
      {category === "for-him" ? (
        <p>
          Our extensive collection of men’s fragrances covers every style and
          taste, from cutting-edge modern style to ageless classics.
        </p>
      ) : category === "for-her" ? (
        <p>
          Our extensive collection of women’s fragrances covers every style and
          taste, from cutting-edge modern style to ageless classics.
        </p>
      ) : category === "unisex" ? (
        <p>
          Our extensive collection of unisex fragrances covers every style and
          taste, from cutting-edge modern style to ageless classics.
        </p>
      ) : category === "for-home" ? (
        <p>
          Exclusive collections of products and accessories suited for any style
          of home, Choose from a variety of scented Candles, Diffusers and Room
          Sprays that are fit to your liking.
        </p>
      ) : category === "skin-care" ? (
        <p>
          Whether it is Bath sets, Lotions, Hair treatment or face oil, cream,
          and powder, Our collections include all you need and more for a
          healthy and refreshing skin routine.
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default ShowcaseDescription;
