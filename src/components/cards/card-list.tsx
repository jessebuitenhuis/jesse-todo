import React, { Children, cloneElement } from "react";

export const CardList = ({ children }: { children: any }) => {
  const clones = Children.map(children, (child, index) =>
    cloneElement(child, {
      isFirst: index === 0,
      isLast: index === children.length - 1,
    })
  );

  return <div>{clones}</div>;
};
