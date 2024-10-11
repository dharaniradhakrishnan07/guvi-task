import React from 'react';
import Card from './Card';
const Cyber = ({data}) => {
  const cyber = data.filter((item) => item.head === "Cyber security");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {/* <h1>Cyber</h1> */}
        {cyber.map((item, index) => {
          return (
            <>
              <Card item={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Cyber;