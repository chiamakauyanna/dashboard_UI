import DietCommentCard from "./cards/DietCommentCard";
import pic from "../../assets/samantha-lee.png";

const DietComments = () => {
  return (
    <div className="mt-6 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
      <DietCommentCard
        profilepic={pic}
        name="Samantha Lee"
        rating="5/5"
        review="My go-to breakfast is quick, filling, and customizable.
I love the fresh taste of spinach, and it’s easy to add
other veggies or spices!"
      />
      <DietCommentCard
        profilepic={pic}
        name="David Chen"
        rating="4.7/5"
        review="Delicious and healthy. I sometimes add mushrooms
for extra veggies. The turkey bacon is a nice, lean
alternative to regular bacon."
      />
      <DietCommentCard
        profilepic={pic}
        name="Jessica Moore"
        rating="4.9/5"
        review="Perfect way to start the day! The combination of
eggs, spinach, and turkey bacon is both tasty and
nutritious. Highly recommend!"
      />
      <DietCommentCard
        profilepic={pic}
        name="David Chen"
        rating="4.7/5"
        review="Delicious and healthy. I sometimes add mushrooms
for extra veggies. The turkey bacon is a nice, lean
alternative to regular bacon."
      />
    </div>
  );
};

export default DietComments;
