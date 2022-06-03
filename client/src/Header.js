import React,{useState} from "react";
import axios from 'axios';

const Header = () => {
  const [productPictures, setProductPictures] = useState([]);
  const uploadFile = async() =>{
    //send file to server and then show this alert
    const form = new FormData();
    for (let pic of productPictures) {
      form.append('productPicture', pic);
    }
    const res=await axios.post('http://localhost:3000/test', form)
    if(res.status===200) alert("Upload Succesful");
    else if(res.status===400) alert("Upload unsuccesful");
  }
  const handleProductPictures = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-3">
                Let the Data do the talking <br /> Data is the New Oil for a
                Digital World
              </h1>
              <p className="main-hero-para">
              Data is a game-changing field that provides an impressive amount
                of data to organizations so that they can be more effective.
                Data has had an enormous impact on the development of web
                analytics, Artificial Intelligence (AI), and machine learning
              </p>
              <h3>Upload your files(.csv, .json) below :</h3>
              <div>
                <input
                  type="file" name="productPicture" className="input-file" onChange={(e) => {handleProductPictures(e);}}
                ></input>
                {productPictures.length > 0 ? <button className="btn-style" onClick={uploadFile}>Upload</button> : null}
                {/* {productPictures.length > 0
                  ? productPictures.map((pic, index) => (
                      <div key={index}>{pic.name}</div>
                    ))
                  : null} */}
              </div>
              {/* <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div> */}
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/heroqqq.png"
                alt="heroimg"
                className="img-fluid"
              />
              {/* <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              /> */}
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
