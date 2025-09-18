import React, { type JSX } from "react";

interface HeaderProps {
  data: string;
  title?: string;
}

export const HeaderFunctionArrow: React.FC<HeaderProps> = ({ data, title }) => {
  return (
    <h1 className="">
      Hello Dunia {data}, {title}
    </h1>
  );
};

export function HeaderFunctionBiasa({ data, title }: HeaderProps): JSX.Element {
  return (
    <h1>
      Hello Dunia {data}, {title}
    </h1>
  );
}
