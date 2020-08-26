import React, {
  cloneElement,
  FunctionComponentElement,
  Children,
  CSSProperties,
} from "react";
import { ArrayOrT, ContentChildren } from "../../utils/types";

export interface CheckboxRadioProps<T = unknown> {
  label?: string;
  name?: string;
  value: T;
  block?: boolean;
  padding?: boolean;
}

let i = 0;

const CheckboxOrRadio = ({
  label,
  type,
  name,
  block,
  padding,
}: CheckboxRadioProps & { type: "checkbox" | "radio" }) => {
  const key = `checkbox-${i++}`;

  const style: CSSProperties = {};

  if (block) {
    style.display = "block";
    style.width = "100%";
  }

  if (padding) {
    style.padding = "10px";
  }

  // TODO select value

  return (
    <label htmlFor={key} style={style}>
      <input type={type} id={key} name={name} /> {label}
    </label>
  );
};

export const Checkbox = (props: CheckboxRadioProps) => (
  <CheckboxOrRadio type="checkbox" {...props} />
);
export const Radio = (props: CheckboxRadioProps) => (
  <CheckboxOrRadio type="radio" {...props} />
);

export const RadioGroup = ({
  name,
  children,
}: {
  name: string;
  children: ContentChildren<CheckboxRadioProps>;
}) => {
  const childrenWithName = React.Children.map(children, (child) =>
    cloneElement(child, { name })
  );

  return <div>{childrenWithName}</div>;
};
