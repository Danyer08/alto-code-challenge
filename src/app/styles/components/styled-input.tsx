import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 1rem auto;
`

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;

  &:focus {
    outline: none;
  }
`

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 16px;
  color: gray;

  ${Input}:focus ~ &,
  ${Input}:not(:placeholder-shown) ~ & {
    top: -20px;
    left: 10px;
    font-size: 14px;
    color: black;
    font-weight: bold;
  }
`

const Span = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`

const StyledInput = ({ label, error, ...rest }: any) => (
  <InputContainer>
    <Input {...rest} />
    <Label>{label}</Label>
    {error && <Span>{error}</Span>}
  </InputContainer>
)

export default StyledInput
