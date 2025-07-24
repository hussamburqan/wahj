import { useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router";

// Define the type for nav items (optional, for scalability)
interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Careers", path: "/careers" },
  { label: "About", path: "/about-us" },
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Menu Icon for Mobile */}
      <div
        className={`${classes["hamburger"]} ${
          isSidebarOpen ? classes["open"] : ""
        }`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar/Sidebar */}
      <nav
        className={`${classes["nav"]} ${
          isSidebarOpen ? classes["sidebar-open"] : ""
        }`}
      >
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? classes["active"] : undefined
                }
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
