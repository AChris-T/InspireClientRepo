'use client';
import React, { useState } from 'react';
import ContentCards from '../cards/ContentCards';
import Shopify from '../../../public/icons/Shopify';
import WooIcon from '../../../public/icons/WooIcon';
import MagnetoIcon from '../../../public/icons/MagnetoIcon';

export default function ConnectStore() {
  const [connected, setConnected] = useState(false);
  return (
    <div className="flex flex-col gap-3 manrope">
      <h3 className="text-xl font-medium text-black-100">
        Connect your E-commerce platform
      </h3>
      <ContentCards>
        <div className="flex flex-col md:flex-row gap-2">
          <ContentCards>
            <div className="flex flex-col gap-4">
              <Shopify />
              <h2 className="text-black-100 text-sm">Shopify Store</h2>
              <p className="text-[#00000099] text-xs">
                Quick one click install and automatically configure EdgeAI for
                your store
              </p>
              {connected ? (
                <div className="flex gap-2">
                  <button className="w-full cursor-not-allowed bg-[#E5E5E5] rounded-lg">
                    Connected
                  </button>
                  <button className="border-[1px] cursor-pointer w-full border-[#E5E5E5] rounded-lg">
                    Manage
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConnected(true)}
                  className="text-black-100 cursor-pointer font-medium text-sm bg-lemon-100 py-2 rounded-lg"
                >
                  {' '}
                  Connect Store
                </button>
              )}
            </div>
          </ContentCards>
          <ContentCards>
            <div className="flex flex-col gap-4">
              <WooIcon />
              <h2 className="text-black-100 text-sm">WooCommerce</h2>
              <p className="text-[#00000099] text-xs">
                Quick one click install and automatically configure EdgeAI for
                your store
              </p>
              {connected ? (
                <div className="flex gap-2">
                  <button className="w-full cursor-not-allowed bg-[#E5E5E5] rounded-lg">
                    Connected
                  </button>
                  <button className="border-[1px] cursor-pointer w-full border-[#E5E5E5] rounded-lg">
                    Manage
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConnected(true)}
                  className="text-black-100 cursor-pointer font-medium text-sm bg-lemon-100 py-2 rounded-lg"
                >
                  {' '}
                  Connect Store
                </button>
              )}
            </div>
          </ContentCards>
          <ContentCards>
            <div className="flex flex-col gap-4">
              <MagnetoIcon />
              <h2 className="text-black-100 text-sm">Magento Store</h2>
              <p className="text-[#00000099] text-xs">
                Quick one click install and automatically configure EdgeAI for
                your store
              </p>
              {connected ? (
                <div className="flex gap-2">
                  <button className="w-full cursor-not-allowed bg-[#E5E5E5] rounded-lg">
                    Connected
                  </button>
                  <button className="border-[1px] cursor-pointer w-full border-[#E5E5E5] rounded-lg">
                    Manage
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConnected(true)}
                  className="text-black-100 cursor-pointer font-medium text-sm bg-lemon-100 py-2 rounded-lg"
                >
                  {' '}
                  Connect Store
                </button>
              )}
            </div>
          </ContentCards>
        </div>
      </ContentCards>
    </div>
  );
}
