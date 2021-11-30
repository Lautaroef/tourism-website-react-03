import React from "react";
import { useFetchSinglePlaceQuery } from "../../components/redux/getSinglePlaceInfo";
import { Link } from "react-router-dom";
import { randomNumberBetweenInterval } from "../../components/Header/Weather/PureFunctions";
import star from "./images/star.png";

const ShowPlace = ({ name, rate, xid }) => {
  const { data = { preview: { source: null } }, isFetching } =
    useFetchSinglePlaceQuery(xid);

  const randomPrice = randomNumberBetweenInterval(43, 79);

  // // Convert rate number to img elements
  // const arrayOfStars = [];
  // for (let i = 0; i < rate; i++) {
  //   const htmlImg = `<img src=${star} className="w-5" />`;
  //   arrayOfStars.push(htmlImg);
  // }

  return (
    <Link to={`/SinglePlace/${xid}`} className="custom-div">
      <img
        className="custom-image"
        style={{
          backgroundImage: `url(${data.preview.source})`,
        }}
      />
      <h2 className="custom-title">{name}</h2>
      <div className="custom-subtitle">
        <div className="custom-images">
          <img src={star} className="w-5" />
          <img src={star} className="w-5" />
          <img src={star} className="w-5" />
          <img src={star} className="w-5" />
          {/* {arrayOfStars.map((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            console.log(doc.body.firstChild);
          })} */}
        </div>
        <p className="custom-paragraph">USD$ {randomPrice}</p>
      </div>
    </Link>
  );
};

export default ShowPlace;
