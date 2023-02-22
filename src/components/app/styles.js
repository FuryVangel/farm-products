import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --dark-primary-color: #333333;
    --light-primary-color: #ffffff;
    --light-secondary-color: #f6f6f6;
    --blue-primary-color: #d8ecfe;
    --salad-primary-color: #e1edce;
    --green-primary-color: #88aa4d;
    --pink-primary-color: #f8ddd7;
    --red-primary-color: #f75531;
    --orange-primary-color: #fc9b27;
  }

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorDarkPrimary};
  }

  .wrapper {
    width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
    padding-right: ${(props) => props.theme.pagePadding};
    padding-left: ${(props) => props.theme.pagePadding};
  }
`;
