import { FunctionComponentElement, ReactNode } from "react";

export type ArrayOrT<T> = T[] | T;

export type ContentChildren<T extends ReactNode = ReactNode> = ArrayOrT<T>;
export type ContentChildrenProps<T extends ReactNode = ReactNode> = {
  children: ContentChildren<T>;
};

export type ComponentChildren<P = unknown> = ContentChildren<
  FunctionComponentElement<P>
>;
export type ComponentChildrenProps<
  T extends ReactNode = ReactNode
> = ContentChildrenProps<T>;
