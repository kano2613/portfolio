import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import  WorkCardData   from "./WorkCardData";

import React from "react";


const Work = () => {
  return <div className="work-container">
       <h1 className="project-heading"> Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind ) => {
               return(
                  <WorkCard
                   key={ind}
                   imgsrc={val.imgsrc}
                   title={val.title}
                   text={val.text}
                   view={val.text}
                  />
               )
            })}
        {/* <div className="project-card">
           <img src={pro1} alt="" />
           <h2 className="project-title"> Project Title</h2>
           <div className="pro-details">
           <p>This is text</p>
           <div className="pro-btns">
        <NavLink to="url.com" className="btn"> View </NavLink>
        <NavLink to="url.com" className="btn"> Source </NavLink> 
           </div>
        </div>
    </div> */}
</div>
</div>;
 
  
};

export default Work ;