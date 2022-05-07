import React, { useState } from "react";
// import { useDispatch } from "react-redux";

// import { editAddress } from "../actions/userActions";

const AddressCard = ({ address, type }) => {
  // const dispatch = useDispatch();
  const [addressAction, setAddressAction] = useState("view");

  const [name, setName] = useState(address.name || "");
  const [street, setStreet] = useState(address.street || "");
  const [city, setCity] = useState(address.city || "");
  const [country, setCountry] = useState(address.country || "");
  const [mobile, setMobile] = useState(address.mobile || "");
  const [email, setEmail] = useState(address.email || "");

  const submitHandler = () => {
    // const newAddress = {
    //   name,
    //   street,
    //   city,
    //   country,
    //   mobile,
    //   email,
    // };
    // dispatch(editAddress(type, newAddress));

    if (addressAction !== "view") {
      setAddressAction("view");
    }
  };

  const editAddress = () => {
    if (addressAction !== "edit") {
      setAddressAction("edit");
    }
  };
  return (
    <div className="address-card">
      <h2>{type} address</h2>
      <button onClick={editAddress}>Edit</button>
      {addressAction === "view" ? (
        <>
          <span>
            <strong>name: </strong>
            {address.name}
          </span>
          <span>
            <strong>{type} to: </strong>
            {address.street}, {address.city}, {address.country}.
          </span>
          <span>
            <strong>mobile: </strong>
            {address.mobile}
          </span>
          <span>
            <strong>email: </strong>
            {address.email}
          </span>
        </>
      ) : addressAction === "edit" ? (
        <>
          <input
            type="text"
            placeholder="your name *"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="street *"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />
          <input
            type="text"
            placeholder="city *"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <input
            type="text"
            placeholder="country *"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
          <input
            type="text"
            placeholder="your mobile number *"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
          />
          <input
            type="text"
            placeholder="your email address *"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <h4 className="add-to-cart" onClick={submitHandler}>
            save
          </h4>
        </>
      ) : (
        <p>You have not set up this type of address yet.</p>
      )}
    </div>
  );
};

export default AddressCard;
