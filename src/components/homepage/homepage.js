import Header from "../common/header/header";
import TabOptions from "../common/tabOptions/tabOptions";
import Delivery from "../delivery/delivery";
import DiningOut from "../diningOut/diningOut";
import Nightlife from "../nightLife/nightLife";
import { useState } from "react";
import Footer from "../common/footer/footer";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    case "Dining Out":
      return <DiningOut />;

    case "Nightlife":
      return <Nightlife />;

    default:
      return <Delivery />;
  }
};
export default HomePage;
