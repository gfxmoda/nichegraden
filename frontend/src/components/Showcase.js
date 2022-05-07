import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

// family aka mainAccords
import { brands, family, sizeInMl } from "../config/criteria";

import showcaseCategories from "../config/showcaseCategories";
import Loader from "./Loader";
import Message from "./Message";
import ProductCard from "./ProductCard";
import ShowcaseDescription from "./ShowcaseDescription";
import ShowcaseSortSelection from "./ShowcaseSortSelection";
import Collection from "./Collection";

import {
  listCategorizedProducts,
  listProductsBest,
} from "../actions/productActions";

/*
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
TODO: Showcase system functionality
          - criteria
          - sorting
          - paging
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
*/

const Showcase = ({ history }) => {
  const [price, setPrice] = useState(10);
  const dispatch = useDispatch();

  const productCategorizedList = useSelector(
    (state) => state.productCategorizedList
  );
  const { loading, error, productsCategorized } = productCategorizedList;

  const productBestList = useSelector((state) => state.productBestList);
  const {
    loading: loadingBest,
    error: errorBest,
    products: productsBest,
  } = productBestList;

  const [category, setCategory] = useState("");
  const [element, setElement] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(productsCategorized);

  // console.log("filtered outside: ", filteredProducts);
  // console.log(productsCategorized);

  const brandsFilterHandle = (e) => {};

  const familyFilterHandle = (e) => {};

  const sizeFilterHandle = (e) => {};

  // const priceFilterHandle = (e) => {};

  useEffect(() => {
    if (history.location.pathname.length > 1) {
      setCategory(history.location.pathname.slice(1));
      setElement(null);

      const eStartsWith = showcaseCategories.filter((ele) =>
        history.location.pathname.slice(1).startsWith(ele)
      );

      if (eStartsWith.length > 0) {
        setElement(1);
        dispatch(listCategorizedProducts(category));
        dispatch(listProductsBest());

        //
        // setFilteredProducts(productsCategorized);
      }
    }

    const unlisten = history.listen(() => {
      setCategory(history.location.pathname.slice(1));
      setElement(null);

      const eStartsWith = showcaseCategories.filter((ele) =>
        history.location.pathname.slice(1).startsWith(ele)
      );

      if (eStartsWith.length > 0) {
        setElement(1);
        dispatch(listCategorizedProducts(category));
        dispatch(listProductsBest());

        //
        // setFilteredProducts(productsCategorized);
      }

      // console.log("filtered inside: ", filteredProducts);
    });

    return () => {
      unlisten();
    };
    // eslint-disable-next-line
  }, [history, category, dispatch]);

  useEffect(() => {
    setFilteredProducts(productsCategorized);
  }, [productsCategorized]);

  return (
    element && (
      <>
        <div className="products-showcase">
          <div className="container">
            {loading ? (
              <Loader />
            ) : error ? (
              <Message body={error} />
            ) : (
              <>
                {filteredProducts && filteredProducts.length > 0 ? (
                  <>
                    <ShowcaseDescription category={category} />
                    <div className="showcase-system">
                      <div className="product-filter">
                        <div className="filter-category">
                          <h3 className="filter-criteria">brands</h3>
                          <ul className="cr-select">
                            {brands.map((b, index) => (
                              <li className="cr-select-op" key={index}>
                                <label>
                                  <input
                                    type="checkbox"
                                    value={b}
                                    id={b}
                                    onChange={brandsFilterHandle}
                                  />
                                  {b}
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="filter-category">
                          <h3 className="filter-criteria">family</h3>
                          <ul className="cr-select">
                            {family.map((m, index) => (
                              <li className="cr-select-op" key={index}>
                                <label>
                                  <input
                                    type="checkbox"
                                    value={m}
                                    id={m}
                                    onChange={familyFilterHandle}
                                  />
                                  {m}
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="filter-category">
                          <h3 className="filter-criteria">size</h3>
                          <ul className="cr-select">
                            {sizeInMl.map((s, index) => (
                              <li className="cr-select-op" key={index}>
                                <label>
                                  <input
                                    type="checkbox"
                                    value={s}
                                    id={s}
                                    onChange={sizeFilterHandle}
                                  />
                                  {s}ML
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="filter-category">
                          <h3 className="filter-criteria">price</h3>
                          <div className="cr-section">
                            <span>BHD {price}</span>
                            <input
                              type="range"
                              name="price"
                              id="price-range"
                              value={price}
                              min={0}
                              max={1000}
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                            />
                            <span>BHD 1000</span>
                          </div>
                        </div>
                      </div>
                      <div className="product-list">
                        <ShowcaseSortSelection products={filteredProducts} />
                        <div className="product-grid">
                          {loading ? (
                            <Loader />
                          ) : error ? (
                            <Message body={error} />
                          ) : (
                            filteredProducts &&
                            filteredProducts.length > 0 &&
                            filteredProducts.map((p) => (
                              <ProductCard product={p} key={p._id} />
                            ))
                          )}
                        </div>
                        {filteredProducts && filteredProducts.length > 0 && (
                          <div className="paging">
                            <Link to={`/products/pages/page`} className="page">
                              1
                            </Link>
                            <Link to={`/products/pages/page`} className="page">
                              2
                            </Link>
                            <Link to={`/products/pages/page`} className="page">
                              3
                            </Link>
                            <Link to={`/products/pages/page`} className="page">
                              <span></span>
                              <span></span>
                              <span></span>
                            </Link>
                            <Link to={`/products/pages/page`} className="page">
                              {`>`}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Message body="No result found! Please try different criteria." />
                )}
              </>
            )}
          </div>
        </div>
        {loadingBest ? (
          <Loader />
        ) : errorBest ? (
          <Message body={errorBest} />
        ) : (
          <Collection
            heading="best sellers"
            copy=""
            textColor=""
            bgColor="#e7e4e0"
            products={productsBest}
          />
        )}
      </>
    )
  );
};

export default withRouter(Showcase);
