export interface ApiResponse<T = any> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  error?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
  totalPages: number;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

export interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

export interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

export interface ApiEndpoints {
  auth: {
    login: string;
    register: string;
    logout: string;
    refresh: string;
    forgotPassword: string;
    resetPassword: string;
  };
  users: {
    profile: string;
    updateProfile: string;
    changePassword: string;
    follow: string;
    unfollow: string;
    followers: string;
    following: string;
    search: string;
  };
  posts: {
    create: string;
    getAll: string;
    getById: string;
    update: string;
    delete: string;
    like: string;
    unlike: string;
    bookmark: string;
    unbookmark: string;
    search: string;
    myPosts: string;
    drafts: string;
  };
  comments: {
    create: string;
    getByPost: string;
    update: string;
    delete: string;
    like: string;
    unlike: string;
  };
  notifications: {
    getAll: string;
    markAsRead: string;
    markAllAsRead: string;
    delete: string;
  };
}
