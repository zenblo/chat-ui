import React from "react";
import PropTypes from "prop-types";
import StyledHeading from "./style";

function Heading({children,...rest}) {
  return (
    <StyledHeading {...rest}>
      {children}
    </StyledHeading>
  );
}

Heading.propTypes = {
  children: PropTypes.any
};

export default Heading;
