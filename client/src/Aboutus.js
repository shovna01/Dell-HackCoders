import React from "react";
// import howToUseApp from "./API/howToUse.js";

const Aboutus = () => {
//   const [aboutData, setAboutData] = useState(howToUseApp);
return (
  <>
    <section className="common-section our-services">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-lg-5 text-center our-service-leftside-img">
            <img src="./images/hero32.png" alt="aboutusIMg" />
          </div>

          {/* 1section right side data  */}
          <div className="col-12 col-lg-7 our-services-list">
            <h2 className="mini-title">
              Collecting all the data into one place .....
            </h2>
            <h1 className="main-heading">How to use ?</h1>
            <div className="row our-services-info" >
              <div className="col-1 our-services-number">1</div>
              <div className="col-10 our-services-data">
                <h2>Upload</h2>
                <p className="main-hero-para">
                  First of all upload soft copies on your computer or the
                  scanned files. The file could be of .csv, .json, .xml format
                </p>
              </div>
            </div>

            <div className="row our-services-info" >
              <div className="col-1 our-services-number">2</div>
              <div className="col-10 our-services-data">
                <h2>Conversion</h2>
                <p className="main-hero-para">
                Then the file will be converted into any one particular format it may be either .xml or .json or .csv format.
                </p>
              </div>
            </div>


            {/* {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">1</div>
                      <div className="col-10 our-services-data">
                        <h2>Upload</h2>
                        <p className="main-hero-para">First of all upload soft copies on your computer or the scanned files. The file could be of .csv, .json, .xml format</p>
                      </div>
                    </div>
                  </>
                );
              })} */}

            <br />
            <a  href="https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.5.0/org.apache.nifi.processors.standard.ConvertRecord/"><button className="btn-style btn-style-border">learn more</button></a>
          </div>
        </div>
      </div>
    </section>

    {/* 2nd part of bayt us section  */}

    <section className="common-section our-services our-services-rightside">
      <div className="container mb-5">
        <div className="row">
          {/* 1section right side data  */}
          <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
            {/* <h3 className="mini-title"></h3> */}
            <h1 className="main-heading">
              Further Steps  <br /> Are 
            </h1>

            <div className="row our-services-info">
              <div className="col-1 our-services-number">3</div>
              <div className="col-10 our-services-data">
                <h2>Applying ML Model</h2>
                <p className="main-hero-para">
                  Let suppose we have taken a Employee and Order data file convert the file into .json format. After the conversion of file into the .json formal we will apply the ML model on the data.
                </p>
              </div>
            </div>

            <div className="row our-services-info" >
              <div className="col-1 our-services-number">4</div>
              <div className="col-10 our-services-data">
                <h2>Classification & Storing</h2>
                <p className="main-hero-para">After the conversion and applying data model the employee and order data are ready to be stored in the data base </p>
              </div>
            </div>


            
            
            {/* {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })} */}

            <br />
            <a href="https://cassandra.apache.org/doc/latest/cassandra/architecture/storage_engine.html"><button className="btn-style btn-style-border" >learn more</button></a>
          </div>

          {/* images section  */}
          <div className="col-12 col-lg-5  our-service-rightside-img">
            <img src="./images/hero123.png" alt="aboutusIMg" />
          </div>
        </div>
      </div>
    </section>
  </>
);
            };

export default Aboutus;
