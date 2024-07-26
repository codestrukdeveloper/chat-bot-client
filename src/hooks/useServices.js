// src/store/useServiceStore.js
import create from "zustand";
import api from "./api";

// Create Zustand store
export const useServiceStore = create((set) => ({
  services: [],
  loading: false,
  success: false,

  error: null,
  fetchServices: async () => {
    set({ loading: true, success: false });
    try {
      const response = await api.get("/service");
      if (response.data.data?.services?.length >= 0) {
        console.log(
          "Response.data?.data?.services",
          response.data.data.services
        );
        set({ services: response.data.data.services, loading: false });
        return response.data.data.services;
      } else {
        set({ error: "Failed to fetch services", loading: false });
      }
    } catch (error) {
      set({ error: "Failed to fetch services", loading: false });
    }
  },
  createService: async (newService) => {
    set({ success: false, loading: true });

    try {
      const data = await api.post("/service/new", newService);

      set((state) => ({
        services: [...state.services, { ...newService, id: Date.now() }],
      }));
      set({ success: true });
      return data.data.data.embedHtml;
    } catch (error) {
      set({ error: "Failed to create service" });
    } finally {
      set({ loading: false });
    }
  },
  updateService: async (updatedService) => {
    set({ success: false, loading: true });

    try {
      await api.put(`/service/${updatedService.id}`, updatedService);
      set((state) => ({
        services: state.services.map((service) =>
          service.id === updatedService.id ? updatedService : service
        ),
      }));
      set({ loading: false, success: false });
    } catch (error) {
      set({ error: "Failed to update service" });
    } finally {
      set({ loading: true });
    }
  },
  deleteService: async (id) => {
    set({ success: false, loading: true });

    try {
      await api.delete(`/service/${id}`);

      set((state) => ({
        services: state.services.filter((service) => service.id !== id),
      }));
      set({ loading: true, success: true });
    } catch (error) {
      set({ error: "Failed to delete service" });
    } finally {
      set({ loading: false });
    }
  },
}));
