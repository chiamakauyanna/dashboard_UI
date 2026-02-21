import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const path = useLocation().pathname;

  const handleToggle = (label) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="flex w-61.25 flex-col items-center">
      <ul className="mt-6 w-51.25 font-medium">
        {[
          { label: "Overview", route: "/" },
          {
            label: "Workout",
            rightIcon: <MdKeyboardArrowRight />,
            downIcon: <MdKeyboardArrowDown />,
          },
          {
            label: "Diet Plan",
            route: "/diet_detail",
            rightIcon: <MdKeyboardArrowRight />,
            downIcon: <MdKeyboardArrowDown />,
            children: [
              { label: "Diet Menu" },
              { label: "Diet Detail", route: "/diet_detail" },
            ],
          },
          { label: "Goals" },
          { label: "My Schedule" },
          { label: "Progress", route: "/progress" },
          { label: "Profile", route: "/profile" },
          {
            label: "Authentication",
            rightIcon: <MdKeyboardArrowRight />,
            downIcon: <MdKeyboardArrowDown />,
          },
          { label: "Step" },
          {
            label: "Form",
            rightIcon: <MdKeyboardArrowRight />,
            downIcon: <MdKeyboardArrowDown />,
          },
          {
            label: "Advance Element",
            rightIcon: <MdKeyboardArrowRight />,
            downIcon: <MdKeyboardArrowDown />,
          },
          {
            label: "Bootstrap",
            rightIcon: <MdKeyboardArrowRight />,
            downIcon: <MdKeyboardArrowDown />,
          },
          { label: "Icons" },
        ].map((item, idx) => (
          <div key={idx}>
            {/* Parent nav item */}
            <li
              className={`flex h-12.25 items-center justify-between rounded-lg pr-6 pl-13 ${
                item.route === path ? "bg-accent text-primary" : ""
              }`}
            >
              {item.route ? (
                <Link to={item.route} className="flex-1">
                  {item.label}
                </Link>
              ) : (
                <span className="flex-1">{item.label}</span>
              )}

              {item.rightIcon && (
                <span
                  onClick={() => handleToggle(item.label)}
                  className="cursor-pointer"
                >
                  {openMenu === item.label ? item.downIcon : item.rightIcon}
                </span>
              )}
            </li>

            {/* Dropdown children with tree connector */}
            {item.children && openMenu === item.label && (
              <div className="relative mx-5 mt-4 border-l border-dashed border-[#2125290]">
                {item.children.map((menu, childIdx) => (
                  <li
                    key={childIdx}
                    className="relative flex h-9 items-center before:left-0 before:w-4 before:border-t before:border-dashed before:border-[#2125290]"
                  >
                    <span className="pl-3">
                      {menu.route ? (
                        <Link
                          to={menu.route}
                          className={`${
                            menu.route === path
                              ? "text-accent font-semibold"
                              : ""
                          }`}
                        >
                          {menu.label}
                        </Link>
                      ) : (
                        <span
                          className={
                            menu.route === path
                              ? "text-accent font-semibold"
                              : ""
                          }
                        >
                          {menu.label}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </div>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
