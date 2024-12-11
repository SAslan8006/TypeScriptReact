import React from "react";

const ShoeCard = ({ index, imgURL, changeBigShoeImage, bigShoeImg }) => {
  return (
    <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
      <img
        src={imgURL.thumbnail}
        alt="shoe colletion"
        width={127}
        height={103.34}
        className="object-contain"
      />
    </div>
  );
};

export default ShoeCard;
