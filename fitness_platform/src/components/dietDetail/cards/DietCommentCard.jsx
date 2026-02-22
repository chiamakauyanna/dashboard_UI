const DietCommentCard = ({ profilepic, name, rating, review }) => {
  return (
    <div className="h-48.75 rounded-xl bg-white p-6 shadow lg:w-98.75">
      <div className="flex items-center gap-4">
        <img src={profilepic} alt="picture of Samantha Lee" />
        <div className="space-y-1 text-center font-medium">
          <p className="text-[20px]">{name}</p>
          <p>{rating}</p>
        </div>
      </div>
      <p className="mt-5 text-sm font-medium text-[#9D9D9D]">{review}</p>
    </div>
  );
};

export default DietCommentCard;
