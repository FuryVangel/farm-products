import styled from "styled-components";

export const TextInput = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  padding-right: 12px;
  padding-left: 12px;
  font-size: 14px;
  background-color: ${(props) => props.theme.backgroundColorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  ::placeholder {
    color: ${(props) => props.theme.fontColorBlack};
  }
`;

export default TextInput;
