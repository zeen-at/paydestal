import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu_icon.png";
import CustomButton from "../components/CustomButton";

const Menubar = () => {
  const menuItems = [
    {
      item: "Services",
      url: "/services",
      id: 1,
    },
    {
      item: "Pricing",
      url: "/pricing",
      id: 2,
    },
    {
      item: "Developer",
      url: "/developer",
      id: 3,
    },
    {
      item: "Services",
      url: "/services",
      id: 4,
    },
    {
      item: "Why Pedestal",
      url: "/whypedestal",
      id: 5,
    },
    {
      item: "Company",
      url: "/company",
      id: 6,
    },
    {
      item: "Support",
      url: "/support",
      id: 7,
    },
  ];

  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="nav font-jakarta">
      <div className="w-full px-10 lg:px-32 py-10 justifyFlex sticky">
        <div>
          <img src={Logo} alt="logo" className="logo " />
        </div>
        <div className="hidden lg:block">
          <ul className="listing flexSpread gap-4">
            {menuItems.map(({ item, id, url }) => (
              <li key={id}>
                <Link to={url}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="listing flexSpread gap-6">
            <li>Login</li>
            <li>
              <button type="button" className="buttons">
                Get Started
              </button>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <button type="button" onClick={() => setIsClicked(!isClicked)}>
            <img src={Menu} alt="menu_icon" />
            {isClicked && (
              <ul className="listing mobileMenu">
                {menuItems.map(({ item, id, url }) => (
                  <li key={id}>
                    <Link to={url}>{item}</Link>
                  </li>
                ))}
                <ul className="flex flex-row gap-3 items-center">
                  <li>Login</li>
                  <li>
                    <CustomButton type="button" label="Get Started" />
                  </li>
                </ul>
              </ul>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menubar;
