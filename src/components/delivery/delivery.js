import React from "react";
import { restaurants } from "../../data/restaurents";
import ExploreSection from "../common/exploreSection/exploreSection";

import Filters from "../common/filters/filters";

import "./delivery.css";
import DeliveryColletions from "./deliveryCollections/deliveryCollections";
import TopBrands from "./topBrands/topBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryColletions />
      <TopBrands />
      <ExploreSection
        restaurants={restaurantsList}
        collectionName="Delivery Restaurants in Bangalore"
      />
    </div>
  );
};

export default Delivery;
