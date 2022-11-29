import React from "react";

const CustomForm = (props) => {
  const { children, onSubmit } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {children}
    </form>
  );
};

export default CustomForm;
