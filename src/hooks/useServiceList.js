import { useEffect, useState } from "react";
import { useServiceStore } from "./useServices";

export const useServiceList = () => {
  const [servicesList, setServicesList] = useState();
  const {
    services,
    error: serviceError,
    fetchServices,
    loading: isLoading,
    success,
  } = useServiceStore();
  const [loading, setLoading] = useState(isLoading || true);
  const [error, setError] = useState(null);

  const fetchServicesList = async () => {
    const data = await fetchServices();
    console.log("Serices", data);
    setServicesList(data);
    setError(serviceError);
    setLoading(false);
  };

  useEffect(() => {
    fetchServicesList();
  }, [success]);

  return {
    servicesList,
    loading,
    error,
  };
};
