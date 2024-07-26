import React from "react";
import { useState } from "react";
import { TrashIcon } from "../Icons";

const DeleteConfirm = ({ onConfirm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    console.log("Item deleted");
    setIsModalOpen(true);
  };

  const handleClose = () => {
    console.log("Item deleted");
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleDelete}>
        <TrashIcon />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-[600px]">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete this item? This action cannot be
              undone.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleClose}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteConfirm;
