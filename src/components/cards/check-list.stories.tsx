import { Card, CardBody } from "./card";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { CardList } from "./card-list";
import { CheckList, CheckListItem } from "./check-list";
import { Checkbox } from "../forms/checkbox-radio";

export default {
  title: "Components/CheckList",
  component: CheckList,
} as Meta;

const items: CheckListItem[] = [
  { label: "Option 1", value: 1 },
  { label: "Option 4", value: 2 },
  { label: "Option 3", value: 3 },
];

export const Default = () => <CheckList items={items}></CheckList>;
