import TaskProgressCard from "./cards/TaskProgressCard";
import running from "../../assets/running.png";
import sleeping from "../../assets/sleeping.png";
import lifting from "../../assets/weightlifting.png";
import fire from "../../assets/weightloss.png";

const TaskProgress = () => {
  return (
    <div className="grid w-[939.08px] grid-cols-1 md:grid-cols-2">
      <TaskProgressCard
        img={running}
        alt="image of a running girl"
        task="Running"
        value="70km/80km"
        color="#14B8A6"
        progress={80}
        text="80%"
      />
      <TaskProgressCard
        img={sleeping}
        alt="image of a sleeping girl"
        task="Sleeping"
        value="60hrs/60hrs"
        color="#FB923C"
        progress={60}
        text="60%"
      />
      <TaskProgressCard
        img={lifting}
        alt="image showing weight lifting"
        task="Running"
        value="4/10 Sets"
        color="#EF4444"
        progress={40}
        text="40%"
      />
      <TaskProgressCard
        img={fire}
        alt="image of a fire"
        task="Weight Loss"
        value="70kg/100kg"
        color="#38BDF8"
        progress={40}
        text="40%"
      />
    </div>
  );
};

export default TaskProgress;
