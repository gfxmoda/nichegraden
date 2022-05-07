import React from "react";

const ShowcaseFilters = () => {
    const [price, setPrice] = useState(10);

    return (
    <div className="product-filter">
      <div className="filter-category">
        <h3 className="filter-criteria">brands</h3>
        <ul className="cr-select">
          {brands.map((b, index) => (
            <li className="cr-select-op" key={index}>
              <label>
                <input type="checkbox" value={b} />
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
                <input type="checkbox" value={m} />
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
                <input type="checkbox" value={s} />
                {s}ML
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-category">
        <h3 className="filter-criteria">price</h3>
        <div className="cr-section">
          <span className="min-price">BHD {price}</span>
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
          <span className="min-price">BHD 1000</span>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseFilters;
