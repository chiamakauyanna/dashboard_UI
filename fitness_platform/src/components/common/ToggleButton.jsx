import { useState } from "react";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${toggle ? "bg-[#F5F5F5]" : "bg-accent "} flex h-7.5 w-14 cursor-pointer items-center rounded-full px-0.5`}
        onClick={handleToggle}
      >
        <div
          className={`h-6 w-6 rounded-full bg-white transition-transform duration-300 ${toggle ? "" : "translate-x-7"} `}
        ></div>
      </div>
    </>
  );
};

export default ToggleButton;
