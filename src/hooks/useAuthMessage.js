// src/store/useServiceStore.js
import create from "zustand";
import api from "./api";

// Create Zustand store
export const useChatStore = create((set) => ({
  chats: [],
  loading: false,
  success: false,

  error: null,
  fetchChatsFromServiceId: async (serviceId) => {
    set({ loading: true, success: false });
    try {
      const response = await api.get(`/chat/serviceId/${serviceId}`);
      if (response.data.data?.chats?.length >= 0) {
        set({ chats: response.data.data.chats, loading: false });
        return response.data.data.chats;
      } else {
        set({ error: "Failed to fetch chat", loading: false });
      }
    } catch (error) {
      set({ error: "Failed to fetch chat", loading: false });
    }
  },
  createChat: async (newService) => {
    set({ success: false, loading: true });

    try {
      const data = await api.post("/chat/new", newService);

      set((state) => ({
        chats: [...state.chat, { ...newService, id: Date.now() }],
      }));
      set({ success: true });
      return data.data.data.embedHtml;
    } catch (error) {
      set({ error: "Failed to create chat" });
    } finally {
      set({ loading: false });
    }
  },
  updateChat: async (updatedService) => {
    set({ success: false, loading: true });

    try {
      await api.put(`/chat/${updatedService.id}`, updatedService);
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === updatedService.id ? updatedService : chat
        ),
      }));
      set({ loading: false, success: false });
    } catch (error) {
      set({ error: "Failed to update chat" });
    } finally {
      set({ loading: true });
    }
  },
  deleteChat: async (id) => {
    set({ success: false, loading: true });

    try {
      await api.delete(`/chat/${id}`);

      set((state) => ({
        chats: state.chats.filter((chat) => chat.id !== id),
      }));
      set({ loading: true, success: true });
    } catch (error) {
      set({ error: "Failed to delete chat" });
    } finally {
      set({ loading: false });
    }
  },
}));
