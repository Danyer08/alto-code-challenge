import React from 'react';
import StyledButton from '../styles/components/styled-button';

const AddPostButton = ({ onClick }: any) => {
  return (
    <StyledButton onClick={onClick}>
      Add Post
    </StyledButton>
  );
};

export default AddPostButton;
