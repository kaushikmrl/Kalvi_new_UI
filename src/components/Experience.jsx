import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Kalvi Incentivizes learners when a milestone is achieved</span>
        <span>
          <b>Our Value Differentiators</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="icon1" title="Instant rewards" content="Kalvi incentivizes learners instantaneously when certain milestones are achieved using LTEM(Learning Transfer Evaluation)."/>
        <Feature icon="icon2" title="Social learning" content="Humans are social animals,We improve completion rate by social learning, People change by observing others"/>
        <Feature icon="icon3" title="Adaptive learning" content="We believe one size doesnt fit all and use the state of the art AI to understand individual pain points and overcome it better"/>
      </div>
    </div>
  );
}

export default Experience;
