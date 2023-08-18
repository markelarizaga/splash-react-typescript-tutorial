import { useCallback } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const Buttons = (props: { id: string }) => {
  // This was my first solution, which makes the error go away, but I prefer the second solution
  // const onClick = useCallback<(buttonName: string) => void>(
  //   (buttonName) => {
  //     console.log(props.id, buttonName);
  //   },
  //   [props.id],
  // );
    const onClick = useCallback(
        (buttonName: string) => {
            console.log(props.id, buttonName);
        },
        [props.id],
    );

  type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>;

  return (
    <div>
      <button onClick={() => onClick("A")}>A</button>
      <button onClick={() => onClick("B")}>B</button>
      <button onClick={() => onClick("C")}>C</button>
    </div>
  );
};
