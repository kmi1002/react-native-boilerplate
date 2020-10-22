import { remUnit } from '../utils/unit';

// 폰트
export const font = {
  type: {
    primary: '"Noto Sans KR", "Noto Sans", "Roboto", "Helvetica", Arial, sans-serif', // 고딕체
    secondary: '"Courier", "Courier New", "Georgia", "Times", "Times New Roman", serif', // 바탕체
    code: '"Courier New", monospace', // 글자 폭과 간격이 일정
  },
  color: '#4a4a4a',
  placeholderColor: '#d0d0d0',
  weight: {
    lighter: 100,
    normal: 400, // regular
    bold: 700,
    bolder: 900,
  },
  size: 16,
};

// 기본 색상
export const color = {
  primary: {
    100: '#00abbd',
    75: '#40c0ce',
    50: '#7fd5de',
    25: '#bfeaee',
  },
  accent: {
    100: '#4aade2',
    75: '#78c2ea',
    50: '#a4d6f0',
    25: '#d2eaf8',
  },
  status: {
    default: '#d0d0d0',
    green: '#6cd2bb',
    red: '#ff7a7a',
    yellow: '#fee071',
    grey: '#ebebeb',
  },
  text: {
    dark: {
      100: '#4a4a4a',
      75: '#787878',
      50: '#a4a4a4',
      25: '#d2d2d2',
    },
    light: {
      100: '#788c9e',
      75: '#9aa9b7',
      50: '#bbc5ce',
      25: '#dde2e7',
    },
  },
  background: {
    green: {
      100: '#edf4f5',
      50: '#f9fbfc',
    },
    blue: {
      100: '#f4f8fc',
      50: '#f9fbfd',
    },
    grey: {
      100: '#f9f9f9',
      50: '#fbfbfb',
    },
  },
};

export const border = {
  default: {
    radius: '8px',
    width: '1px',
  },
  focus: {
    radius: '8px',
    width: '2px',
  },
};

export const shadow = {
  ios: {
    x: 0,
    y: 0,
    blur: '10px',
    spread: 0,
    color: '#d0d0d0',
  },
  android: {
    color: '#d0d0d0',
    radius: '8px',
    width: '1px',
  },
};

// 링크 색상
export const link = {
  default: '#496ddb',
  visited: '#101011',
  hover: 'darken(#496ddb, 10%)',
  active: '#d44076',
};

// 크기
export const size = {
  s10: remUnit(0.625),
  s12: remUnit(0.75),
  s14: remUnit(0.875),
  s16: remUnit(1),
  s18: remUnit(1.125),
  s20: remUnit(1.25),
  s22: remUnit(1.375),
  s24: remUnit(1.5),
  s26: remUnit(1.625),
  s28: remUnit(1.75),
  s30: remUnit(1.875),
  s32: remUnit(2),
};

// Z-index
export const zIndex = {
  z0: -1,
  z1: 10,
  z2: 20,
  z3: 30,
  z4: 40,
  z5: 50,
  z6: 60,
  z7: 70,
  z8: 80,
  z9: 90,
  z10: 100,
};

export const radius = {
  code: 4,
  btn: 4,
  img: 4,
};
