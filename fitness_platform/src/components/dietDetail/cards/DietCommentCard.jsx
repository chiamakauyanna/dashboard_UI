const DietCommentCard = ({ profilepic, name, rating, review }) => {
  return (
    <div className="rounded-xl bg-white p-4 xl:p-6 shadow">
      <div className="flex items-center gap-2 xl:gap-4">
        <img src={profilepic} alt="picture of Samantha Lee" />
        <div className="space-y-1 text-center font-medium">
          <p className="xl:text-[20px]">{name}</p>
          <p className="text-sm xl:text-base">{rating}</p>
        </div>
      </div>
      <p className="text-textLight mt-5 text-xs xl:text-sm font-medium">{review}</p>
    </div>
  );
};

export default DietCommentCard;
