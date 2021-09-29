import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/home2.png" alt="home2" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Properties</h3>
            <h1>RENT FOR HOUSE</h1>
            <p>
            The essence of interior design will always be about people and how they live
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
