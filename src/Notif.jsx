import React, { useState } from 'react';

function Notification() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      avatar:
        'https://i.pinimg.com/originals/82/24/82/822482105833db7ffaf7948bcd34d818.jpg',
      name: 'Lalisa',
      message: 'refund request accomplished',
      time: '5m ago',
      read: false,
    },
    {
      id: 2,
      avatar:
        'https://i.pinimg.com/originals/f9/84/d6/f984d6d99574fd7f9695c9c85b1653e2.jpg',
      name: 'Jennie',
      message: 'Your request ID is finished, claim it now',
      time: '1m ago',
      read: false,
    },
    {
      id: 3,
      avatar:
        'https://i.pinimg.com/originals/82/24/82/822482105833db7ffaf7948bcd34d818.jpg',
      name: 'Lalisa',
      message: 'refund request accomplished',
      time: '5m ago',
      read: false,
    },
    {
      id: 4,
      avatar:
        'https://i.pinimg.com/originals/f9/84/d6/f984d6d99574fd7f9695c9c85b1653e2.jpg',
      name: 'Jennie',
      message: 'Your request ID is finished, claim it now',
      time: '1m ago',
      read: false,
    },
]);


  const [unreadNotifications, setUnreadNotifications] = useState(
    notifications.filter((notification) => !notification.read)
  );

  const showAllMessages = () => {
    setUnreadNotifications([...notifications]);
  };

  const showUnreadMessages = () => {
    setUnreadNotifications(notifications.filter((notification) => !notification.read));
  };

  const handleToggle = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );

    const updatedUnreadNotifications = unreadNotifications.filter(
      (notification) => notification.id !== id
    );

    setNotifications(updatedNotifications);
    setUnreadNotifications(updatedUnreadNotifications);
  };

  return (
    <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto bg-white rounded-lg shadow-md overflow-hidden p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-lg font-bold md:mb-0 mb-4 md:mb-0">Notifications</h2>
        <div className="flex items-center space-x-2">
          <button
            className={`px-2 py-1 text-sm font-medium focus:outline-none ${
              unreadNotifications.length > 0
                ? 'text-white bg-green-600 rounded-t-lg hover:bg-green-700 cursor-pointer'
                : 'text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-t-lg cursor-pointer'
            }`}
            onClick={showUnreadMessages}
          >
            Unread
          </button>
          <button
            className={`px-2 py-1 text-sm font-medium focus:outline-none ${
              notifications.length > 0
                ? 'text-white bg-green-600 rounded-t-lg hover:bg-green-700 cursor-pointer'
                : 'text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-t-lg cursor-pointer'
            }`}
            onClick={showAllMessages}
          >
            All
          </button>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {unreadNotifications.map((notification) => (
          <li
            key={notification.id}
            className="py-4 px-4 flex flex-col sm:flex-row items-center cursor-pointer"
            onClick={() => handleToggle(notification.id)}
          >
            <img
              className="w-16 h-16 rounded-full mb-4 sm:mb-0 sm:mr-4"
              src={notification.avatar}
              alt={`${notification.name} avatar`}
            />
            <div className="flex-grow">
              <div className={`${notification.read ? 'text-gray-500' : 'font-bold'} truncate`}>
                {notification.name}
              </div>
              <div className="truncate">{notification.message}</div>
              <div className="text-xs">{notification.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notification;