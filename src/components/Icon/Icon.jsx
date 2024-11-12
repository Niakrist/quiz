import React from "react";

import Logo from "./icons/Logo";
import Minus from "./icons/Minus";
import Plus from "./icons/Plus";
import Ellipse from "./icons/Ellipse";
import Close from "./icons/Close";

const Icon = ({ name, className }) => {
  const icons = {
    logo: <Logo className={className} />,
    plus: <Plus className={className} />,
    minus: <Minus className={className} />,
    ellipse: <Ellipse className={className} />,
    close: <Close className={className} />,
  };

  return icons[name];
};

export default Icon;
