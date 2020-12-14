import React from "react";
import PropTypes from "prop-types";
import StyledParagraph from "./style";

function Paragraph({children,...rest}) {
  return (
    <StyledParagraph {...rest}>
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any
};

export default Paragraph;
