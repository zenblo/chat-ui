import React from "react";
import PropTypes from "prop-types";
import StyledSwitch from "./style";

function Switch({children,...rest}) {
  return (
    <StyledSwitch {...rest}>
      {children}
    </StyledSwitch>
  );
}

Switch.propTypes = {
  children: PropTypes.any
};

export default Switch;
