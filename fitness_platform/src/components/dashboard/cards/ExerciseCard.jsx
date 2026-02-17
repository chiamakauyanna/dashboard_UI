import React from "react";

const ExerciseCard = ({ img, alt, text, duration }) => {
  return (
    <div className="border-secondary flex h-22.25 w-[613.91px] gap-3 rounded-[10px] border p-4">
      <img src={img} alt={alt} />
      <div>
        <p className="font-semibold">{text}</p>
        <p className="text-sm font-medium text-[#9D9D9D]">{duration}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
