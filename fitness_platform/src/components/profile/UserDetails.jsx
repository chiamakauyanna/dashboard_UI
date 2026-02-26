import profileImg from "../../assets/images/profile-img.png";
import Button from "../common/Button";
import clock from "../../assets/images/clock.png";
import fire from "../../assets/images/fire.png";
import power from "../../assets/images/power.png";
import DataCard from "./cards/DataCard";

const UserDetails = () => {
  return (
    <div className="mt-4 flex flex-col justify-between rounded-[17px] bg-white px-4 py-12 shadow xl:h-153 xl:px-6">
      <div>
        <div className="flex items-center gap-4">
          <div className="border-secondary rounded-md border px-2 pt-2">
            <img
              src={profileImg}
              alt="profile picture of a user"
              className="w-14 xl:w-18"
            />
          </div>

          <div className="space-y-1 text-sm">
            <p>Leslie Alexander</p>
            <Button text="Go Premium" />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="border-secondary flex h-11.5 w-37 items-center justify-center gap-2 rounded-[10px] border">
            <img src={clock} alt="picture of a clock" className="w-4 lg:w-3" />
            <p className="text-xs font-medium">55 kg</p>
          </div>

          <div className="border-secondary flex h-11.5 w-37 items-center justify-center gap-2 rounded-[10px] border">
            <img
              src={fire}
              alt="picture of a fire"
              className="w-4 lg:w-3 xl:w-6"
            />
            <p className="text-xs font-medium">167 cm</p>
          </div>

          <div className="border-secondary flex h-11.5 w-37 items-center justify-center gap-2 rounded-[10px] border">
            <img
              src={power}
              alt="picture signifying power"
              className="w-2 xl:w-3"
            />
            <p className="text-xs font-medium">26 years</p>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <DataCard text="Name" value="Leslie Alexander" />
        <DataCard text="Gender" value="Male" />
        <DataCard text="Date of birth" value="22 may 1995" />
        <DataCard text="Height" value="172 cm" />
        <DataCard text="Weight" value="62 kg" />
        <DataCard text="Max heart rate" value="195 bpm" />
      </div>
    </div>
  );
};

export default UserDetails;
