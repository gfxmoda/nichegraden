import asyncHandler from "express-async-handler";
import Event from "../models/eventModel.js";

//

// @desc       fetch all events
// @route      GET /api/events
// @access     public
const getEvents = asyncHandler(async (req, res) => {
  // passing an empty object gives us everything
  const events = await Event.find({});

  res.json(events);
});

//

// @desc       fetch single event
// @route      GET /api/events/:id
// @access     public
const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error("Event not found!");
  }
});

export { getEvents, getEventById };
