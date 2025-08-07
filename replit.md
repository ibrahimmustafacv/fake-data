# Overview

This is a multilingual fake data generator web application that creates realistic test data for development and testing purposes. The app supports both English and Arabic languages with full RTL (right-to-left) support for Arabic text. Users can generate comprehensive fake user profiles including personal information, contact details, avatars, and professional data. The application features a modern, responsive design with copy-to-clipboard functionality, persistent data storage, and top navigation buttons linking to external projects and social media pages.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent, accessible design
- **State Management**: React hooks (useState, useEffect) with custom hooks for data management and language switching
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Internationalization**: Custom translation system supporting English and Arabic with RTL layout support

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Development Setup**: Vite middleware integration for hot module replacement
- **Error Handling**: Centralized error middleware with structured error responses

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL hosting
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Local Storage**: Browser localStorage for user preferences and temporary data caching
- **In-Memory Storage**: Fallback memory storage implementation for development

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Schema**: Basic user table with username/password fields and UUID primary keys
- **Validation**: Zod schema validation for input validation and type safety

## External Dependencies
- **Fake Data Generation**: Faker.js library for generating realistic test data
- **Database Hosting**: Neon Database serverless PostgreSQL
- **Fonts**: Google Fonts (Inter for English, Noto Sans Arabic for Arabic text)
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Build Tools**: Vite for development and production builds, esbuild for server bundling
- **Deployment**: Configured for Replit hosting with development banner integration

The application follows a clean separation of concerns with shared TypeScript types between frontend and backend, comprehensive form validation, and a responsive design that adapts to different screen sizes and language directions.

## Recent Changes (January 2025)
- Fixed deprecated faker.js methods (userName → username)
- Added top navigation component with "More Projects" and "Follow Us Here" buttons
- Enhanced multilingual support for navigation elements
- Improved external link handling with proper security measures