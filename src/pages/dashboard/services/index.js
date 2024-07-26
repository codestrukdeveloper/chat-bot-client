import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiBox } from "react-icons/fi";
import { useServiceStore } from "@/hooks/useServices";
import { useServiceList } from "@/hooks/useServiceList";
import { DeleteButton } from "../settings/settings.style";
import { TrashIcon } from "@/components/Icons";
import DeleteConfirm from "@/components/Popup/DeleteConfirmation";

const ServiceCard = ({ service }) => {
  const { deleteService, loading } = useServiceStore();

  const deleteThisService = async () => {
    try {
      await deleteService(service.id);
    } catch (error) {
      console.log("Error deleting Serice", error);
    }
  };

  if (loading) {
    return <ServiceCardSkeleton />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md relative p-6 flex flex-col justify-between">
      <div>
        <button className="absolute right-4 top-2">
          <DeleteConfirm onConfirm={deleteThisService} />
        </button>
        <h3 className="text-lg font-semibold mb-2 overflow-hidden">
          {service.name}
        </h3>
        <p className="text-gray-600 mb-4 overflow-hidden">
          {service.description}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            service.status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {service.status}
        </span>
        <Link
          to={`/dashboard?services=${service.apiKey}`}
          className="text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
const ServiceCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md relative p-6 flex flex-col justify-between animate-pulse">
      <div>
        <div className="absolute right-4 top-2 h-8 w-8 bg-gray-200 rounded-full"></div>
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-4"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

const ServicePage = () => {
  const { loading, servicesList: services, error } = useServiceList();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link to="/dashboard">
          <h1 className="text-sm text-blue-500 font-normal">All Services</h1>
        </Link>
        <Link
          to="/dashboard/new-service"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <FiPlus className="mr-2" />
          Create New Service
        </Link>
      </div>

      {error && <span className="m-auto">{error}</span>}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 5 }, (_, index) => (
            <ServiceCardSkeleton key={index} />
          ))}
        </div>
      ) : services?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <FiBox className="mx-auto text-gray-400 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">No services yet</h2>
          <p className="text-gray-600 mb-4">
            Create your first service to get started
          </p>
          <Link
            to="/dashboard/new-service"
            className="bg-[#7937fd] text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 inline-flex items-center"
          >
            <FiPlus className="mr-2" />
            Create New Service
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
