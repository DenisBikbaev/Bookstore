import React from "react";
import clsx from "clsx";

import styles from "./Typography.module.css";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: "primary" | "primary_2" | "secondary";
  font?: "Helios-Regular" | "Helios-Bold" | "BebasNeue-Bold" | "DINPro-Regular";
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "h5",
  color = "primary",
  font = "Helios-Regular",
  className,
  children,
}) => {
  const Tag = variant;

  return (
    <Tag
      className={clsx(styles[variant], styles[color], styles[font], className)}
    >
      {children}
    </Tag>
  );
};

export default Typography;
