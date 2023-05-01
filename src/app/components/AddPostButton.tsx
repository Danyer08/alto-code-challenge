import React from 'react';
import StyledButton from './styled/styled-button';

const AddPostButton = ({ onClick }: any) => {
  return (
    <StyledButton onClick={onClick}>
      Add Post
    </StyledButton>
  );
};

export default AddPostButton;
