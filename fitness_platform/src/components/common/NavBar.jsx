import { MdKeyboardArrowRight } from "react-icons/md";
import Premium from "./Premium";

const NavBar = () => {
  return (
    <nav className="flex w-61.25 flex-col items-center">
      <ul className="mt-6 w-51.25 font-medium">
        {[
          { label: "Overview" },
          { label: "Workout", icon: <MdKeyboardArrowRight /> },
          { label: "Diet Plan", icon: <MdKeyboardArrowRight /> },
          { label: "Goals" },
          { label: "My Schedule" },
          { label: "Progress" },
          { label: "Profile" },
          { label: "Authentication", icon: <MdKeyboardArrowRight /> },
          { label: "Step" },
          { label: "Form", icon: <MdKeyboardArrowRight /> },
          { label: "Advance Element", icon: <MdKeyboardArrowRight /> },
          { label: "Bootstrap", icon: <MdKeyboardArrowRight /> },
          { label: "Icons" },
        ].map((item, idx) => (
          <li
            key={idx}
            className={`flex h-12.25 items-center justify-between rounded-lg pl-10 ${
              idx === 0 ? "bg-accent text-primary" : ""
            }`}
          >
            {item.label}
            {item.icon && <span>{item.icon}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
