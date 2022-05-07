import React from "react";
import About from "../components/About";
import CTA from "../components/CTA";

import InstaGallery from "../components/InstaGallery";

const OurGardenScreen = () => {
  return (
    <div>
      <div className="about-section">
        <About
          align="start"
          image="our-garden-1"
          heading="About Niche Garden"
          text={`The concept Niche Garden is the first exclusive Niche Fragrance concept boutique in Kingdom of Bahrain. Owned by Alhawaj Group, the pioneers in the field of luxury retail , Niche Garden represents the world’s finest high-end niche fragrance brands which is the most emerging trend in fragrance world today.`}
          button="no"
        />
        <About
          align="end"
          image="our-garden-2"
          heading="Our boutiques"
          text={`Niche Garden opened its first luxurious boutique at the Avenues Mall, Kingdom of Bahrain in the year 2018. The official opening of the aesthetically designed boutique was held under the patronage of Her Excellency Princess Shaikha Thajba bint Salman Al Khalifa,in the presence of Ms. Cecile Longe, Honourable Ambassador of the Republic of France along with a guest list of eminent personalities. The Niche Garden boutique represents the world’s finest high-end niche fragrance brands, and is regarded as one of the most preferred luxurious Niche Fragrance destination today.`}
          button="yes"
          link="/our-boutiques"
        />
        <About
          align="start"
          image="our-garden-3"
          heading="Our Blog"
          text={`Check out our latest news and updates of our fancy and exclusive brands with our blog site. Read and discover what is trending in the perfume world!`}
          button="yes"
          link="/blog"
        />
      </div>
      <CTA />
      <div className="container position-fixer-container">
        <img
          className="position-fixer"
          src="/images/heritage-of-luxury.png"
          alt=""
        />
      </div>
      <InstaGallery />
    </div>
  );
};

export default OurGardenScreen;
