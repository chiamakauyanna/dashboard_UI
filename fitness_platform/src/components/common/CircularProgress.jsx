const CircularProgress = ({
  size = 100,
  strokeWidth = 12,
  progress = 75,
  color = "#ffffff",
  trackColor = "rgba(255,255,255,0.3)",
  text= '',
  alttext= '',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size}>
        {/* Track */}
        <circle
          stroke={trackColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Progress */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="transition-all duration-500 ease-out"
        />
      </svg>

      {/* Center content */}
      <div className="absolute text-center text-sm">
        <p className="font-semibold mb-3">{text}</p>
        <p className="font-semibold text-white">{alttext}</p>
      </div>
    </div>
  );
};

export default CircularProgress;
