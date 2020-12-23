import React from "react";
import PropTypes from "prop-types";
import StyledEditProfile from "./style";

function EditProfile({children,...rest}) {
  return (
    <StyledEditProfile {...rest}>
      {children}
    </StyledEditProfile>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any
};

export default EditProfile;
