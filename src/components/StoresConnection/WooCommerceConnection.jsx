'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../UI/Modal';
import Image from 'next/image';
import wooImage from '../../../public/images/woo.png';
import { useConnectShopifyQuery } from '@/redux/DashboardApi';

export default function WooCommerceConnection() {
  const { data, error, isLoading } = useConnectShopifyQuery();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const payload = {
        shop: data.storeId,
      };
      await connectStore(payload).unwrap();
      reset();
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      alert('Failed to connect store.');
    }
  };
  return (
    <div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <form
          className="flex flex-col items-center gap-6 w-full max-w-md p-2"
        >
          <h2 className="text-black font-semibold text-2xl md:text-2xl text-center mt-2">
            Connect Store Credentials
          </h2>
          <p className="text-[#00000099] text-center text-sm mb-2">
            Enter your Credentials to setup your InspireEdge.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-1">
              <div className="flex bg-gray-100 rounded-md px-3 py-2">
                <div className="flex flex-col gap-2 w-full">
                  <span className="text-xs text-[#00000099] ">Store ID</span>
                  <input
                    {...register('storeId', {
                      required: 'Store ID is required',
                    })}
                    placeholder="Enter store domain"
                    className="w-full rounded-md py-2 outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex items-start w-full gap-2 text-lemon-100 text-sm underline  mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h6m0 0v6m0-6L10 19"
              />
            </svg>
            View Integration Docs
          </a>
          <button
            type="submit"
            className="bg-lemon-100 w-full rounded-lg py-3 font-medium text-black text-base mt-2"
          >
          </button>
        </form>
      </Modal>
      <div className="border-2 flex md:flex-row flex-col items-start w-full md:w-[512px] justify-between md:items-center gap-5  border-gray-200 rounded-[20px] py-4 px-5 text-white">
        <div className="flex gap-6 items-center">
          <Image
            src={wooImage}
            alt="WooCommerce"
            width={40}
            height={40}
            className="object-cover"
          />
          <div>
            <h3 className="font-bold text-xl">WooCommerce</h3>
            <h3 className="text-gray-200 text-sm">Instant one click connect</h3>
          </div>
        </div>
        <button
          className="bg-lemon-100 cursor-pointer text-sm rounded-lg font-medium text-black px-6 py-2"
          onClick={() => setModalOpen(true)}
        >
          Connect Now
        </button>
      </div>
    </div>
  );
}
