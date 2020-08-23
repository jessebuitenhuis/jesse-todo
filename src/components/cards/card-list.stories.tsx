import { Card, CardBody } from "./card";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { CardList } from "./card-list";

export default {
  title: "Components/CardList",
  component: CardList,
} as Meta;

const TestCard = (
  <Card>
    <CardBody>Item</CardBody>
  </Card>
);

export const Default = () => (
  <CardList>
    {TestCard}
    {TestCard}
    {TestCard}
  </CardList>
);
