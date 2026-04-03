# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Start development server (runs fetch.js first)
npm run build      # Build for production (runs fetch.js first)
npm run test       # Run tests
npm run deploy     # Deploy to GitHub Pages (builds then pushes to master branch)
npm run format     # Format code with Prettier
npm run check-format  # Check code formatting
```

## Environment Variables

Create a `.env` file in the root directory for GitHub profile data and Medium blogs:

```
REACT_APP_GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_username
USE_GITHUB_DATA=true
MEDIUM_USERNAME=your_medium_username
```

## Architecture Overview

**React SPA** built with Create React App (react-scripts v5). Uses SCSS for styling with a global color system.

**Entry Point:** `src/index.js` → `src/App.js` → `src/containers/Main.js`

**Main Containers** (`src/containers/`):
- `Main.js` - Routes/renders all sections
- `Greeting.js` - Hero section with intro
- `Skills.js` / `skillProgress.js` - Skills display and proficiency bars
- `Projects.js` / `StartupProjects.js` - Project showcases
- `WorkExperience.js` - Work history
- `Education.js` - Education cards
- `Achievement.js` - Certifications and awards
- `Contact.js` - Contact information
- `GithubProfile.js` - GitHub profile integration

**Key Components** (`src/components/`):
- Reusable UI: `Button.js`, `Header.js`, `Footer.js`, `SocialMedia.js`
- Cards: `AchievementCard.js`, `BlogCard.js`, `EducationCard.js`, `ExperienceCard.js`, `GithubRepoCard.js`, `TalkCard.js`
- Special: `DisplayLottie.js` (animations), `SoftwareSkill.js` (skill icons)

**Configuration:**
- `src/portfolio.js` - All personal data, content, and feature toggles
- `src/_globalColor.scss` - Global color variables

**Pre-build Script:** `fetch.js` runs before start/build to fetch GitHub profile data and football match data, outputs to `public/`

**Features controlled via `portfolio.js` flags:**
- `splashScreen.enabled` - Splash animation toggle
- `skillsSection.display`, `workExperiences.display`, etc. - Section visibility
- `openSource.showGithubProfile` - GitHub profile display
- `blogSection.displayMediumBlogs` - Dynamic Medium blog fetching
