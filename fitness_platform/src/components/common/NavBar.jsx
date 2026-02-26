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
    <nav className="flex max-w-61 flex-col items-center">
      <ul className="mt-6 max-w-51 text-sm font-medium xl:text-base">
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
              className={`flex h-11 items-center justify-between rounded-lg pr-4 pl-8 xl:h-12 xl:pr-6 xl:pl-13 ${
                item.route === path ? "bg-accent text-primary" : ""
              }`}
            >
              {item.route ? (
                <Link to={item.route} className="flex-1">
                  {item.label}
                </Link>
              ) : (
                <span className="flex-1 whitespace-nowrap">{item.label}</span>
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
              <div className="relative ml-8 border-l border-dashed border-[#2125290]">
                {item.children.map((menu, childIdx) => (
                  <li
                    key={childIdx}
                    className="relative flex h-9 items-center before:left-0 before:w-2 before:border-t before:border-dashed before:border-[#2125290]"
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
