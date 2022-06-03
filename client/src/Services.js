import React from "react";
// import serviceapi from "./API/serviceApi.js";

const Services = () => {
  // const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            We’ll make your data shine
          </h1>
          <div className="row">
            {/* {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}<a href="https://google.co.in"></a></p>
                  </div>
                </>
              );
            })} */}
            <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
              <i className= "fontawesome-style fab fa-python"></i>
              <h2 className="sub-heading">Python</h2>
              <p className="main-hero-para">
              Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant .....  
                <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">Know More</a>
              </p>
            </div>

            <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
              <i className= "fontawesome-style fab fa-react"></i>
              <h2 className="sub-heading">React JS</h2>
              <p className="main-hero-para">
              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just in the .... 
                <a href="https://reactjs.org/docs/getting-started.html">Know More</a>
              </p>
            </div>

            <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
              <i className= "fontawesome-style fas fa-tint"></i>
              <h2 className="sub-heading">Apache Nifi</h2>
              <p className="main-hero-para">
              Apache NiFi is an integrated data logistics platform for automating the movement of data between disparate systems. It provides real-time control that makes ....... 
                <a href="https://nifi.apache.org/docs.html">Know More</a>
              </p>
            </div>

            <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
              <i className= "fontawesome-style fas fa-eye"></i>
              <h2 className="sub-heading">Apache Cassandra</h2>
              <p className="main-hero-para">
              Apache Cassandra is an open source NoSQL distributed database trusted by thousands of companies for scalability and high availability without compromising ....... 
                <a href="https://cassandra.apache.org/doc/latest/">Know More</a>
              </p>
            </div>


            <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
              <i className= "fontawesome-style fab fa-node"></i>
              <h2 className="sub-heading">NodeJS</h2>
              <p className="main-hero-para">
              Node.js is an open-source and cross-platform runtime environment executing JavaScript code outside of a browser for building highly scalable server-side applications using JavaScript ......  
              <a href="https://www.geeksforgeeks.org/nodejs/">Know More</a>
              </p>
            </div>

            <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
              <i className= "fontawesome-style fas fa-desktop"></i>
              <h2 className="sub-heading">Machine Learning</h2>
              <p className="main-hero-para">
              Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that ......   
                <a href="https://www.geeksforgeeks.org/machine-learning/">Know More</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
