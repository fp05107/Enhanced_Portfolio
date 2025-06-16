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

### UI/UX Features

- **Interactive cursor trail** with smooth animation following mouse movement
- **Background particle system** with floating animated elements
- **Glass morphism effects** with backdrop blur and transparency
- **Neon color scheme** with cyan, purple, emerald, magenta, and gold accents
- **Responsive design** with mobile-first approach
- **Scroll-based animations** revealing content as user scrolls
- **Audio controller** with visual feedback (decorative)

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

Changelog:
- June 16, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.