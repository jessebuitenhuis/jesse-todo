import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardRadio,
  CardCheckbox,
} from "./card";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { RadioGroup } from "../forms/checkbox-radio";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

export const Default = () => (
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);

export const CardWithRadio = () => <CardRadio label="hello"></CardRadio>;

export const CardWithRadioGroup = () => (
  <RadioGroup name="test">
    <CardRadio label="Option 1"></CardRadio>
    <CardRadio label="Option 1"></CardRadio>
  </RadioGroup>
);

export const CardWithCheckbox = () => (
  <CardCheckbox label="hello"></CardCheckbox>
);
