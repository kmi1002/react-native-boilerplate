import {css} from 'styled-components';

export const remUnit = (value: number) => `
  ${value}rem
`;

export const icon = (url: string, width: string, height: string) => css`
  display: inline-block;
  vertical-align: top;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: ${width};
  height: ${height};
`;

export const iconText = (text: string) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  z-index: 0;

  &::before {
    content: '${text}';
    font-weight: 100;
  }
`;

export const btnBase = (
  color: string,
  background = 'transparent',
  border: number | string,
) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  outline: none;
  background: ${background};
  color: ${color};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: ${border};
`;

export const btnIcon = () => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;
  outline: none;
  border: 0;
  background: transparent;
  cursor: pointer;
`;
