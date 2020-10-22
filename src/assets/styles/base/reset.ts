import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  body {
    line-height: 1;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  nav ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote {
    &:before,
    &:after {
      content: none;
    }
  }

  q {
    &:before,
    &:after {
      content: none;
    }
  }

  a {
    display: block;
    margin: 0;
    padding: 0;
    font-size: 100%;
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    outline: none;

    &:link,
    &:hover,
    &:active,
    &:visited {
      color: inherit;
    }
  }

  ins {
    text-decoration: none;
  }

  mark {
    background: #ff9;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  del {
    text-decoration: line-through;
  }

  abbr[title],
  dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  hr {
    display: block;
    height: 2px;
    border: 0;
    background: #ccc;
    margin: 1em 0;
    padding: 0;
  }

  input,
  select {
    vertical-align: middle;
  }

  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;

    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  ul,
  ol,
  nav {
    list-style: none;
  }

  img,
  fieldset,
  iframe {
    border: 0 none;
    vertical-align: top;
  }

  label {
    display: block;
  }

  // 모바일 웹 브라우저의 외관 초기화
  input,
  textarea {
    appearance: none;
    box-shadow: none;
    box-sizing: border-box;
    margin: 0;
    outline: none;

    // 크롬에서 자동 완성 배경 제거 - https://c10106.tistory.com/4474
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }

  textarea {
    overflow-x: hidden;
    overflow-y: auto;
    resize: none;
  }
`;
