import React, { cloneElement } from "react";

export interface CheckboxRadioProps {
  label?: string;
  name?: string;
}

let i = 0;

const CheckboxOrRadio = ({
  label,
  type,
  name,
}: CheckboxRadioProps & { type: "checkbox" | "radio" }) => {
  const key = `checkbox-${i++}`;

  return (
    <label htmlFor={key}>
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
  children: any;
}) => {
  const childrenWithName = React.Children.map(children, (child) =>
    cloneElement(child, { name })
  );

  return <div>{childrenWithName}</div>;
};
