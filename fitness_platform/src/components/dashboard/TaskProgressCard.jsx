import CircularProgress from "../common/CircularProgress";

const TaskProgressCard = ({ img, alt, task, value, color, progress, text }) => {
  return (
    <div>
      <div className="mt-6 flex h-30 w-[457.53px] items-center justify-between rounded-[17px] px-6 shadow">
        <div className="flex gap-4">
          <img src={img} alt={alt} />
          <div>
            <p className="font-semibold">{task}</p>
            <p className="text-sm font-medium text-[#9D9D9D]">{value}</p>
          </div>
        </div>

        <div>
          <CircularProgress
            progress={progress}
            color={color}
            text={text}
            size={70}
            strokeWidth={7}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskProgressCard;
