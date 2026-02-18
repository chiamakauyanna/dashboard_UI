import DirectionCard from "./cards/DirectionCard";
import IngredientsCard from "./cards/IngredientsCard.JSX";

const Direction = () => {
  return (
    <div className="mt-6 grid h-[586.97px] w-[1076.66px] grid-cols-2 place-items-center rounded-[17px] bg-white p-6 shadow">
      {/* Directions */}
      <div>
        <h2 className="mb-4 text-[20px] font-bold">Directions</h2>
        <DirectionCard
          step="1"
          text="Prep the Ingredients"
          description="Crack the eggs into a mixing bowl, add a pinch of salt and pepper, and
whisk until fully blended."
        />
        <DirectionCard
          step="2"
          text="Cook the Turkey Bacon"
          description="Heat the skillet over medium heat and cook the turkey bacon until
crispy, about 3-4 minutes on each side. Remove and set aside."
        />
        <DirectionCard
          step="3"
          text="Saute the Spinach"
          description="In the same skillet, add olive oil and spinach. Saute until the spinach
is wilted, about 2-3 minutes. Remove and set aside."
        />
        <DirectionCard
          step="4"
          text="Scramble the Eggs"
          description="Pour the egg mixture into the skillet and cook, stirring gently with a
spatula, until the eggs are fully cooked but still soft, about 2-3
minutes."
        />
        <DirectionCard
          step="5"
          text="Assemble and Serve"
          description="Plate the scrambled eggs with turkey bacon and sauteed spinach.
Serve immediately."
          isLast
        />
      </div>
      <div className="w-[485.33px]">
        {/* Tools and Equipments */}
        <div>
          <h2 className="mb-4 text-[20px] font-bold">Tools and Equipments</h2>
          <IngredientsCard steps="Non - stick skillet" />
          <IngredientsCard steps="Spatula" />
          <IngredientsCard steps="Mixing bowl" />
          <IngredientsCard steps="Fork" />
          <IngredientsCard steps="Measuring spoons" />
        </div>

        {/* Notes */}
        <div className="py-4">
          <h2 className="mb-4 text-[20px] font-bold">Notes</h2>
          <IngredientsCard
            steps="For a lower-calorie option, substitute olive oil with a cooking spray
and reduce the amount of turkey bacon."
          />
          <IngredientsCard
            steps="Add a sprinkle of cheese or herbs like chives or parsley for extra
flavor."
          />
        </div>
      </div>
    </div>
  );
};

export default Direction;
