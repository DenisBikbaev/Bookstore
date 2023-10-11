import { useState } from "react";
import Tabs, { Tab } from "../components/Tabs/Tabs";

import styles from "./Register.module.css";

const tabs: Tab[] = [
  { label: "Sign In", value: "Sign In" },
  { label: "Sign Up", value: "Sign Up" },
];

const Register = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const handleChangeTab = (tab: Tab) => setActiveTab(tab.value);
  return (
    <>
      <Tabs
        className={styles.tabs}
        activeTab={activeTab}
        tabs={tabs}
        onTabClick={handleChangeTab}
      />
    </>
  );
};

export default Register;
