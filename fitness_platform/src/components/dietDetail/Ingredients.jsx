import DietPrepCard from "./cards/DietPrepCard";
import IngredientsCard from "./cards/IngredientsCard.JSX";

const Ingredients = () => {
  return (
    <div className="mt-6 h-99.5 rounded-[17px] bg-white p-6 shadow lg:w-[526.33px]">
      <div className="flex items-center justify-between">
        <DietPrepCard text="Eat Time" value="8.00 AM" />
        <div className="bg-accent grid h-9.75 w-20 place-items-center rounded-lg lg:w-30">
          <div className="border-secondary grid h-9.75 w-8 place-items-center border bg-[#F5F5F5] lg:w-14.5">
            <p>1</p>
          </div>
        </div>
      </div>

      <h2 className="py-6 md:text-[20px] font-bold">Ingredients</h2>
      <IngredientsCard steps="2 large eggs" />
      <IngredientsCard steps="2 slices of turkey bacon" />
      <IngredientsCard steps="Mixing bowl" />
      <IngredientsCard steps="1 cup fresh spinach" />
      <IngredientsCard steps="1 tablespoon olive oil" />
      <IngredientsCard steps="Salt and pepper to taste" />
    </div>
  );
};

export default Ingredients;
