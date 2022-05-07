import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
import Loader from "../components/Loader";

import FAQs from "../components/FAQs";

import { listFAQs } from "../actions/faqActions";

const HelpCenterScreen = () => {

  const dispatch = useDispatch();

  const faqList = useSelector((state) => state.faqList);
  const { loading, error, faqs } = faqList;

  useEffect(() => {
    dispatch(listFAQs());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type={"error"} body={error} />
      ) : (
        <FAQs array={faqs} />
      )}
    </>
  );
};

export default HelpCenterScreen;
