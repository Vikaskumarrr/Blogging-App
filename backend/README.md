# Blogging App Backend API

A Node.js/Express backend for a modern blogging application with user authentication, blog management, and social features.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Session-based with MongoDB session store
- **Password Hashing**: bcryptjs
- **Environment**: dotenv for configuration

## Project Structure

```
backend/
├── controllers/          # Route controllers
│   ├── authController.js    # Authentication logic
│   ├── blogController.js    # Blog CRUD operations
│   └── followController.js  # Follow/unfollow functionality
├── middlewares/         # Custom middleware
│   └── isAuthMiddleware.js  # Authentication verification
├── models/              # Data models
│   ├── userModel.js         # User operations
│   ├── blogModel.js         # Blog operations
│   └── followModel.js       # Follow operations
├── routers/             # Express routes
│   ├── authRouter.js        # Authentication routes
│   ├── blogRouter.js        # Blog routes
│   └── followRouter.js      # Follow routes
├── schemas/              # Mongoose schemas
│   ├── userSchema.js        # User data structure
│   ├── blogSchema.js        # Blog data structure
│   └── followSchema.js      # Follow data structure
├── utils/                # Utility functions
│   ├── authUtils.js         # Authentication helpers
│   └── blogUtils.js         # Blog helpers
├── db.js                 # Database connection
├── server.js             # Main server file
├── package.json          # Dependencies
└── privateConstant.js    # Configuration constants
```

## API Endpoints

### Authentication Routes (`/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | User registration | No |
| POST | `/login` | User login | No |
| POST | `/logout` | User logout | Yes |

### Blog Routes (`/blog`) - Requires Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/create-blog` | Create new blog post | Yes |
| GET | `/get-Blogs` | Get all blogs (paginated) | Yes |
| GET | `/get-MyBlogs` | Get user's own blogs | Yes |
| POST | `/edit-Blogs` | Edit existing blog | Yes |
| POST | `/delete-blog` | Delete blog post | Yes |

### Follow Routes (`/follow`) - Requires Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/follow-user` | Follow another user | Yes |
| POST | `/unfollow-user` | Unfollow user | Yes |
| GET | `/get-following-list` | Get following list | Yes |
| GET | `/get-followers-list` | Get followers list | Yes |

## Data Models

### User Schema
```javascript
{
  name: String (required, 3-50 chars),
  username: String (required, unique, 3-50 chars),
  email: String (required, unique, 3-50 chars),
  password: String (required, hashed)
}
```

### Blog Schema
```javascript
{
  title: String (required, 3-100 chars),
  textBody: String (required, 3-1000 chars),
  createDateTime: String (required),
  userId: ObjectId (required, ref: "user")
}
```

### Follow Schema
```javascript
{
  followerUserId: ObjectId (required, ref: "user"),
  followingUserId: ObjectId (required, ref: "user"),
  createDateTime: String (required)
}
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/blogging-app
   SECRET_KEY=your-secret-key-here
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## Features

- **User Authentication**: Secure registration, login, and session management
- **Blog Management**: Full CRUD operations for blog posts
- **Social Features**: Follow/unfollow system for users
- **Data Validation**: Input validation and sanitization
- **Error Handling**: Comprehensive error handling and responses
- **Security**: Password hashing, session management, and middleware protection

## API Response Format

### Success Response
```json
{
  "status": "success",
  "data": { ... },
  "message": "Operation completed successfully"
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Error description",
  "error": "Detailed error information"
}
```

## Pagination

Blog endpoints support pagination using:
- `SKIP`: Number of items to skip
- `LIMIT`: Maximum number of items to return (configured in `privateConstant.js`)

## Security Features

- Password hashing with bcryptjs
- Session-based authentication
- Protected routes with middleware
- Input validation and sanitization
- MongoDB injection protection

## Development

- **Hot Reload**: Uses nodemon for development
- **Environment**: Configurable via environment variables
- **Logging**: Console logging with color coding
- **Error Handling**: Comprehensive error handling throughout

## Production Considerations

- Environment variable configuration
- Database connection optimization
- Session store configuration
- Error logging and monitoring
- Rate limiting implementation
- CORS configuration for frontend integration
