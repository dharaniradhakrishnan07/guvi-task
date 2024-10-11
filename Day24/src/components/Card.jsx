import React from "react";

const Card = ({ item, index }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4" key={index}>
      <div className="card h-100">
        <img src={item.image} className="card-img-top mb-2" alt="card_img" />
        <div className="card-body px-4 mt-3">
          <h5 className="card-title">{item.head}</h5>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-sm-txt">Read More » </p>
        </div>
        <div className="card-footer ps-4 py-2 bg-transparent">
          <p className="txt my-2">
            {item.date} &nbsp;•&nbsp; {item.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;