import React from "react";
import PropTypes from "prop-types";
import StyledPopover from "./style";

function Popover({children,...rest}) {
  return (
    <StyledPopover {...rest}>
      {children}
    </StyledPopover>
  );
}

Popover.propTypes = {
  children: PropTypes.any
};

export default Popover;
