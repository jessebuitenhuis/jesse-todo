import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardRadio,
  CardCheckbox,
  CardList,
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

const TestCard = (
  <Card>
    <CardBody>Item</CardBody>
  </Card>
);

export const CardListMultiple = () => (
  <CardList>
    {TestCard}
    {TestCard}
    {TestCard}
  </CardList>
);

export const CardListSingle = () => <CardList>{TestCard}</CardList>;
