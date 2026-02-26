import { useState } from "react";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${toggle ? "bg-[#F5F5F5]" : "bg-accent "} flex h-5 w-10 cursor-pointer items-center rounded-full xl:h-7.5 xl:w-14 xl:px-0.5`}
        onClick={handleToggle}
      >
        <div
          className={`h-4 w-4 rounded-full bg-white transition-transform duration-300 xl:h-6 xl:w-6 ${toggle ? "" : "translate-x-5.5 xl:translate-x-7"} `}
        ></div>
      </div>
    </>
  );
};

export default ToggleButton;
