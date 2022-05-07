import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";

import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Showcase from "./components/Showcase";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import OurGardenScreen from "./screens/OurGardenScreen";
import OurBoutiquesScreen from "./screens/OurBoutiquesScreen";
import EventScreen from "./screens/EventScreen";
import BlogsScreen from "./screens/BlogsScreen";
import BlogScreen from "./screens/BlogScreen";
import HelpCenterScreen from "./screens/HelpCenterScreen";
import TermsNConditionsScreen from "./screens/TermsNConditionsScreen";
import ContactScreen from "./screens/ContactScreen";
import CartScreen from "./screens/CartScreen";
import CareerScreen from "./screens/CareerScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import AccountScreen from "./screens/AccountScreen";
import VerificationScreen from "./screens/VerificationScreen";
import TestScreen from "./screens/TestScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <LandingPage />
      <Showcase />
      <Route path="/" component={HomeScreen} exact />
      <Route
        path="/authenticate/activate/:token"
        component={VerificationScreen}
        exact
      />
      <Route path="/account" component={AccountScreen} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/our-garden" component={OurGardenScreen} />
      <Route path="/help-center" component={HelpCenterScreen} />
      <Route path="/privacy-policy" component={PrivacyPolicyScreen} />
      <Route path="/tnc" component={TermsNConditionsScreen} />
      <Route path="/contact" component={ContactScreen} />
      <Route path="/career" component={CareerScreen} />
      <Route path="/cart" component={CartScreen} />
      <Route path="/checkout" component={CheckoutScreen} />
      <Route path="/order" component={OrderScreen} />
      <Route path="/our-boutiques" component={OurBoutiquesScreen} />
      <Route path="/event/:id" component={EventScreen} />
      <Route path="/blog" component={BlogsScreen} exact />
      <Route path="/blog/:id" component={BlogScreen} />
      <Route path="/test" component={TestScreen} />
      <Footer />
    </Router>
  );
}

export default App;
