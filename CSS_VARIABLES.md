/* 
  YogaVerse - CSS Variables Reference Guide
  
  This file documents all CSS variables available for customization.
  Edit these in src/index.css to change the entire application's appearance.
*/

:root {
  /* ============================================
     BACKGROUND COLORS
     ============================================ */
  
  --bg-primary: #0A0E14;        /* Main background, used for page/body */
  --bg-secondary: #11151F;      /* Secondary background, used for cards */
  --bg-tertiary: #1A1F2E;       /* Tertiary background, used for inputs, hover */
  --bg-hover: #232A3A;          /* Hover state background */
  
  /* Usage Examples:
     - body: background-color: var(--bg-primary);
     - cards: background-color: var(--bg-secondary);
     - inputs: background-color: var(--bg-tertiary);
  */

  /* ============================================
     TEXT COLORS
     ============================================ */
  
  --text-primary: #F5F7FA;      /* Main text color, high contrast */
  --text-secondary: #9CA3AF;    /* Secondary text, lower emphasis */
  --text-tertiary: #6B7280;     /* Tertiary text, lowest emphasis */
  
  /* Usage Examples:
     - headings: color: var(--text-primary);
     - descriptions: color: var(--text-secondary);
     - hints/labels: color: var(--text-tertiary);
  */

  /* ============================================
     ACCENT COLORS - YOGA THEMED
     ============================================ */
  
  --accent-primary: #6D9F7D;    /* Healing Sage Green - Main accent */
  --accent-secondary: #9B7DB3;  /* Zen Purple - Meditation vibes */
  --accent-tertiary: #D4AF87;   /* Gold - Wellness/Achievement */
  --accent-warm: #E89B7B;       /* Warm Coral - Energy/Action */
  
  --accent-hover: #5A8A6A;      /* Darker shade for hover state */
  --accent-light: rgba(109, 159, 125, 0.1);    /* Light tint for backgrounds */
  --accent-glow: rgba(109, 159, 125, 0.2);     /* Glow effect tint */
  
  /* Usage Examples:
     - primary buttons: background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
     - hover states: color: var(--accent-hover);
     - backgrounds: background: var(--accent-light);
     - borders: border-color: var(--accent-primary);
  */

  /* ============================================
     STATUS COLORS
     ============================================ */
  
  --success-color: #6D9F7D;     /* Success/Positive actions */
  --warning-color: #E89B7B;     /* Warning/Caution states */
  --error-color: #D97267;       /* Error/Negative actions */
  
  /* Usage Examples:
     - success messages: color: var(--success-color);
     - warnings: color: var(--warning-color);
     - errors: color: var(--error-color);
  */

  /* ============================================
     BORDER COLORS
     ============================================ */
  
  --border-color: #252D3D;      /* Primary border color */
  --border-light: #363F52;      /* Lighter border for subtle dividers */
  
  /* Usage Examples:
     - borders: border: 1px solid var(--border-color);
     - dividers: border-bottom: 1px solid var(--border-light);
  */

  /* ============================================
     BORDER RADIUS
     ============================================ */
  
  --radius-sm: 6px;             /* Small radius - buttons, inputs */
  --radius-md: 12px;            /* Medium radius - cards, modals */
  --radius-lg: 16px;            /* Large radius - containers, panels */
  --radius-xl: 24px;            /* Extra large radius - large elements */
  --radius-full: 9999px;        /* Full radius - pills, circles */
  
  /* Usage Examples:
     - border-radius: var(--radius-md);
     - border-radius: var(--radius-full); (for circles)
  */

  /* ============================================
     TRANSITIONS & ANIMATIONS
     ============================================ */
  
  --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Usage Examples:
     - transition: var(--transition-fast);
     - transition: var(--transition-base);
     - For quick hover effects use --transition-fast
  */

  /* ============================================
     SHADOWS
     ============================================ */
  
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 8px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 16px 32px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.6);
  
  /* Usage Examples:
     - box-shadow: var(--shadow-sm);
     - box-shadow: var(--shadow-lg); (for emphasized elements)
  */
}

/* ============================================
   EXAMPLE CUSTOMIZATIONS
   ============================================ */

/* Change primary accent color from Sage to a different green */
/* 
:root {
  --accent-primary: #52B788;
  --accent-hover: #2D6A4F;
}
*/

/* Change to light theme */
/*
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F7FA;
  --bg-tertiary: #E9ECEF;
  --text-primary: #0A0E14;
  --text-secondary: #4B5563;
  --text-tertiary: #8B95A5;
}
*/

/* Increase all border radius for a softer look */
/*
:root {
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --radius-xl: 28px;
}
*/

/* Faster animations for snappier feel */
/*
:root {
  --transition-fast: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
*/

/* Enhance shadows for more depth */
/*
:root {
  --shadow-sm: 0 4px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 12px 24px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.6);
  --shadow-xl: 0 28px 56px rgba(0, 0, 0, 0.7);
}
*/

/* ============================================
   COLOR COMBINATIONS
   ============================================ */

/* Sage Green Accent */
--accent-primary: #6D9F7D;
--accent-hover: #5A8A6A;
--accent-light: rgba(109, 159, 125, 0.1);
--accent-glow: rgba(109, 159, 125, 0.2);

/* Zen Purple Accent */
--accent-secondary: #9B7DB3;
/* Can be used for: hover effects, secondary highlights, gradients */

/* Gold Accent */
--accent-tertiary: #D4AF87;
/* Can be used for: premium features, achievements, special elements */

/* Warm Coral */
--accent-warm: #E89B7B;
/* Can be used for: notifications, important actions, energy vibes */

/* ============================================
   COMMON PATTERNS
   ============================================ */

/* Button with gradient */
background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));

/* Glass morphism effect */
background: rgba(17, 21, 31, 0.5);
backdrop-filter: blur(20px);
border: 1px solid rgba(109, 159, 125, 0.1);

/* Subtle hover effect */
background: var(--accent-light);
color: var(--accent-primary);
transition: var(--transition-base);

/* Shadow and depth */
box-shadow: var(--shadow-md);
border-radius: var(--radius-lg);

/* Smooth text gradient */
background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

/* ============================================
   ACCESSIBILITY
   ============================================ */

/* High contrast mode consideration */
@media (prefers-contrast: more) {
  :root {
    --text-secondary: #6B7280;  /* Darker for more contrast */
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-fast: none;
    --transition-base: none;
    --transition-slow: none;
  }
}

/* Dark mode enforcement */
@media (prefers-color-scheme: dark) {
  :root {
    /* Variables already optimized for dark mode */
  }
}

/* ============================================
   QUICK REFERENCE
   ============================================ */

Color Palette Quick Map:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BACKGROUNDS:
├─ Primary:    #0A0E14 (Deep Navy - page background)
├─ Secondary:  #11151F (Navy Blue - cards)
├─ Tertiary:   #1A1F2E (Dark Blue - inputs)
└─ Hover:      #232A3A (Lighter - hover states)

TEXT:
├─ Primary:    #F5F7FA (Strong contrast)
├─ Secondary:  #9CA3AF (Medium contrast)
└─ Tertiary:   #6B7280 (Low contrast)

ACCENTS (Yoga Themed):
├─ Sage:       #6D9F7D (Healing, primary action)
├─ Purple:     #9B7DB3 (Meditation, secondary)
├─ Gold:       #D4AF87 (Premium, wellness)
└─ Coral:      #E89B7B (Energy, notifications)

BORDERS:
├─ Primary:    #252D3D (Visible dividers)
└─ Light:      #363F52 (Subtle dividers)

For more info, visit PROJECT_GUIDE.md and DESIGN_CHECKLIST.md
