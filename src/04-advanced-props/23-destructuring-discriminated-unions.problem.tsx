/**
 * We've got the same problem as the previous exercise, but this time we're
 * destructuring our props.
 *
 * 1. Figure out why the error on 'title' is happening.
 *
 * 2. Find a way to fix the error.
 */

type ModalProps =
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    };

// This exercise was a weird one because it is basically going back to the implementation of the previous
export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return <div>No title</div>;
  } else {
    return <div>Title: {props.title}</div>;
  }
};

export const Test = () => {
  return (
    <div>
      <Modal variant="title" title="Hello" />
      <Modal variant="no-title" />

      {/* @ts-expect-error */}
      <Modal />
      <Modal
        variant="no-title"
        // @ts-expect-error
        title="Oh dear"
      />
    </div>
  );
};
