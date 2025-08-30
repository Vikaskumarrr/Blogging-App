# Blogging App - Full Stack Application

A modern, feature-rich blogging platform built with React + TypeScript frontend and Node.js/Express backend.

## 🚀 Project Overview

This is a Medium/Dev.to-like blogging platform where users can:
- Write, edit, and publish blog posts
- Follow other users and build communities
- Like, comment, and interact with content
- Discover trending posts and authors
- Manage their profiles and content

## 🏗️ Architecture

```
Blogging-App/
├── frontend/           # React + TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API services
│   │   ├── store/         # State management
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── backend/            # Node.js/Express backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Data models
│   ├── routers/          # API routes
│   ├── schemas/          # Database schemas
│   ├── middlewares/      # Custom middleware
│   ├── utils/            # Utility functions
│   └── server.js         # Main server file
└── README.md            # This file
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **State Management**: Zustand
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **Rich Text Editor**: TipTap
- **Icons**: React Icons
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Session-based with MongoDB session store
- **Password Hashing**: bcryptjs
- **Environment**: dotenv

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup
1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   Create a `.env` file:
   ```env
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/blogging-app
   SECRET_KEY=your-secret-key-here
   ```

4. **Start backend server**
   ```bash
   npm run dev    # Development
   npm start      # Production
   ```

### Frontend Setup
1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌟 Features

### Core Features
- ✅ User authentication (register/login/logout)
- ✅ Blog post CRUD operations
- ✅ Rich text editor with markdown support
- ✅ User profiles and following system
- ✅ Responsive design for all devices
- ✅ Dark/light theme support

### Advanced Features
- 🔄 Real-time notifications
- 🔍 Advanced search and filtering
- 📱 Progressive Web App (PWA)
- 🎨 Customizable themes
- 📊 Analytics dashboard
- 🔒 Content moderation tools

## 📱 Screenshots

*Screenshots will be added here as the application develops*

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm test
```

## 🚀 Deployment

### Frontend
- Build the application: `npm run build`
- Deploy the `dist` folder to your hosting service
- Configure environment variables for production

### Backend
- Set production environment variables
- Use PM2 or similar process manager
- Configure MongoDB connection for production
- Set up proper CORS for your frontend domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Shadcn UI for the beautiful component library
- MongoDB for the flexible database solution

## 📞 Support

If you have any questions or need help:
- Create an issue in the repository
- Contact the development team
- Check the documentation in each directory

---

**Happy Blogging! 🚀**
