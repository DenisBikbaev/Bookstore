import React from "react";

import Icon from "../Icon/Icon";

interface StarsRatingProps {
  rating: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({ rating }) => {
  const stars = Array.from(new Array(5), (value, index) => index + 1);

  const srtarRating = stars.map((star) => {
    if (star <= rating) {
      return <Icon type={"starBlack"} />;
    } else if (star > rating) {
      return <Icon type={"starWhite"} />;
    }
  });

  return <div>{srtarRating}</div>;
};

export default StarsRating;
