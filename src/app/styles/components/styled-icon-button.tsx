import styled from 'styled-components'

const StyledIconButton = styled.button`
  background-color: var(--primary);
  border: none;
  border-radius: 50%;
  color: var(--white);
  cursor: pointer;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(--primary-light);
  }

  &:active {
    background-color: var(--primary-dark);
  }
`

export default StyledIconButton
