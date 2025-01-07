import styled from "@emotion/styled";

const Button = styled.button`
  color: ${props => (props.primary ? 'red' : 'blue')};
  background-color: white;
`

export default Button;