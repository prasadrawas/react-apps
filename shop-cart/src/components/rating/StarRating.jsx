import React from "react";
import { HiStar } from "react-icons/hi";

const StarRating = ({ rating, reviews }) => {
  const totalStars = 5;
  const roundedRating = Math.round(rating);

  return (
    <div className="flex my-1 items-center">
      {Array.from({ length: totalStars }).map((_, index) => (
        <div key={index}>
          <span
            className={`text-sm ${
              index < roundedRating ? "text-green-600" : "text-gray-300"
            }`}
          >
            {/* &#9733;  */}
            <HiStar />
          </span>
        </div>
      ))}

      <p className="pl-2 text-xs text-slate-700">({reviews})</p>
    </div>
  );
};

export default StarRating;
