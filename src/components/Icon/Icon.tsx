import React from "react";

import { ReactComponent as Heart } from "./icons/heart.svg";
import { ReactComponent as HeartHover } from "./icons/heart-hover.svg";
import { ReactComponent as HeartActive } from "./icons/heart-active.svg";
import { ReactComponent as HeartDisabled } from "./icons/heart-disabled.svg";
import { ReactComponent as HeartHeder } from "./icons/heart-heder.svg";
import { ReactComponent as HeartFav } from "./icons/heart-favorite.svg";
import { ReactComponent as Cart } from "./icons/Cart.svg";
import { ReactComponent as Account } from "./icons/Account.svg";
import { ReactComponent as Search } from "./icons/Search.svg";
import { ReactComponent as Cancel } from "./icons/Cancel.svg";
import { ReactComponent as CancelActive } from "./icons/Cancel-Active.svg";
import { ReactComponent as CancelDisabled } from "./icons/Cancel-Disabled.svg";
import { ReactComponent as ArrowLeft } from "./icons/Icon-Arrow-Left.svg";
import { ReactComponent as Minus } from "./icons/minus.svg";
import { ReactComponent as Plus } from "./icons/plus.svg";

const icons = {
  heart: Heart,
  heartHover: HeartHover,
  heartActive: HeartActive,
  heartDisabled: HeartDisabled,
  heartHeder: HeartHeder,
  heartFav: HeartFav,
  cart: Cart,
  account: Account,
  search: Search,
  cancel: Cancel,
  cancelActive: CancelActive,
  cancelDisabled: CancelDisabled,
  arrowLeft: ArrowLeft,
  minus: Minus,
  plus: Plus,
};

export type IconType = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: IconType;
}

const Icon: React.FC<IconProps> = ({ type, ...props }) => {
  const Element = icons[type];
  return <Element {...props} />;
};

export default Icon;
