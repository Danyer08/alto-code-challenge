import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: var(--gray-dark);
  border: 1px solid var(--gray-dark);
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  padding: var(--p-2) var(--p-4);
  &:hover {
    background-color: var(--gray-light);
    border: 1px solid var(--gray-lighter);
  }
`

export default StyledButton
