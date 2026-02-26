import adPic from "../../assets/images/ad-picture.png";
import Button from "../common/Button";

const Training = () => {
  return (
    <div className="mt-6 flex min-h-42 items-center justify-between rounded-[17px] bg-[#E7FBFB] pl-4 shadow lg:h-fit">
      <div className="space-y-2">
        <h2 className="text-base font-bold md:text-lg xl:text-2xl">
          Full Body Toning Workout
        </h2>
        <p className="text-textLight text-xs font-medium">
          Incircuits circuits to work muscle
        </p>
        <Button text="Start Training" />
      </div>
      <img
        src={adPic}
        alt="stock stretching image"
        className="-mr-3 w-32 xl:w-64"
      />
    </div>
  );
};

export default Training;
