import React from 'react'
import styled from 'styled-components'

const TextareaContainer = styled.div`
  position: relative;
  width: 300px;
  margin: 1rem auto;
`

const Textarea = styled.textarea`
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

  ${Textarea}:focus ~ &,
  ${Textarea}:not(:placeholder-shown) ~ & {
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

const StyledTextarea = ({ label, error, ...rest }: any) => (
  <TextareaContainer>
    <Textarea {...rest} />
    <Label>{label}</Label>
    {error && <Span>{error}</Span>}
  </TextareaContainer>
)

export default StyledTextarea
