'use client';
import React, { useState } from 'react';
import { useConnectShopifyQuery } from '@/redux/DashboardApi';
import { useForm } from 'react-hook-form';
import Modal from '../UI/Modal';

export default function WooCommerceConnection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [storeId, setStoreId] = useState(null); // ⬅️ track storeId after form submission

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, error, isLoading } = useConnectShopifyQuery(storeId, {
    skip: !storeId, // ⬅️ don't run the query if storeId is null/undefined
  });

  const onSubmit = (data) => {
    setStoreId(data.storeId); // ⬅️ triggers the query
    reset();
    setModalOpen(false);
  };

  return (
    <div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-6 w-full max-w-md p-2"
        >
          <h2 className="text-black font-semibold text-2xl text-center mt-2">
            Connect WooCommerce Store
          </h2>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-1">
              <div className="flex bg-gray-100 rounded-md px-3 py-2">
                <div className="flex flex-col gap-2 w-full">
                  <span className="text-xs text-[#00000099]">Store ID</span>
                  <input
                    {...register('storeId', {
                      required: 'Store ID is required',
                    })}
                    placeholder="Enter store ID"
                    className="w-full rounded-md py-2 outline-none text-sm"
                  />
                  {errors.storeId && (
                    <p className="text-red-500 text-xs">
                      {errors.storeId.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 w-full rounded-lg py-3 font-medium text-white text-base mt-2"
          >
            Connect
          </button>
        </form>
      </Modal>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Connect WooCommerce
      </button>

      {isLoading && <p>Connecting...</p>}
      {data && <p className="text-green-500">Connected Successfully!</p>}
      {error && <p className="text-red-500">Connection Failed</p>}
    </div>
  );
}
