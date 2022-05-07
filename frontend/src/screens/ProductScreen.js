import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Collection from "../components/Collection";
import ProductDetails from "../components/ProductDetails";
import InstaGallery from "../components/InstaGallery";

import Message from "../components/Message";
import Loader from "../components/Loader";

import { listProducts, listProductDetails } from "../actions/productActions";

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDetails = useSelector((state) => state.productDetails);
  const { loadingDetails, errorDetails, product } = productDetails;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      {loadingDetails ? (
        <Loader />
      ) : errorDetails ? (
        <Message body={errorDetails} />
      ) : (
        <ProductDetails product={product} />
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message body={error} />
      ) : (
        <Collection
          heading="similar products"
          copy=""
          products={products.filter((e) => e.category === product.category)}
          textColor="#f7f3ed"
          bgColor="#282a38"
        />
      )}

      <InstaGallery />
    </div>
  );
};

export default ProductScreen;
