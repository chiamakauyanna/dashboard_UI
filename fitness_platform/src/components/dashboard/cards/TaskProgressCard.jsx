import CircularProgress from "../../common/CircularProgress";

const TaskProgressCard = ({ img, alt, task, value, color, progress, text }) => {
  return (
    <div>
      <div className="mt-6 flex xl:h-30 items-center justify-between rounded-[17px] px-4 xl:px-6 shadow xl:max-w-114">
        <div className="flex xl:gap-4 gap-2 items-center">
          <img src={img} alt={alt} />
          <div>
            <p className="text-sm font-semibold xl:text-base">{task}</p>
            <p className="text-textLight text-xs font-medium">{value}</p>
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
            <div className="text-xs">
              <p className="font-medium">{text}</p>
            </div>
          </CircularProgress>
        </div>
      </div>
    </div>
  );
};

export default TaskProgressCard;
