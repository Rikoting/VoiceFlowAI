# VoiceFlow AI Application

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend), featuring a modern UI built with shadcn/ui components and Tailwind CSS. The application appears to be focused on voice/AI functionality based on the home page content and branding.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animation**: Framer Motion for animations and transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development

### Key Components

#### Frontend Structure
- `/client/src/pages/` - Page components (home, not-found)
- `/client/src/components/ui/` - Reusable UI components from shadcn/ui
- `/client/src/hooks/` - Custom React hooks (toast, mobile detection)
- `/client/src/lib/` - Utility functions and query client configuration

#### Backend Structure
- `/server/index.ts` - Main Express server setup
- `/server/routes.ts` - API route definitions (currently minimal)
- `/server/storage.ts` - Data access layer with in-memory storage implementation
- `/server/vite.ts` - Vite integration for development

#### Shared Code
- `/shared/schema.ts` - Database schema definitions and Zod validation schemas

## Data Flow

1. **Frontend to Backend**: API requests are handled through a centralized `apiRequest` function that includes authentication headers and error handling
2. **Database Access**: Backend uses a storage interface pattern with both in-memory and PostgreSQL implementations available
3. **State Management**: TanStack Query manages server state with custom query functions for API communication
4. **Form Handling**: React Hook Form with Zod resolvers for form validation

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL database
- **Drizzle Kit**: Database migrations and schema management

### UI & Styling
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Framer Motion**: Animation library

### Development Tools
- **Vite**: Build tool with React plugin
- **TypeScript**: Type safety across the stack
- **ESBuild**: Bundling for production server build

## Deployment Strategy

### Build Process
1. Frontend build: `vite build` outputs to `/dist/public`
2. Backend build: ESBuild bundles server code to `/dist/index.js`
3. Database: Drizzle migrations applied via `drizzle-kit push`

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment designation (development/production)

### Production Setup
- Server serves static frontend files from `/dist/public`
- API routes prefixed with `/api`
- Session management with PostgreSQL storage
- Error handling with proper HTTP status codes

### Development Features
- Hot module replacement via Vite
- Runtime error overlay for debugging
- Automatic TypeScript compilation
- Development-specific tooling (Replit integration)

The application follows modern full-stack patterns with clear separation of concerns, type safety throughout, and a scalable architecture that can easily transition from the current in-memory storage to the configured PostgreSQL database.