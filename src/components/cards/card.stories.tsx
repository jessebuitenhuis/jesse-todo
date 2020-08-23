import { Card, CardHeader, CardBody, CardFooter } from "./card";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";

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
