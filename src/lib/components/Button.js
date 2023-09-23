import React from 'react';
import { colors } from '../utils/colors';
import styled from '@emotion/styled';

const Button = ({ variant, label, fullwidth, onClick, withArrow, style }) => {
  return (
    <StyledButton
      variant={variant}
      label={label}
      onClick={onClick}
      fullwidth={fullwidth}
      style={style}
    >
      {label}
      {withArrow && (
        <span style={{ marginLeft: '.5rem', marginTop: '4px' }}>
          <Arrow />{' '}
        </span>
      )}
    </StyledButton>
  );
};

const variantStyles = {
  primary: {
    backgroundColor: colors.primary[500],
    color: colors.black[500],
    border: `1px solid ${colors.primary[500]}`,
    '&:hover': {
      backgroundColor: colors.primary[400],
      border: `1px solid ${colors.primary[400]}`,
    },
  },
  secondary: {
    backgroundColor: colors.secondary[500],
    color: colors.white[500],
    border: `1px solid ${colors.secondary[500]}`,

    '&:hover': {
      backgroundColor: colors.secondary[400],
      border: `1px solid ${colors.secondary[400]}`,
    },
  },
  black: {
    backgroundColor: colors.black[500],
    color: colors.grey[200],
    border: `1px solid ${colors.black[500]}`,

    '&:hover': {
      backgroundColor: colors.grey[800],
      border: `1px solid ${colors.grey[800]}`,
    },
  },
  light: {
    backgroundColor: colors.orange[500],
    color: colors.black[500],
    border: `1px solid ${colors.orange[500]}`,

    '&:hover': {
      backgroundColor: colors.orange[400],
      border: `1px solid ${colors.orange[400]}`,
    },
  },
  outlinePrimary: {
    backgroundColor: 'transparent',
    color: colors.primary[500],
    border: `1px solid ${colors.primary[500]}`,

    '&:hover': {
      color: colors.grey[200],
      borderColor: colors.grey[200],
    },
  },
  outlineWhite: {
    backgroundColor: 'transparent',
    color: colors.white[500],
    border: `1px solid ${colors.white[500]}`,

    '&:hover': {
      color: colors.grey[200],
      borderColor: colors.grey[200],
    },
  },
};

const StyledButton = styled.button(
  {
    border: 0,
    padding: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    fontFamily: 'Roboto Mono',
    fontWeight: 600,
    fontSize: '1rem',

    '&:hover': {
      textDecoration: 'none',
    },

    ':focus:not(:focus-visible)': {
      outline: 0,
    },
  },
  ({ variant = 'primary', fullwidth }) => ({
    width: fullwidth ? '100%' : 'inherit',
    ...variantStyles[variant],
  })
);

const Arrow = () => {
  return (
    <svg
      fill="currentColor"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.95246 1.06044L6.64613 0.366772C6.93985 0.0730551 7.4148 0.0730551 7.70539 0.366772L13.7797 6.43797C14.0734 6.73169 14.0734 7.20663 13.7797 7.49723L7.70539 13.5715C7.41167 13.8653 6.93673 13.8653 6.64613 13.5715L5.95246 12.8779C5.65562 12.581 5.66187 12.0967 5.96496 11.8061L9.73016 8.21902H0.749916C0.334338 8.21902 0 7.88468 0 7.4691V6.46922C0 6.05364 0.334338 5.7193 0.749916 5.7193H9.73016L5.96496 2.1322C5.65874 1.84161 5.65249 1.35729 5.95246 1.06044Z" />
    </svg>
  );
};

export default Button;
