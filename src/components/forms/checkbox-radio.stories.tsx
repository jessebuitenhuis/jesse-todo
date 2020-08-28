import { Checkbox, Radio, RadioGroup } from "./checkbox-radio";
import { Meta } from "@storybook/react/types-6-0";
import { SFC } from "react";
import React from "react";
import { CardList } from "../cards/card";

export default {
  title: "Components/Forms/Checkbox-Radio",
  component: Checkbox,
} as Meta;

export const CheckboxDefault: SFC<{}> = () => <Checkbox value={0} />;
export const CheckboxWithLabel: SFC<{}> = () => (
  <Checkbox label="This is a label" value={0} />
);
export const CheckboxCard: SFC<{}> = () => (
  <Checkbox label="This is a label" value={0} card />
);

export const CheckboxCardList: SFC<{}> = () => (
  <CardList>
    <Checkbox label="This is a label" value={0} card />
    <Checkbox label="This is a label" value={1} card />
    <Checkbox label="This is a label" value={2} card />
  </CardList>
);

export const RadioDefault: SFC<{}> = () => <Radio value={0} />;
export const RadioWithLabel: SFC<{}> = () => (
  <Radio label="This is a label" value={0} />
);
export const RadioBlock: SFC<{}> = () => (
  <Radio label="This is a label" value={0} block />
);
export const RadioCard: SFC<{}> = () => (
  <Radio label="This is a label" value={0} card />
);

export const RadioGroupDefault: SFC<{}> = () => (
  <RadioGroup>
    <Radio label="This is a label" value={0}></Radio>
    <Radio label="This is a label" value={1}></Radio>
  </RadioGroup>
);

export const RadioGroupCard: SFC<{}> = () => (
  <RadioGroup card>
    <Radio label="This is a label" value={0}></Radio>
    <Radio label="This is a label" value={1}></Radio>
  </RadioGroup>
);
