'use client';

import { useEffect } from 'react';
import { getSeasonalTheme } from '@/utils/seasonalTheme';

export default function SeasonalTheme() {
  useEffect(() => {
    const theme = getSeasonalTheme();
    const root = document.documentElement;

    // Apply seasonal CSS variables
    root.style.setProperty('--seasonal-primary', theme.primary);
    root.style.setProperty('--seasonal-secondary', theme.secondary);
    root.style.setProperty('--seasonal-accent', theme.accent);
    root.style.setProperty('--seasonal-gradient', theme.gradient);
    root.style.setProperty('--seasonal-gradient-text', theme.gradientText);

    // Helper function to convert hex to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result 
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : null;
    };

    // Set RGB values for opacity support
    const primaryRgb = hexToRgb(theme.primary);
    const secondaryRgb = hexToRgb(theme.secondary);
    
    if (primaryRgb) {
      root.style.setProperty('--seasonal-primary-rgb', primaryRgb);
    }
    if (secondaryRgb) {
      root.style.setProperty('--seasonal-secondary-rgb', secondaryRgb);
    }

    // Apply theme class to body for additional styling if needed
    document.body.className = `theme-${theme.name}`;
  }, []);

  return null;
}

