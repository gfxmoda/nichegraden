import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import Collection from "../components/Collection";
import FeaturedCollection from "../components/FeaturedCollection";
import FeaturedProduct from "../components/FeaturedProduct";

import InstaGallery from "../components/InstaGallery";

import Message from "../components/Message";
import Loader from "../components/Loader";

import { listProducts, listProductsBest } from "../actions/productActions";

const something = (
  <>
    <div
      className="test"
      style={{
        backgroundColor: "green",
        width: "100vw",
        heigh: "100vh",
        zIndex: "10000",
      }}
    >
      welcome
    </div>
  </>
);

const Test2 = () => {
  const history = useHistory();
  console.log(history);
  return <>{something}</>;
};

export default Test2;
