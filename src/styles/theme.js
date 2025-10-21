// Enhanced Design System - Swiss Minimal Aesthetic
// Inspired by Swiss design principles: clarity, readability, objectivity

// Refined color palette - more minimal and professional
export const COLORS = {
  // Primary colors - keeping the blue but more refined
  primary: "#0052FF", // Vibrant blue for CTAs
  primaryDark: "#0041CC", // Darker blue for hover states
  primaryLight: "#E6EEFF", // Light blue for backgrounds

  // Neutrals - Swiss design relies heavily on black, white, and grays
  black: "#000000",
  white: "#FFFFFF",
  gray900: "#1A1A1A", // Near black for primary text
  gray800: "#2D2D2D",
  gray700: "#404040",
  gray600: "#666666", // Secondary text
  gray500: "#808080",
  gray400: "#999999",
  gray300: "#CCCCCC", // Borders
  gray200: "#E5E5E5",
  gray100: "#F5F5F5", // Light backgrounds
  gray50: "#FAFAFA",

  // Accent colors - minimal use
  accent: "#FF3366", // For special highlights
  success: "#00C853",
  warning: "#FFC107",
  error: "#FF1744",

  // Semantic colors
  text: {
    primary: "#1A1A1A",
    secondary: "#666666",
    tertiary: "#999999",
    inverse: "#FFFFFF",
  },

  background: {
    primary: "#FFFFFF",
    secondary: "#FAFAFA",
    tertiary: "#F5F5F5",
    dark: "#1A1A1A",
  },

  border: {
    light: "#E5E5E5",
    medium: "#CCCCCC",
    dark: "#999999",
  },
};

// Swiss typography - emphasis on Helvetica-like fonts, clear hierarchy
export const FONTS = {
  // Font families - Using Inter as it's close to Helvetica
  family: {
    primary:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
  },

  // Font sizes - using a modular scale
  size: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    md: "1.125rem", // 18px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    "2xl": "2rem", // 32px
    "3xl": "2.5rem", // 40px
    "4xl": "3rem", // 48px
    "5xl": "3.75rem", // 60px
    "6xl": "4.5rem", // 72px
    "7xl": "6rem", // 96px
  },

  // Font weights
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.1,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },

  // Letter spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

// Spacing system - based on 8px grid
export const SPACING = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
  40: "10rem", // 160px
  48: "12rem", // 192px
  56: "14rem", // 224px
  64: "16rem", // 256px
};

// Border radius - minimal, mostly sharp corners
export const RADIUS = {
  none: "0",
  sm: "0.125rem", // 2px
  base: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  full: "9999px",
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Shadows - subtle, minimal
export const SHADOWS = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
};

// Z-index scale
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

// Transitions
export const TRANSITIONS = {
  fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
  base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  slower: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
};

// Container widths
export const CONTAINER = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px",
};

export default {
  COLORS,
  FONTS,
  SPACING,
  RADIUS,
  BREAKPOINTS,
  SHADOWS,
  Z_INDEX,
  TRANSITIONS,
  CONTAINER,
};
