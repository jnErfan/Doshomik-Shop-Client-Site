import React from "react";
import AboutDS from "../AboutDS/AboutDS";
import Banner from "../Banner/Banner";
import EarnMoney from "../EarnMoney/EarnMoney";
import Facilities from "../Facilities/Facilities";
import FrequentlyQuestion from "../FrequentlyQuestion/FrequentlyQuestion";
import Membership from "../Membership/Membership";
import PeopleSays from "../PeopleSays/PeopleSays";
import OurBlog from "../OurBlog/OurBlog";

const HomeContainer = () => {
  return (
    <div>
      <Banner />
      <AboutDS />
      <Membership />
      <Facilities />
      <EarnMoney />
      <FrequentlyQuestion />
      <PeopleSays />
      <OurBlog />
    </div>
  );
};

export default HomeContainer;
