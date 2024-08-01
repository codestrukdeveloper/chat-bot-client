import { useEffect, useState } from "react";
import { useChatStore } from "./useAuthMessage";
import { useLocation } from "react-router-dom";

export const useMessageList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceId = queryParams.get("id");
  const servicesQuery = queryParams.get("services");
  const [chatsList, setChatsList] = useState();
  const {
    chats,
    fetchChatsFromServiceId,
    error: chatError,
    loading: isLoading,
    success,
  } = useChatStore();
  const [loading, setLoading] = useState(isLoading || true);
  const [error, setError] = useState(null);

  const fetchChatsList = async () => {
    const data = await fetchChatsFromServiceId(serviceId);
    console.log("Chats", data);
    setChatsList(data);
    setError(chatError);
    setLoading(false);
  };

  useEffect(() => {
    console.log("ServicesId", serviceId);
    if (serviceId) {
      fetchChatsList();
    }
  }, []);

  return {
    chatsList,
    loading,
    error,
  };
};
