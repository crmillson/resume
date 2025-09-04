# Experience Page

A comprehensive experience page that showcases Chris Millson's unique journey from Special Forces operations to AI program management, emphasizing the progressive development of technical and leadership capabilities across military and civilian contexts.

## Components

### HeroSection
- Career trajectory summary with animated counters
- Current role and key metrics display
- Professional photo with security clearance indicator
- Quick navigation to key sections

### InteractiveTimeline
- Chronological experience timeline with filtering
- Expandable experience cards with detailed information
- Filter by category: Military, Tech, Leadership, Education
- Smooth animations and hover states
- Progress indicator showing career evolution

### CurrentRoleDeepDive
- Detailed breakdown of USASOC AI Division role
- Project portfolio with visual representations
- Team composition and organizational chart
- Technology stack and tools used
- Quantified achievements and impact metrics

### SkillsEvolutionChart
- Interactive radar chart showing skill progression
- Timeline slider to show skills at different career stages
- Skill categories: Leadership, Technical, Strategic, Communication
- Proficiency indicators and trend arrows
- Integration with experience timeline

### AchievementMetricsDashboard
- Real-time counters for key metrics
- Visual progress indicators
- Comparison benchmarks where appropriate
- Interactive hover states with context

### TransitionStory
- Narrative format with visual timeline
- Key transition moments and lessons learned
- Challenges overcome and growth demonstrated
- Value proposition for similar transitions

## Data Structure

The page uses comprehensive data structures defined in:
- `src/types/experience.types.ts` - Type definitions
- `src/constants/experienceData.ts` - Experience data constants
- `src/hooks/useExperienceData.ts` - Data management hook
- `src/hooks/useTimelineNavigation.ts` - Timeline navigation hook
- `src/hooks/useSkillsVisualization.ts` - Skills visualization hook

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive Elements**: Timeline filtering, expandable cards, animated counters
- **Performance Optimized**: Lazy loading, smooth animations, efficient data management
- **Accessibility**: WCAG 2.1 AA compliance with proper ARIA labels
- **SEO Optimized**: Structured data and semantic HTML

## Usage

The Experience Page is automatically imported and used in the main application routing. All components are modular and can be reused in other parts of the application.

## Styling

Uses the existing military-tech theme with Tailwind CSS classes:
- Military color palette (military-900, military-800, etc.)
- Accent colors for highlights (accent-600, accent-500)
- Consistent spacing and typography
- Responsive grid layouts
- Smooth transitions and animations
