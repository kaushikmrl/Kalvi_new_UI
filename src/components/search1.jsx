import { React, useState } from "react";

import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[13rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/backgraphics1.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <motion.img
          src={require("../img/bs.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />{" "}
        
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../img/cr.png")}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/d4.png")}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../img/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
        {/* paragraph */}
        <div className="detail flex flex-col mt-2 text-4xl">
          <span>Preamble</span>
          
          <span className="text-sm mt-3 text-[#767d8a]">
          COVID has changed learning forever. There is a paradigm shift in the way people learnt pre and post COVID, there is high growth and adoption in Education Technology. <br/><br/>We are experiencing an unplanned and rapid migration to online learning. A huge number of people started joining online courses to reskill and upskill.

<br/><br/>It is clear that this pandemic has utterly disrupted the way we learn. It had both positive and negative impacts. There was a terrible disconnect between the enrollment rate and completion rate which questioned the impact of online learning.
          </span>
<br/>
          <span><b>Problem</b></span>
          
          <span className="text-sm mt-3 text-[#767d8a]">
          Learner's drop out rate is up by 67 % with most of them leaving due to a lack of Motivation and engaging content. We need to fix this problem by focusing on ways to Motivate the users ,Personalise and Reward their learning journey.
          </span>
        </div></VisibilitySensor>
        
      </div>
    </div>
  );
}

export default Search;
