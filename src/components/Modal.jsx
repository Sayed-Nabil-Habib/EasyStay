import React from 'react';

export default function Modal({
  isOpen,
  onClose,
  title,
  message,
  type = 'info',
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded p-6 shadow-md max-w-sm w-full">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{message}</p>

        {type === 'confirm' ? (
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
            >
              No
            </button>
            <button
              onClick={() => {
                onConfirm?.();
                onClose();
              }}
              className="px-4 py-2 text-sm rounded bg-accent text-white hover:opacity-90"
            >
              Yes, cancel
            </button>
          </div>
        ) : (
          <div className="text-right">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-accent text-white rounded hover:opacity-90"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
