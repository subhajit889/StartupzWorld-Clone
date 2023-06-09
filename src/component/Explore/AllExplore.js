import React from "react";
import Catagory from "./Catagory";
import Catagory1Type from "./Catagory1Type";
import {
  BusinessNatureData,
  FundingData,
  InterestType,
  InvestmentNatureData,
  StageData,
  buisnessType,
} from "../Data/AllData";


const Explore = () => {
  return (
    <div>
      <Catagory />
      <Catagory1Type sub="Business Model" data={buisnessType} />
      <Catagory1Type sub="Interested In" data={InterestType} />
      <Catagory1Type sub="Stage" data={StageData} />
      <Catagory1Type sub="Funding Type" data={FundingData} />
      <Catagory1Type sub="Business Nature" data={BusinessNatureData} />
      <Catagory1Type sub="Investment Nature" data={InvestmentNatureData} />
    </div>
  );
};

export default Explore;