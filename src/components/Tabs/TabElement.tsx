import React from "react";
import clsx from "clsx";

import { Tab } from "./Tabs";

import styles from "./Tabs.module.css";

interface TabElemenProps {
  tab: Tab;
  OnTabClick: (tab: Tab) => void;
  className?: string;
}

const TabElemen: React.FC<TabElemenProps> = ({
  tab,
  OnTabClick,
  className,
}) => {
  const handleClick = () => OnTabClick(tab);
  return (
    <>
      <li className={clsx(styles.button_element, className)}>
        <button
          className={clsx(styles.button, className)}
          onClick={handleClick}
        >
          {tab.label}
        </button>
      </li>
    </>
  );
};

export default TabElemen;
