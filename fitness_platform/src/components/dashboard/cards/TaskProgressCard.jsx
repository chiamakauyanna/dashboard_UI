import CircularProgress from "../../common/CircularProgress";

const TaskProgressCard = ({ img, alt, task, value, color, progress, text }) => {
  return (
    <div>
      <div className="mt-6 flex h-30 items-center justify-between rounded-[17px] px-6 shadow lg:w-114.25">
        <div className="flex gap-4">
          <img src={img} alt={alt} />
          <div>
            <p className="text-sm font-semibold md:text-base">{task}</p>
            <p className="text-textLight text-xs font-medium md:text-sm">
              {value}
            </p>
          </div>
        </div>

        <div>
          <CircularProgress
            progress={progress}
            color={color}
            trackColor="#f5f5f5"
            size={70}
            strokeWidth={7}
          >
            <div className="text-xs md:text-sm">
              <p className="font-medium">{text}</p>
            </div>
          </CircularProgress>
        </div>
      </div>
    </div>
  );
};

export default TaskProgressCard;
