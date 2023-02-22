import styled, { css } from "styled-components";

const gridList = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) =>
    props.$indent ? `${props.$indent}px` : `${props.theme.indent}`};
  margin-top: 44px;
  margin-bottom: 64px;

  li {
    font-size: ${(props) =>
      props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSizeDefault};
    line-height: ${(props) =>
      props.$lineHeight ? `${props.$lineHeight}px` : "27px"};
    text-align: ${(props) => props.$align || "center"};
    overflow: hidden;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
