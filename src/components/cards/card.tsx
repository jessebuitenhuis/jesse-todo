import React, { useState, CSSProperties } from "react";
import { Padding } from "../variables";
import styles from "./card.module.scss";

export interface CardProps {
  children: any;
  isList?: boolean;
}

export const CardBody = ({ children }: { children: any }) => (
  <div style={{ padding: Padding.Default }}>{children}</div>
);
export const CardHeader = ({ children }: { children: any }) => (
  <div style={{ padding: Padding.Default }}>{children}</div>
);
export const CardFooter = ({ children }: { children: any }) => (
  <div style={{ padding: Padding.Default }}>{children}</div>
);

export const Card = ({ children, isList }: CardProps) => {
  const getClassNames = () => {
    const classes = [styles.card];
    if (isList) {
      classes.push(styles.cardListItem);
    }
    return classes.join(" ");
  };

  return <div className={getClassNames()}>{children}</div>;
};
