import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Collection from "../components/Collection";
import FeaturedCollection from "../components/FeaturedCollection";
import FeaturedProduct from "../components/FeaturedProduct";

import InstaGallery from "../components/InstaGallery";

import Message from "../components/Message";
import Loader from "../components/Loader";

import { listProducts, listProductsBest } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productBestList = useSelector((state) => state.productBestList);
  const {
    loading: loadingBest,
    error: errorBest,
    products: productsBest,
  } = productBestList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listProductsBest());
  }, [dispatch]);

  return (
    <>
      <div className="heritage">
        <div className="heritage-content">
          <img src="/images/heritage-of-luxury.png" alt="" />
          <p>
            "Niche Fragrances are very exclusive , characteristic and artisanal
            fragrances with emphasis on art and creativity."
          </p>
          <img src="/images/heritage-banner.jpg" alt="" />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="product-section" style={{ backgroundColor: `white` }}>
          <div className="container">
            <Message body={error} />
          </div>
        </div>
      ) : (
        <Collection heading="new arrivals" copy="" products={products} />
      )}
      {loadingBest ? (
        <Loader />
      ) : errorBest ? (
        <div className="product-section" style={{ backgroundColor: `white` }}>
          <div className="container">
            <Message body={errorBest} />
          </div>
        </div>
      ) : (
        <Collection
          heading="best sellers"
          copy=""
          textColor=""
          bgColor="#e7e4e0"
          products={productsBest}
        />
      )}
      <div className="creative-exchange">
        <img src="/images/creative-exchange.png" alt="" />
      </div>
      <FeaturedCollection
        heading="featured collection"
        copy=""
        subheading="irish leather celtic kit"
        subcopy="One of those icy, biting mornings. the sun peeks through the heavy grey clouds. the wind slips beneath your clothes. morning dew soaks the grass. discover the world of irish leather with a 100 ml celtic gift set that includes a shower gel, a shampoo, a conditioner, a body cream, a scented soap, and an irish leather fragrance refill for your memo paris purse spray to experience the scent of the wild irish countryside."
        products={products}
      />
      <FeaturedProduct
        product={{
          _id: 1234,
          name: "hermetica",
          brand: "hermetica",
          description: [
            "Hermetica Paris is a range of clean, alcohol-free and moisturizing fragrances. Their formulas offer the perfect alchemy between perfume and skin, with a long-lasting effect. The result of this innovation is four collections of fragrances, plus Source¹ – a unique fragrance that can be layered on top of any fragrance to give it a modern and vibrant touch.",
            "Recently the brand has bee rewarded with “The Beauty Award” from Australia and the “Dutch Beauty Award” from Holland. With the “Byrdie” prize from US.",
          ],
        }}
      />
      <InstaGallery />
    </>
  );
};

export default HomeScreen;
