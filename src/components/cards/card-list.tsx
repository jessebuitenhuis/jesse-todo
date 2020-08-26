import React, {
  Children,
  cloneElement,
  ReactChildren,
  isValidElement,
  ReactNode,
  ReactNodeArray,
  FunctionComponentElement,
} from "react";
import { CardProps } from "./card";
import { ArrayOrT } from "../../utils/types";

export const CardList = ({
  children,
}: {
  children: ArrayOrT<FunctionComponentElement<CardProps>>;
}) => {
  const clones = Children.map(children, (child, index) =>
    cloneElement(child, {
      isList: true,
    })
  );
  return <div>{clones}</div>;
};
