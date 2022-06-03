import React, { useState } from "react";
import workapi from "./API/workApi.js";

const HowItWorks = () => {
  // const [workData, setWorkData] = useState(workapi);
  // console.log(workData);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
            <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className="fontawesome-style fas fa-download"></i>
                    <h2 className="sub-heading">Data Extraction</h2>
                    <p className="main-hero-para">
                      Data extraction is the process of collecting or retrieving disparate types of data from a variety of sources, many of which may be poorly organized or ..... 
                      <a href="https://www.stitchdata.com/resources/what-is-data-extraction/#:~:text=Data%20extraction%20is%20the%20process,extract%2C%20transform%2C%20and%20load.">Know More</a>
                    </p>
                  </div>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className="fontawesome-style fas fa-server"></i>
                    <h2 className="sub-heading">Classification of Data</h2>
                    <p className="main-hero-para">
                    Data classification is the process of analyzing structured or unstructured data and organizing it into categories based on contents,file types or  ........
                      <a href="https://www.varonis.com/blog/data-classification#:~:text=Data%20classification%20is%20the%20process,and%20manage%20data%20governance%20policies.">Know More</a>
                    </p>
                  </div>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className="fontawesome-style fas fa-database"></i>
                    <h2 className="sub-heading">Data Automation</h2>
                    <p className="main-hero-para">
                    Data automation is the process of uploading, handling, and processing data via automated tools, instead of  ...... 
                      <a href="https://hevodata.com/learn/data-automation/#:~:text=Data%20Automation%20is%20defined%20as,than%20conducting%20these%20processes%20manually.&text=As%20a%20result%2C%20having%20an,analysis%20rather%20than%20data%20preparation.">Know More</a>
                    </p>
                  </div>
            {/* {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
