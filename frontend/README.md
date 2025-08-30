# Blogging App Frontend

A modern React + TypeScript frontend for the Blogging App, built with Vite, Tailwind CSS, and Shadcn UI components.

## 🚀 Features

- **Modern Tech Stack**: React 18+ with TypeScript
- **Fast Build**: Vite for lightning-fast development and builds
- **Beautiful UI**: Tailwind CSS with custom design system
- **Component Library**: Shadcn UI components for consistency
- **State Management**: Zustand for simple and efficient state management
- **Routing**: React Router v6 for navigation
- **Authentication**: Complete auth system with protected routes
- **Responsive Design**: Mobile-first approach with dark mode support
- **Rich Text Editor**: TipTap integration for blog post creation
- **Real-time Features**: Notifications and live updates

## 🛠️ Tech Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **State Management**: Zustand
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **Rich Text**: TipTap editor
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── common/         # Common components (SearchBar, etc.)
│   ├── layout/         # Layout components (Header, Sidebar, Footer)
│   ├── post/           # Post-related components
│   ├── profile/        # Profile components
│   └── ui/             # Shadcn UI components
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── services/            # API services
├── store/               # Zustand stores
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── styles/              # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend server running (see backend README)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Blogging-App/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:8000
   VITE_APP_NAME=Blogging App
   VITE_APP_VERSION=1.0.0
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Colors
- **Primary**: Blue scale (primary-50 to primary-900)
- **Secondary**: Gray scale (secondary-50 to secondary-900)
- **Semantic**: Success (green), Warning (yellow), Error (red)

### Typography
- **Font Family**: Inter (sans), Merriweather (serif), JetBrains Mono (mono)
- **Scale**: Consistent with Tailwind's spacing scale
- **Hierarchy**: Clear heading levels (h1-h6)

### Components
- **Buttons**: Multiple variants (default, outline, ghost, etc.)
- **Cards**: Consistent card design with header, content, footer
- **Forms**: Input fields, labels, and validation states
- **Navigation**: Header, sidebar, and mobile menu

## 🔐 Authentication

The app uses a session-based authentication system:

- **Login/Register**: User authentication forms
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Session Management**: Persistent login state
- **User Profile**: Access to user information and settings

## 📝 Blog Features

- **Rich Text Editor**: TipTap-based editor with markdown support
- **Post Management**: Create, edit, delete, and publish posts
- **Categories & Tags**: Organize content with tags and categories
- **Media Support**: Image uploads and embedding
- **Draft System**: Save and manage draft posts

## 🌐 API Integration

- **Base URL**: Configurable via environment variables
- **Authentication**: Automatic token handling
- **Error Handling**: Comprehensive error handling and user feedback
- **Interceptors**: Request/response interceptors for auth and errors

## 🎯 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow React best practices and hooks
- Use Tailwind CSS for styling
- Implement proper error boundaries

### Component Structure
- Functional components with hooks
- Props interface definitions
- Proper TypeScript typing
- Accessibility considerations

### State Management
- Use Zustand for global state
- Local state with useState when appropriate
- Custom hooks for reusable logic

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy
The `dist` folder contains the production build that can be deployed to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

### Environment Variables
Make sure to set the correct `VITE_API_URL` for your production backend.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify your environment variables
3. Ensure the backend is running
4. Check the browser's network tab for API errors

---

**Happy Coding! 🚀**
