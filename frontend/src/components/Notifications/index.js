import React, { useState, useEffect, useMemo } from "react";
import { MdNotifications } from "react-icons/md";
import { parseISO, formatDistance } from "date-fns";
import pt from "date-fns/locale/pt";

import api from "~/services/api";

import {
  Container,
  Badge,
  Scroll,
  Notification,
  NotificationList
} from "./styles";

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  const qtNotification = useMemo(
    () => notifications.filter(n => n.read === false).length,
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get("/notifications");

      const filter = response.data.filter(n => n.read === false);

      const data = filter.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        )
      }));
      setNotifications(data);
    }

    loadNotifications();
  }, []);

  async function handleMarkAsRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  async function handleClean() {
    notifications.forEach(async n => {
      await api.put(`/notifications/${n._id}`);
    });

    setNotifications(notifications.map(n => n.read === true));
  }

  return (
    <Container>
      <Badge
        notifications={qtNotification}
        onClick={() => setVisible(!visible)}
        hasUnread={hasUnread}
      >
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {qtNotification > 0 && (
            <div>
              <button onClick={handleClean} type="button">
                Limpar tudo
              </button>
            </div>
          )}
          {hasUnread ? (
            notifications.map(
              notification =>
                !notification.read && (
                  <Notification
                    key={notification._id}
                    unread={!notification.read}
                  >
                    <p>{notification.content}</p>
                    <time>{notification.timeDistance}</time>
                    <button
                      onClick={() => handleMarkAsRead(notification._id)}
                      type="button"
                    >
                      Marcar como lida
                    </button>
                  </Notification>
                )
            )
          ) : (
            <span>Sem notificações</span>
          )}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
