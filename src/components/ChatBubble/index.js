import React from "react";
import PropTypes from "prop-types";
import StyledChatBubble from "./style";

function ChatBubble({children,...rest}) {
  return (
    <StyledChatBubble {...rest}>
      {children}
    </StyledChatBubble>
  );
}

ChatBubble.propTypes = {
  children: PropTypes.any
};

export default ChatBubble;
