import React, { useState, CSSProperties } from "react";
import { Padding } from "../variables";
import styles from "./card.module.scss";
import { CheckboxRadioProps, Radio, Checkbox } from "../forms/checkbox-radio";

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

export const CardRadio = (
  props: CheckboxRadioProps & Omit<CardProps, "children">
) => {
  return (
    <Card {...props}>
      <Radio {...props} block padding></Radio>
    </Card>
  );
};

export const CardCheckbox = (
  props: CheckboxRadioProps & Omit<CardProps, "children">
) => {
  return (
    <Card {...props}>
      <Checkbox {...props} block padding></Checkbox>
    </Card>
  );
};
