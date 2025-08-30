import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../ui/DropdownMenu';

export const NotificationBell = () => {
  const [notifications] = useState([
    {
      id: 1,
      type: 'new_follower',
      message: 'John Doe started following you',
      time: '2 minutes ago',
      isRead: false,
    },
    {
      id: 2,
      type: 'post_liked',
      message: 'Your post "Getting Started with React" was liked by Jane Smith',
      time: '1 hour ago',
      isRead: false,
    },
    {
      id: 3,
      type: 'comment',
      message: 'New comment on your post "TypeScript Best Practices"',
      time: '3 hours ago',
      isRead: true,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleNotificationClick = (notificationId: number) => {
    // Handle notification click
    console.log('Notification clicked:', notificationId);
  };

  const markAllAsRead = () => {
    // Mark all notifications as read
    console.log('Mark all as read');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative p-2">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="h-auto p-0 text-xs text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
            No notifications yet
          </div>
        ) : (
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                onClick={() => handleNotificationClick(notification.id)}
                className={cn(
                  'cursor-pointer p-3',
                  !notification.isRead && 'bg-blue-50 dark:bg-blue-900/20'
                )}
              >
                <div className="flex flex-col space-y-1">
                  <p className={cn(
                    'text-sm',
                    notification.isRead 
                      ? 'text-gray-600 dark:text-gray-300' 
                      : 'text-gray-900 dark:text-white font-medium'
                  )}>
                    {notification.message}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {notification.time}
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="cursor-pointer text-center text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Helper function for conditional class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
