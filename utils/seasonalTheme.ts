export type SeasonalTheme = {
  name: string;
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  gradientText: string;
};

export function getSeasonalTheme(): SeasonalTheme {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate(); // 1-31

  // Christmas: December 1-25
  if (month === 12 && day >= 1 && day <= 25) {
    return {
      name: 'christmas',
      background: '#0a1a0a',
      foreground: '#ffffff',
      primary: '#dc2626', // red
      secondary: '#16a34a', // green
      accent: '#fbbf24', // gold
      gradient: 'linear-gradient(135deg, #dc2626 0%, #16a34a 50%, #fbbf24 100%)',
      gradientText: 'linear-gradient(135deg, #dc2626 0%, #16a34a 100%)',
    };
  }

  // Valentine's Day: February 1-14
  if (month === 2 && day >= 1 && day <= 14) {
    return {
      name: 'valentines',
      background: '#1a0a0f',
      foreground: '#ffffff',
      primary: '#ec4899', // pink
      secondary: '#dc2626', // red
      accent: '#fdf2f8', // light pink
      gradient: 'linear-gradient(135deg, #ec4899 0%, #dc2626 50%, #fdf2f8 100%)',
      gradientText: 'linear-gradient(135deg, #ec4899 0%, #dc2626 100%)',
    };
  }

  // Halloween: October 1-31
  if (month === 10) {
    return {
      name: 'halloween',
      background: '#0a0a0a',
      foreground: '#ffffff',
      primary: '#ea580c', // orange
      secondary: '#000000', // black
      accent: '#a855f7', // purple
      gradient: 'linear-gradient(135deg, #ea580c 0%, #000000 50%, #a855f7 100%)',
      gradientText: 'linear-gradient(135deg, #ea580c 0%, #a855f7 100%)',
    };
  }

  // Spring: March, April, May
  if (month >= 3 && month <= 5) {
    return {
      name: 'spring',
      background: '#0f1a0f',
      foreground: '#ffffff',
      primary: '#86efac', // light green
      secondary: '#fbbf24', // yellow
      accent: '#f0abfc', // light purple
      gradient: 'linear-gradient(135deg, #86efac 0%, #fbbf24 50%, #f0abfc 100%)',
      gradientText: 'linear-gradient(135deg, #86efac 0%, #f0abfc 100%)',
    };
  }

  // Summer: June, July, August
  if (month >= 6 && month <= 8) {
    return {
      name: 'summer',
      background: '#0f1a1a',
      foreground: '#ffffff',
      primary: '#38bdf8', // sky blue
      secondary: '#fbbf24', // yellow
      accent: '#fb7185', // rose
      gradient: 'linear-gradient(135deg, #38bdf8 0%, #fbbf24 50%, #fb7185 100%)',
      gradientText: 'linear-gradient(135deg, #38bdf8 0%, #fb7185 100%)',
    };
  }

  // Fall: September, October, November
  if (month >= 9 && month <= 11) {
    return {
      name: 'fall',
      background: '#1a0f0a',
      foreground: '#ffffff',
      primary: '#ea580c', // orange
      secondary: '#a16207', // dark yellow/brown
      accent: '#dc2626', // red
      gradient: 'linear-gradient(135deg, #ea580c 0%, #a16207 50%, #dc2626 100%)',
      gradientText: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
    };
  }

  // Winter (default for January): Cool blues and purples
  return {
    name: 'winter',
    background: '#0a0a1a',
    foreground: '#ffffff',
    primary: '#3b82f6', // blue
    secondary: '#8b5cf6', // purple
    accent: '#06b6d4', // cyan
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
    gradientText: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  };
}

