import React from "react";
import { type FooterProps } from "../../../types/global";

const Footer: React.FC<FooterProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Footer;
