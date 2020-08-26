import { FunctionComponentElement } from "react";

export type ArrayOrT<T> = T[] | T;

export type ContentChildren<P> = ArrayOrT<FunctionComponentElement<P>>;
