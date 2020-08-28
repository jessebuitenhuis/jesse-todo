import React from "react";
import { Checkbox, CheckboxRadioProps, Radio } from "../forms/checkbox-radio";
import "./card.scss";
import { ContentChildrenProps } from "../../utils/types";

export const CardBody = ({ children }: ContentChildrenProps) => (
  <div className="card-body">{children}</div>
);
export const CardHeader = ({ children }: ContentChildrenProps) => (
  <div className="card-header">{children}</div>
);
export const CardFooter = ({ children }: ContentChildrenProps) => (
  <div className="card-footer">{children}</div>
);

export interface CardProps extends ContentChildrenProps {
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return <div className={[className, "card"].join(" ")}>{children}</div>;
};

export const CardList = ({ children }: ContentChildrenProps) => {
  return <div className="card-list">{children}</div>;
};
