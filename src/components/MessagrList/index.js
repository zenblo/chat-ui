import React from "react";
import PropTypes from "prop-types";
import StyledMessagrList from "./style";

function MessagrList({children,...rest}) {
  return (
    <StyledMessagrList {...rest}>
      {children}
    </StyledMessagrList>
  );
}

MessagrList.propTypes = {
  children: PropTypes.any
};

export default MessagrList;
