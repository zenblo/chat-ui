import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./style";

function Button({children,...rest}) {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.any
};

export default Button;
