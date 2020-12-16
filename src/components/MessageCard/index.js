import React from "react";
import PropTypes from "prop-types";
import StyledMessageCard from "./style";

function MessageCard({children,...rest}) {
  return (
    <StyledMessageCard {...rest}>
      {children}
    </StyledMessageCard>
  );
}

MessageCard.propTypes = {
  children: PropTypes.any
};

export default MessageCard;
