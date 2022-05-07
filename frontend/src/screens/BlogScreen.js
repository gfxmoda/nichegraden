import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EventDetails from "../components/EventDetails";
import Sidebar from "../components/Sidebar";

import { listBlogs, listBlogDetails } from "../actions/blogActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

const BlogScreen = ({ match }) => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loadingBlog, errorBlog, blog } = blogDetails;

  useEffect(() => {
    dispatch(listBlogs());
    dispatch(listBlogDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <div className="container">
        <div className="event-content">
          {loadingBlog ? (
            <Loader />
          ) : errorBlog ? (
            <Message body={error} />
          ) : (
            <EventDetails event={blog} type="blogs" />
          )}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message body={error} />
          ) : (
            <Sidebar heading="posts" collection={blogs} type="blog" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogScreen;
