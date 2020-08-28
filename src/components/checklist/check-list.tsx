import React from "react";
import { CardList } from "../cards/card";
import { Checkbox } from "../forms/checkbox-radio";

export interface CheckListItem<T = unknown> {
  label: string;
  value: T;
}

export interface CheckListProps<T = unknown> {
  items: CheckListItem<T>[];
}

export const CheckList = <T,>({ items }: CheckListProps<T>) => {
  return (
    <CardList>
      {items.map((item) => (
        <Checkbox card {...item}></Checkbox>
      ))}
    </CardList>
  );
};
