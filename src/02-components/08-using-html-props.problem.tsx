import React from "react";

export const Button = ({ className, ...rest }: React.ComponentPropsWithoutRef<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
