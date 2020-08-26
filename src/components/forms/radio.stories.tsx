import { Radio, RadioGroup } from "./checkbox-radio";
import { Meta } from "@storybook/react/types-6-0";
import { SFC } from "react";
import React from "react";

export default {
  title: "Components/Forms/Radio",
  component: Radio,
} as Meta;

export const Primary: SFC<{}> = () => <Radio />;
export const WithLabel: SFC<{}> = () => <Radio label="This is a label" />;
export const Block: SFC<{}> = () => <Radio label="This is a label" block />;
export const BlockPadding: SFC<{}> = () => (
  <Radio label="This is a label" block padding />
);
export const Group: SFC<{}> = () => (
  <RadioGroup name="group">
    <Radio label="This is a label"></Radio>
    <Radio label="This is a label"></Radio>
  </RadioGroup>
);
