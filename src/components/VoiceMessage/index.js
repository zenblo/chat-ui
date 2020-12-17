import React from "react";
import PropTypes from "prop-types";
import StyledVoiceMessage from "./style";

function VoiceMessage({children,...rest}) {
  return (
    <StyledVoiceMessage {...rest}>
      {children}
    </StyledVoiceMessage>
  );
}

VoiceMessage.propTypes = {
  children: PropTypes.any
};

export default VoiceMessage;
