import React from "react";
import clsx from "clsx";
import TabElemen from "./TabElement";
import styles from "./Tabs.module.css";

export interface Tab {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: Tab["value"];
  onTabClick: (tab: Tab) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabClick,
  className,
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <ul className={styles.tabs}>
        {tabs.map((tab) => (
          <TabElemen
            key={tab.label}
            tab={tab}
            OnTabClick={onTabClick}
            className={clsx({ [styles.active]: activeTab === tab.value })}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
