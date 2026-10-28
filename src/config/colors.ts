/**
 * Centralized Design System Colors for Frauenzeit Brühl
 * Brand primary pink is unified to standard Tailwind pink-900 (#831843).
 */

export const colors = {
  // Primary Brand Color (Tailwind pink-900)
  primary: {
    name: 'pink-900',
    hex: '#831843',
    hexHover: '#500724', // pink-950
    hexLight: '#fdf2f8', // pink-50
    classes: {
      text: 'text-pink-900',
      textHover: 'hover:text-pink-950',
      bg: 'bg-pink-900',
      bgHover: 'hover:bg-pink-950',
      border: 'border-pink-900',
      selection: 'selection:bg-pink-900 selection:text-white',
    },
  },
  // Neutral Warm Palette
  neutral: {
    pageBg: '#FCFBF9',
    sectionBg: '#FAF5F6',
    borderSoft: '#F0E6E8',
    borderAccent: '#E8D2D7',
    textPrimary: '#2B2326',
    textSecondary: '#5C4A4F',
    textMuted: '#735F64',
    textSubtle: '#826970',
  },
} as const;

export type Colors = typeof colors;
export default colors;
