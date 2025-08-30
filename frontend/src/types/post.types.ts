export interface Post {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  author: {
    _id: string;
    name: string;
    username: string;
    avatar?: string;
  };
  tags: string[];
  category: string;
  status: 'draft' | 'published' | 'archived';
  featuredImage?: string;
  readingTime: number;
  views: number;
  likes: number;
  comments: number;
  bookmarks: number;
  shares: number;
  isPublished: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostPreview extends Omit<Post, 'content'> {
  content?: string;
}

export interface CreatePostData {
  title: string;
  content: string;
  tags: string[];
  category: string;
  featuredImage?: string;
  status: 'draft' | 'published';
  excerpt?: string;
}

export interface UpdatePostData extends Partial<CreatePostData> {
  postId: string;
}

export interface PostFilters {
  category?: string;
  tags?: string[];
  author?: string;
  status?: 'draft' | 'published' | 'archived';
  dateRange?: {
    start: string;
    end: string;
  };
  search?: string;
}

export interface PostSortOptions {
  field: 'createdAt' | 'updatedAt' | 'views' | 'likes' | 'comments' | 'readingTime';
  order: 'asc' | 'desc';
}

export interface PostListResponse {
  posts: PostPreview[];
  total: number;
  hasMore: boolean;
  currentPage: number;
  totalPages: number;
}

export interface PostStats {
  totalPosts: number;
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  averageReadingTime: number;
  topCategories: Array<{
    name: string;
    count: number;
  }>;
  topTags: Array<{
    name: string;
    count: number;
  }>;
}

export interface RelatedPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  author: {
    name: string;
    username: string;
  };
  readingTime: number;
  createdAt: string;
}

export interface PostSearchResult {
  posts: PostPreview[];
  total: number;
  hasMore: boolean;
  searchQuery: string;
}
