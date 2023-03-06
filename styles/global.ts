import { createGlobalStyle } from "styled-components";
import { Gordita } from "./font";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  ${Gordita.style};
  font-size: 62.5%;
}


  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px #fff inset !important;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
  }


a {
  color: inherit;
  text-decoration: none;
}

button {
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
}

.ant-select-dropdown {
  box-shadow: none;
}
.ant-select-dropdown .ant-select-item {
  padding: 4px;
  align-items: center;
  /* border: 0.6px solid rgba(202, 204, 206, 0.47);
border-radius: 2px; */
}
.ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  background-color: #FCFDFD
}
`;

export default GlobalStyle;
