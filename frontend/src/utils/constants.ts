export const APP_CONFIG = {
  name: 'Blogging App',
  description: 'A modern blogging platform for writers and readers',
  version: '1.0.0',
  author: 'Your Name',
  website: 'https://yourwebsite.com',
} as const;

export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  timeout: 10000,
  endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      logout: '/auth/logout',
    },
    users: {
      profile: '/users/profile',
      updateProfile: '/users/update-profile',
      changePassword: '/users/change-password',
      follow: '/follow/follow-user',
      unfollow: '/follow/unfollow-user',
      followers: '/follow/get-followers-list',
      following: '/follow/get-following-list',
    },
    posts: {
      create: '/blog/create-blog',
      getAll: '/blog/get-Blogs',
      getById: '/blog/get-blog',
      update: '/blog/edit-Blogs',
      delete: '/blog/delete-blog',
      myPosts: '/blog/get-MyBlogs',
    },
  },
} as const;

export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  profile: '/profile/:username',
  createPost: '/create-post',
  editPost: '/edit-post/:id',
  postDetail: '/post/:slug',
  explore: '/explore',
  bookmarks: '/bookmarks',
  settings: '/settings',
  search: '/search',
} as const;

export const POST_CATEGORIES = [
  'Technology',
  'Programming',
  'Design',
  'Business',
  'Marketing',
  'Health',
  'Lifestyle',
  'Travel',
  'Food',
  'Education',
  'Science',
  'Entertainment',
  'Sports',
  'Politics',
  'Other',
] as const;

export const POST_STATUS = {
  draft: 'draft',
  published: 'published',
  archived: 'archived',
} as const;

export const USER_ROLES = {
  user: 'user',
  moderator: 'moderator',
  admin: 'admin',
} as const;

export const NOTIFICATION_TYPES = {
  newFollower: 'new_follower',
  postLiked: 'post_liked',
  postCommented: 'post_commented',
  commentReplied: 'comment_replied',
  mentionInPost: 'mention_in_post',
  mentionInComment: 'mention_in_comment',
  newPostFromFollowing: 'new_post_from_following',
} as const;

export const PAGINATION = {
  defaultLimit: 10,
  maxLimit: 50,
  defaultPage: 1,
} as const;

export const VALIDATION = {
  username: {
    minLength: 3,
    maxLength: 30,
    pattern: /^[a-zA-Z0-9_-]+$/,
  },
  password: {
    minLength: 8,
    maxLength: 128,
  },
  post: {
    title: {
      minLength: 3,
      maxLength: 100,
    },
    content: {
      minLength: 10,
      maxLength: 50000,
    },
    tags: {
      maxCount: 5,
      maxLength: 20,
    },
  },
} as const;

export const STORAGE_KEYS = {
  authToken: 'auth_token',
  refreshToken: 'refresh_token',
  user: 'user',
  theme: 'theme',
  language: 'language',
} as const;

export const THEMES = {
  light: 'light',
  dark: 'dark',
  system: 'system',
} as const;

export const LANGUAGES = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  ru: 'Русский',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
} as const;

export const ERROR_MESSAGES = {
  networkError: 'Network error. Please check your connection.',
  unauthorized: 'You are not authorized to perform this action.',
  forbidden: 'Access denied.',
  notFound: 'The requested resource was not found.',
  serverError: 'Server error. Please try again later.',
  validationError: 'Please check your input and try again.',
  unknownError: 'An unknown error occurred.',
} as const;

export const SUCCESS_MESSAGES = {
  postCreated: 'Post created successfully!',
  postUpdated: 'Post updated successfully!',
  postDeleted: 'Post deleted successfully!',
  profileUpdated: 'Profile updated successfully!',
  passwordChanged: 'Password changed successfully!',
  userFollowed: 'User followed successfully!',
  userUnfollowed: 'User unfollowed successfully!',
} as const;
