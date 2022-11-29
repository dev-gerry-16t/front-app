import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 10px;
  background: #f2f2f2;
  box-sizing: border-box;
  &:focus-visible {
    border: none;
    outline: none;
  }
`;

const CustomInput = ({
  value = "",
  onChange = () => {},
  name = "",
  placeholder = "",
  type = "text",
  isRequired = false,
  pattern = null,
}) => {
  return (
    <Input
      value={value}
      onChange={(e) => {
        const value = e.target.value;
        onChange(e, value);
      }}
      name={name}
      placeholder={placeholder}
      type={type}
      required={isRequired}
      pattern={pattern}
      onFocus={(e) => {}}
      onBlur={(e) => {}}
    />
  );
};

CustomInput.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
  pattern: PropTypes.string,
};

export default CustomInput;
