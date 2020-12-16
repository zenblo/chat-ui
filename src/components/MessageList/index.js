import React from "react";
import PropTypes from "prop-types";
import StyledMessageList from "./style";

function MessageList({children,...rest}) {
  return (
    <StyledMessageList {...rest}>
      {children}
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any
};

export default MessageList;
