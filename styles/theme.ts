const colors = {
  // main
  main: '#ff4081',
  main2: '#fe548d',
  main3: '#fc79a5',
  main4: '#ea306f',

  // accent
  accent: '#3d6ef6',
  accent2: '#e80000',

  // grayscale
  black: '#000000',
  gray1: '#444444',
  gray2: '#888888',
  gray3: '#bdbdbd',
  gray4ap: '#eaeaea',

  // background
  bgWhite: '#ffffff',
  bgGray: '#f9f9f9',
  bgBlue: '#e2e9fb',
  bgPink: '#fff2f6',
} as const;

const theme = {
  colors,
} as const;

export default theme;
