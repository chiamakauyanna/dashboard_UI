import profileImg from "../../assets/profile-img.png";
import Button from "../common/Button";
import clock from "../../assets/clock.png";
import fire from "../../assets/fire.png";
import power from "../../assets/power.png";
import DataCard from "./cards/DataCard";

const UserDetails = () => {
  return (
    <div className="mt-4 flex flex-col justify-between rounded-[17px] bg-white px-6 py-12 shadow lg:h-153.5">
      <div>
        <div className="flex items-center gap-4">
          <div className="border-secondary rounded-md border px-2 pt-2">
            <img src={profileImg} alt="profile picture of a user" />
          </div>

          <div className="space-y-1 text-sm">
            <p>Leslie Alexander</p>
            <Button text="Go Premium" />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="border-secondary flex h-11.5 w-[148.11px] items-center justify-center gap-2 rounded-[10px] border">
            <img src={clock} alt="picture of a clock" />
            <p className="text-xs font-medium md:text-sm">55 kg</p>
          </div>

          <div className="border-secondary flex h-11.5 w-[148.11px] items-center justify-center gap-2 rounded-[10px] border">
            <img src={fire} alt="picture of a fire" />
            <p className="text-xs font-medium md:text-sm">167 cm</p>
          </div>

          <div className="border-secondary flex h-11.5 w-[148.11px] items-center justify-center gap-2 rounded-[10px] border">
            <img src={power} alt="picture signifying power" />
            <p className="text-xs font-medium md:text-sm">26 years</p>
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
