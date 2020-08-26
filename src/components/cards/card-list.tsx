import React, {
  Children,
  cloneElement,
  ReactChildren,
  isValidElement,
  ReactNode,
  ReactNodeArray,
  FunctionComponentElement,
} from "react";
import styles from "./card-list.module.scss";
import { CardProps } from "./card";

export const CardList = ({
  children,
}: {
  children: FunctionComponentElement<CardProps>[];
}) => {
  const clones = Children.map(children, (child, index) =>
    cloneElement(child, {
      isList: true,
    })
  );
  return <div className={styles.cardList}>{clones}</div>;
};
