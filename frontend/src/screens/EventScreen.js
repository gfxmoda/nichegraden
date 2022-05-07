import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EventDetails from "../components/EventDetails";
import Sidebar from "../components/Sidebar";

import { listEvents, listEventDetails } from "../actions/eventActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const EventScreen = ({ match }) => {
  const dispatch = useDispatch();

  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;

  const eventDetails = useSelector((state) => state.eventDetails);
  const { loadingEvent, errorEvent, event } = eventDetails;

  useEffect(() => {
    dispatch(listEvents());
    dispatch(listEventDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <div className="container">
        <div className="event-content">
          {loadingEvent ? (
            <Loader />
          ) : errorEvent ? (
            <Message body={error} />
          ) : (
            <EventDetails event={event} type="events" />
          )}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message body={error} />
          ) : (
            <Sidebar heading="events" collection={events} type="event" />
          )}
        </div>
      </div>
    </div>
  );
};

export default EventScreen;
