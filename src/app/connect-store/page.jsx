import CustomStore from '@/components/StoresConnection/CustomStore';
import MagnetoConnection from '@/components/StoresConnection/MagnetoConnection';
import ShopifyConnection from '@/components/StoresConnection/ShopifyConnection';
import WooCommerceConnection from '@/components/StoresConnection/WooCommerceConnection';

export default function page() {
  return (
    <div className="bg-black h-full pb-5 pt-24 px-2  manrope flex flex-col gap-4 items-center justify-center ">
      <div className="flex flex-col  items-center gap-14">
        <div className="w-full md:w-[489px] flex  text-center flex-col gap-4 ">
          <h2 className="text-white font-semibold text-4xl">
            Plug In. Recover Abandoned Carts in Minutes.
          </h2>
          <p className="text-gray-200   mt-4">
            InspireEdge connects with Shopify, WooCommerce, and more to track
            drop-offs and recover abandoned carts using AI-driven messages
          </p>
        </div>
        <div className="flex w-full px-5 flex-col gap-9">
          <WooCommerceConnection />
          <MagnetoConnection />
          <ShopifyConnection />
          <CustomStore />
        </div>
      </div>
      <p className="w-full px-4 md:px-0 md:w-[567px]  text-gray-200 text-sm text-start mt-6">
        By connecting your store, you agree to InspireEdge’s{' '}
        <span className="text-lemon-100 underline">
          {' '}
          Terms of Service, Privacy Policy, and Data Protection Standards,
        </span>{' '}
        including GDPR compliance.
      </p>
    </div>
  );
}
