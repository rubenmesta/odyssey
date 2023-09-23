const breakpoints = {
  hd: '1280',
  desktop: '992',
  tablet: '680',
};

export const BREAKPOINTS = {
  base: 0,
  tablet: parseInt(breakpoints.tablet, 10),
  desktop: parseInt(breakpoints.desktop, 10),
  hd: parseInt(breakpoints.hd, 10),
};

const getScreenSizeMedia = (breakpoint) =>
  `@media only screen and (min-width: ${BREAKPOINTS[breakpoint]}px)`;

export const MEDIA_QUERIES = {
  tablet: getScreenSizeMedia('tablet'),
  desktop: getScreenSizeMedia('desktop'),
  hd: getScreenSizeMedia('hd'),
  prefersReducedMotion: '@media screen and (prefers-reduced-motion: reduce)',
};
