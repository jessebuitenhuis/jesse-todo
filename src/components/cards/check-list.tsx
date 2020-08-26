import { CardList } from "./card-list";
import React from "react";
import { Card, CardRadio, CardCheckbox } from "./card";

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
        <CardCheckbox {...item}></CardCheckbox>
      ))}
    </CardList>
  );
};
