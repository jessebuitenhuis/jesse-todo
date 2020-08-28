import React, {
  cloneElement,
  CSSProperties,
  isValidElement,
  ChangeEventHandler,
  useState,
} from "react";
import { ComponentChildren } from "../../utils/types";
import "./checkbox-radio.scss";

export interface CheckboxRadioProps<T = unknown> {
  label?: string;
  name?: string;
  value: T;
  block?: boolean;
  card?: boolean;
  onChange?: (isSelected?: boolean, value?: T) => void;
}

let i = 0;

const CheckboxOrRadio = ({
  label,
  type,
  name,
  block,
  card,
  onChange,
}: CheckboxRadioProps & { type: "checkbox" | "radio" }) => {
  const key = `checkbox-${i++}`;
  const style: CSSProperties = {};

  if (block) style.display = "block";

  const classes = [type === "radio" ? "form-radio" : "form-check"];
  if (card) classes.push("check-radio-card");

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const selected = event.target.checked;
    // setSelected(selected);
    onChange && onChange(selected);
  };

  return (
    <div className={classes.join(" ")}>
      <input type={type} id={key} name={name} onChange={onChangeHandler} />
      <label htmlFor={key} style={style}>
        {label}
      </label>
    </div>
  );
};

export const Checkbox = (props: CheckboxRadioProps) => (
  <CheckboxOrRadio type="checkbox" {...props} />
);
export const Radio = (props: CheckboxRadioProps) => (
  <CheckboxOrRadio type="radio" {...props} />
);

export const RadioGroup = ({
  name = `radio-group-${i++}`,
  card = false,
  children,
}: {
  name?: string;
  card?: boolean;
  children: ComponentChildren<CheckboxRadioProps>;
}) => {
  const [value, setValue] = useState<unknown>(undefined);
  const onChange = (selected: boolean, value: unknown) => {
    if (selected) setValue(value);
  };

  const childrenWithName = React.Children.map(children, (child) =>
    isValidElement(child)
      ? cloneElement(child, { name: name, card, onChange: onChange } as Partial<
          CheckboxRadioProps
        >)
      : child
  );

  const className = card ? "card-list" : "";

  return <div className={className}>{childrenWithName}</div>;
};
