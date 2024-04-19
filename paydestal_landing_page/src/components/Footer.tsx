import React from "react";
import { Link } from "react-router-dom";

export interface IFooterLinks {
  header: string;
  link1: string;
  link2: string;
  link3: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
}

const FooterLinks = ({ header, link1, link2, link3, icon1, icon2, icon3 }: IFooterLinks) => {
  return (
    <div className="col_Layout gap-4 ">
      <h3 className="header_typography text-xl font-[600]">{header}</h3>

      <ul className="col_Layout gap-4 font-[200]">
        <li className="flex gap-3">
            {icon1 && (

          <img src={icon1} alt="icon" />
            )}
          <Link to={`/${link1}`}>{link1}</Link>
        </li>
        <li className="flex gap-3">
            {icon2 && (

          <img src={icon2} alt="icon" />
            )}
          <Link to={`/${link2}`}>{link2}</Link>
        </li>
        <li className="flex gap-3">
            {icon3 && (

          <img src={icon3} alt="icon" />
            )}
          <Link to={`/${link3}`}>{link3}</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
