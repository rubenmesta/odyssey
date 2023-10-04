import React from 'react';
import { colors } from '../utils/colors';
import styled from '@emotion/styled';

const Button = ({
  variant,
  size,
  label,
  fullwidth,
  onClick,
  withArrow,
  style,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
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
    backgroundColor: colors.primary[900],
    color: colors.white[500],
    border: `1px solid ${colors.primary[900]}`,
    '&:hover': {
      backgroundColor: colors.primary[800],
      border: `1px solid ${colors.primary[800]}`,
    },
  },
  secondary: {
    backgroundColor: colors.secondary[100],
    color: colors.black[800],
    border: `1px solid ${colors.secondary[100]}`,

    '&:hover': {
      backgroundColor: colors.secondary[200],
      border: `1px solid ${colors.secondary[200]}`,
    },
  },
  black: {
    backgroundColor: colors.black[500],
    color: colors.neutrals[200],
    border: `1px solid ${colors.black[500]}`,

    '&:hover': {
      backgroundColor: colors.neutrals[800],
      border: `1px solid ${colors.neutrals[800]}`,
    },
  },
  purple: {
    backgroundColor: colors.purple[600],
    color: colors.white[500],
    border: `1px solid ${colors.purple[600]}`,

    '&:hover': {
      backgroundColor: colors.purple[700],
      border: `1px solid ${colors.purple[700]}`,
    },
  },
  outlinePrimary: {
    backgroundColor: 'transparent',
    color: colors.white[500],
    border: `1px solid ${colors.secondary[100]}`,

    '&:hover': {
      color: colors.purple[200],
      borderColor: colors.purple[200],
    },
  },
  outlineWhite: {
    backgroundColor: 'transparent',
    color: colors.white[500],
    border: `1px solid ${colors.white[500]}`,

    '&:hover': {
      color: colors.neutrals[200],
      borderColor: colors.neutrals[200],
    },
  },
};

const sizeStyles = {
  small: {
    height: '35px',
    lineHeight: '35px',
    padding: '.5rem',
    fontSize: '.875rem',
  },
  medium: {
    height: '40px',
    lineHeight: '40px',
    padding: '.75rem',
    fontSize: '1rem',
  },
  large: {
    height: '56px',
    lineHeight: '56px',
    padding: '1rem',
    fontSize: '1.2rem',
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
    fontFamily: 'IBM Plex Mono',
    fontWeight: 600,
    fontSize: '1rem',

    '&:hover': {
      textDecoration: 'none',
    },

    ':focus:not(:focus-visible)': {
      outline: 0,
    },
  },
  ({ variant = 'primary', size = 'large', fullwidth }) => ({
    width: fullwidth ? '100%' : 'inherit',
    ...variantStyles[variant],
    ...sizeStyles[size],
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
