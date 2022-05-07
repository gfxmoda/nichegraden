import React, { useState, useEffect } from "react";
import { countries } from "../config/delivery";
// import Geocode from "react-geocode";

// Geocode.setApiKey("AIzaSyDvwfEBi_WfrfUuEY3qU_r71GWoW4Sx4Cg");

const Delivery = () =>
  /* { location } */
  {
    // state => userInfo => billingAddress => country => current => Link => Dashboard
    const [current, setCurrent] = useState(countries[0]);
    useEffect(() => {}, [current]);

    // const [loc, setLoc] = useState({
    //   loaded: false,
    //   coordinates: {
    //     lat: "",
    //     lng: "",
    //   },
    // });

    // const onSuccess = (location) => {
    //   setLoc({
    //     loaded: true,
    //     coordinates: {
    //       lat: location.coords.latitude,
    //       lng: location.coords.longitude,
    //     },
    //   });
    // };

    // const onError = (error) => {
    //   setLoc({
    //     loaded: true,
    //     error,
    //   });
    // };

    // useEffect(() => {
    //   if (!("gelocation" in navigator)) {
    //     onError({
    //       code: 0,
    //       message: "Geolocation is not supported",
    //     });
    //   }

    //   navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // }, []);

    //

    // Geocode.fromLatLng(loc.coordinates.lat, loc.coordinates.lng).then(
    //   (response) => {
    //     let country;

    //     for (
    //       let i = 0;
    //       i < response.results[0].address_components.length;
    //       i++
    //     ) {
    //       for (
    //         let j = 0;
    //         j < response.results[0].address_components[i].types.length;
    //         j++
    //       ) {
    //         switch (response.results[0].address_components[i].types[j]) {
    //           case "country":
    //             country = (response.results[0].address_components[i].long_name).tolowercase();
    //             break;
    //           default:
    //             return;
    //         }
    //       }
    //     }

    //     console.log(country);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    //

    // loc.coordinates &&
    //   loc.coordinates.lat &&
    //   loc.coordinates.lng &&
    //   console.warn(
    //     `Delivers to: { latitude: ${loc.coordinates.lat}, longitude: ${loc.coordinates.lng} }`,
    //     `- By activating the billing account in Google Maps API, the access will be given to render the country flag through geolocation function.`
    //   );

    return (
      <div className="deliver-to">
        <h4>delivers to: </h4>
        <span className="region">
          <img
            className="selected"
            alt=""
            src={`/images/country-${current}.png`}
          />
          <ul className="country-menu">
            {countries
              .filter((c) => c !== current)
              .map((c, index) => (
                <li key={index}>
                  <img
                    alt=""
                    src={`/images/country-${c}.png`}
                    onClick={() => {
                      setCurrent(c);
                    }}
                  />
                </li>
              ))}
          </ul>
        </span>
      </div>
    );
  };

export default Delivery;
