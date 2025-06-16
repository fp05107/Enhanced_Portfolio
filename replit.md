# AI-Powered Futuristic Portfolio Website

## Overview

This project is a cutting-edge, cyberpunk-inspired portfolio website for Subham Sahoo, an AI Engineer and Data Scientist. The application showcases expertise in machine learning, deep learning, computer vision, and NLP through an immersive, futuristic web experience with advanced neural network visualizations, AI assistant integration, and dynamic data stream effects.

## System Architecture

The application follows a full-stack architecture with the following key components:

- **Frontend**: React-based single-page application with modern UI components
- **Backend**: Express.js server with REST API architecture
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Build System**: Vite for fast development and optimized production builds
- **Deployment**: Configured for Replit's autoscale deployment target

## Key Components

### Frontend Architecture

- **React 18** with TypeScript for type-safe component development
- **Tailwind CSS** with custom design system including neon color palette and glass morphism effects
- **Shadcn/UI** component library for consistent, accessible UI components
- **Wouter** for lightweight client-side routing
- **TanStack Query** for efficient server state management and API interactions

### Backend Architecture

- **Express.js** server with TypeScript
- **Modular routing system** with API endpoints prefixed under `/api`
- **Memory storage implementation** with interface for future database integration
- **Development-optimized Vite integration** with HMR support

### Database Layer

- **Drizzle ORM** with PostgreSQL dialect for type-safe database operations
- **Zod schema validation** for runtime type checking
- **Migration system** configured for schema versioning
- **Neon Database** integration for serverless PostgreSQL

### AI/UX Features

- **Futuristic floating navigation** with neural network terminology and adaptive scaling
- **Interactive AI assistant** with contextual responses about ML/AI expertise
- **Neural network visualizations** with orbiting elements and data flow animations
- **Dynamic data stream visualizer** using HTML5 Canvas with particle systems
- **Holographic effects** and scanning animations on project cards
- **AI proficiency radar charts** with SVG-based circular progress indicators
- **Cyberpunk aesthetic** with neon colors, glass morphism, and grid patterns
- **Audio controller** with visual feedback and procedural sound generation
- **Categorized skill display** organized by AI/ML domains with interactive hover effects

## Data Flow

1. **Client Requests**: Browser requests are handled by the Express server
2. **Development Mode**: Vite middleware serves the React application with HMR
3. **API Calls**: Frontend uses TanStack Query to make requests to `/api` endpoints
4. **Data Storage**: Backend interfaces with storage layer (currently in-memory, designed for database integration)
5. **Response Handling**: Structured JSON responses with error handling middleware

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: react, react-dom, react-router alternatives (wouter)
- **Backend**: express, typescript runtime (tsx)
- **Database**: @neondatabase/serverless, drizzle-orm, drizzle-kit
- **Build tools**: vite, esbuild for production builds

### UI Component Dependencies
- **Radix UI primitives**: Comprehensive set of accessible, unstyled UI components
- **Styling**: tailwindcss, class-variance-authority for variant management
- **Icons**: FontAwesome via CDN, Lucide React for select icons
- **Fonts**: Inter and JetBrains Mono via Google Fonts

### Development Dependencies
- **TypeScript**: Full type safety across frontend and backend
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Replit integrations**: Development banner, cartographer, error overlay

## Deployment Strategy

- **Environment**: Replit with Node.js 20, PostgreSQL 16 modules
- **Development**: `npm run dev` - Concurrent frontend and backend with HMR
- **Build Process**: 
  - Frontend: Vite build outputting to `dist/public`
  - Backend: esbuild bundling server code to `dist/index.js`
- **Production**: `npm run start` serving built application
- **Database**: Drizzle push for schema synchronization

### Port Configuration
- **Development**: Port 5000 for local development
- **Production**: External port 80 mapping to internal port 5000

## Changelog

- June 16, 2025: Initial setup with basic portfolio structure
- June 16, 2025: Complete redesign to futuristic AI/ML-focused portfolio
  - Transformed navigation to floating cyberpunk interface with neural terminology
  - Updated hero section with AI engineer positioning and neural network visualization
  - Redesigned skills section with comprehensive AI/ML tech stack categorization
  - Rebuilt projects section showcasing AI/ML research labs and sample projects
  - Added interactive AI assistant with contextual ML/data science responses
  - Integrated dynamic data stream visualizer with particle animations
  - Enhanced with holographic effects, radar charts, and cyberpunk aesthetics

## Recent Changes

Successfully transformed standard portfolio into cutting-edge AI/ML showcase:
- Navigation: "Neural.Home", "Bio.Data", "Code.Labs", "Tech.Stack", "Connect.API"
- Hero: AI Engineer × Data Scientist positioning with orbiting tech elements
- Skills: 6 categories covering Python, AI/ML frameworks, Computer Vision, NLP, Data Science, and Cloud tools
- Projects: 8 AI/ML sample projects including YOLO object detection, sentiment analysis, predictive analytics
- Enhanced UX: AI assistant, data streams, neural network animations, proficiency radar charts

## User Preferences

- Preferred communication style: Simple, everyday language
- Portfolio focus: AI Engineer and Data Scientist expertise
- Design aesthetic: Cyberpunk, futuristic, Apple Vision Pro inspired
- Technical emphasis: Machine learning, deep learning, computer vision, NLP, data science