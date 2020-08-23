import { Checkbox } from "./checkbox-radio";
import { Meta } from "@storybook/react/types-6-0";
import { SFC } from "react";
import React from "react";

export default {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
} as Meta;

export const Primary: SFC<{}> = () => <Checkbox />;
export const WithLabel: SFC<{}> = () => <Checkbox label="This is a label" />;
