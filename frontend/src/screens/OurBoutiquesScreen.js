import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import About from "../components/About";
import EventCard from "../components/EventCard";

import Message from "../components/Message";
import Loader from "../components/Loader";

import { listEvents } from "../actions/eventActions";

const OurBoutiquesScreen = () => {
  const dispatch = useDispatch();

  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  return (
    <>
      <div className="about-section">
        <div className="container">
          <h1 className="collection-heading">
            <span className="bar"></span>visit our locations
          </h1>
        </div>
        <About
          align="start"
          image="boutique-1"
          heading="The Avenues Mall"
          text={`Gate 3 – The Bay Gate
          Avenues Mall
          Opening Hours : 10:00 A.M – 10:00 P.M`}
          button="yes"
          link="/our-boutiques"
          external="https://www.google.com/maps/place/The+Avenues/@26.2456947,50.582894,17z/data=!3m1!4b1!4m5!3m4!1s0x3e49a5f064f0a013:0xe0aae9ebaaec9a58!8m2!3d26.2456947!4d50.5850827"
          label="view location"
        />
        <About
          align="end"
          image="boutique-2"
          heading="Seef Mall"
          text={`Seef District
          Gate 5
          Opening Hours : 10:00 A.M – 10:00 P.M`}
          button="yes"
          link="/our-boutiques"
          external="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3e49a56880f11dd7:0x4c52a655ea06114c?source=g.page.share"
          label="view location"
        />
        <About
          align="start"
          image="boutique-3"
          heading="City Centre"
          text={`Located On Ground Floor
          Nearest Parking Level 1, Gate 1
          Opening Hours : 10:00 A.M – 10:00 P.M`}
          button="yes"
          link="/our-boutiques"
          external="https://www.google.com/maps/place/Bahrain+city+center+mall/@26.2320127,50.5782872,15z/data=!4m5!3m4!1s0x3e49a5788e4fa6d3:0x59a12e7b22b7b68c!8m2!3d26.2349113!4d50.5541287?shorturl=1"
          label="view location"
        />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type={"error"} body={error} />
      ) : (
        <div className="events-section">
          <div className="container">
            <h1 className="collection-heading">
              <span className="bar"></span>Recent events
            </h1>
          </div>
          {events &&
            events.length > 0 &&
            events.map((e) => (
              <EventCard
                key={e._id}
                id={e._id}
                type="event"
                image={e.coverImage}
                heading={e.heading}
                copy={e.copy}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default OurBoutiquesScreen;
