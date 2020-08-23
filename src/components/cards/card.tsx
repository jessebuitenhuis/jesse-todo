import React, { CSSProperties, Component, useState } from "react";
import { BorderRadius, Padding, Border } from "../variables";

export const CardBody = ({ children }: { children: any }) => (
  <div style={{ padding: Padding.Default }}>{children}</div>
);
export const CardHeader = ({ children }: { children: any }) => (
  <div style={{ padding: Padding.Default }}>{children}</div>
);
export const CardFooter = ({ children }: { children: any }) => (
  <div style={{ padding: Padding.Default }}>{children}</div>
);

export const Card = ({
  isFirst = true,
  isLast = true,
  isOpen = false,
  children,
  onClick,
}: {
  isFirst?: boolean;
  isLast?: boolean;
  isOpen?: boolean;
  children: any;
  onClick: () => any;
}) => {
  const style: CSSProperties = {
    borderRadius: BorderRadius.Default,
    border: Border.Default,
  };

  const [open, setOpen] = useState(false);

  if (!isFirst && !open) {
    style.borderTopLeftRadius = style.borderTopRightRadius = 0;
  }

  if (!isLast && !open) {
    style.borderBottomLeftRadius = style.borderBottomRightRadius = 0;
    style.borderBottomWidth = 0;
  }

  if (open && !isLast) {
    style.marginBottom = "1em";
  }

  return (
    <div style={style} onClick={() => setOpen(!open)}>
      {children}
      {isFirst}
    </div>
  );
};
