import { Link, useLocation } from 'react-router-dom';
import { useIsAuthenticated } from '../../store/authStore';
import { 
  Home, 
  Compass, 
  Bookmark, 
  User, 
  Settings, 
  TrendingUp, 
  Hash,

  Calendar,
  BarChart3
} from 'lucide-react';
import { cn } from '../../utils/cn';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Explore', href: '/explore', icon: Compass },
  { name: 'Trending', href: '/trending', icon: TrendingUp },
  { name: 'Bookmarks', href: '/bookmarks', icon: Bookmark, protected: true },
  { name: 'Profile', href: '/profile', icon: User, protected: true },
  { name: 'Settings', href: '/settings', icon: Settings, protected: true },
];

const quickStats = [
  { name: 'Posts Read', value: '24', change: '+12%', changeType: 'positive' },
  { name: 'Time Spent', value: '2.4h', change: '+8%', changeType: 'positive' },
  { name: 'Following', value: '156', change: '+3', changeType: 'positive' },
];

const trendingTags = [
  { name: 'React', count: '2.4k' },
  { name: 'TypeScript', count: '1.8k' },
  { name: 'Web Development', count: '1.2k' },
  { name: 'Design', count: '890' },
  { name: 'AI', count: '756' },
];

export const Sidebar = () => {
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  const filteredNavigation = navigation.filter(
    item => !item.protected || isAuthenticated
  );

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen p-6">
      {/* Navigation */}
      <nav className="space-y-2 mb-8">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          Navigation
        </h3>
        {filteredNavigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Quick Stats */}
      {isAuthenticated && (
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Quick Stats
          </h3>
          <div className="space-y-3">
            {quickStats.map((stat) => (
              <div key={stat.name} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.name}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className={cn(
                    'text-xs',
                    stat.changeType === 'positive' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  )}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trending Tags */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          Trending Tags
        </h3>
        <div className="space-y-2">
          {trendingTags.map((tag) => (
            <Link
              key={tag.name}
              to={`/explore?tag=${tag.name}`}
              className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors group"
            >
              <div className="flex items-center">
                <Hash className="mr-2 h-4 w-4 text-gray-400 group-hover:text-primary-500" />
                <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {tag.name}
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {tag.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      {isAuthenticated && (
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Quick Actions
          </h3>
          <div className="space-y-2">
            <Link
              to="/create-post"
              className="flex items-center px-3 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-md transition-colors"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Write Post
            </Link>
            <Link
              to="/analytics"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <Calendar className="mr-2 h-4 w-4" />
              View Analytics
            </Link>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          <p>© 2024 Blogging App</p>
          <p className="mt-1">Made with ❤️</p>
        </div>
      </div>
    </aside>
  );
};
