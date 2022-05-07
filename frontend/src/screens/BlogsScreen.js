import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EventCard from "../components/EventCard";

import Message from "../components/Message";
import Loader from "../components/Loader";

import { listBlogs } from "../actions/blogActions";

const BlogsScreen = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type={"error"} body={error} />
      ) : (
        <div className="events-section">
          <div className="container">
            <h1 className="collection-heading">
              <span className="bar"></span>Recent blogs
            </h1>
          </div>
          {blogs &&
            blogs.length > 0 &&
            blogs.map((b) => (
              <EventCard
                key={b._id}
                id={b._id}
                type="blog"
                image={b.coverImage}
                heading={b.heading}
                copy={b.copy}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default BlogsScreen;
/* 
        {blogs
          ? blogs.length > 0
            ? blogs.map((b) => (
                <EventCard
                  key={b._id}
                  type="blog"
                  image={b.coverImage}
                  heading={b.heading}
                  content={b.copy}
                />
              ))
            : ""
          : ""}

*/
