"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEDIA_QUERIES = exports.BREAKPOINTS = void 0;
require("core-js/modules/es.parse-int.js");
const breakpoints = {
  hd: '1280',
  desktop: '992',
  tablet: '680'
};
const BREAKPOINTS = {
  base: 0,
  tablet: parseInt(breakpoints.tablet, 10),
  desktop: parseInt(breakpoints.desktop, 10),
  hd: parseInt(breakpoints.hd, 10)
};
exports.BREAKPOINTS = BREAKPOINTS;
const getScreenSizeMedia = breakpoint => "@media only screen and (min-width: ".concat(BREAKPOINTS[breakpoint], "px)");
const MEDIA_QUERIES = {
  tablet: getScreenSizeMedia('tablet'),
  desktop: getScreenSizeMedia('desktop'),
  hd: getScreenSizeMedia('hd'),
  prefersReducedMotion: '@media screen and (prefers-reduced-motion: reduce)'
};
exports.MEDIA_QUERIES = MEDIA_QUERIES;