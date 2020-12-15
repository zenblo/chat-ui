import React from "react";
import PropTypes from "prop-types";
import StyledFilter from "./style";

function Filter({children,...rest}) {
  return (
    <StyledFilter {...rest}>
      {children}
    </StyledFilter>
  );
}

Filter.propTypes = {
  children: PropTypes.any
};

export default Filter;
